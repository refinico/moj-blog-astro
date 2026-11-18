/**
 * Audyt zależności z datowanymi wyjątkami.
 *
 * `npm run audit` działa jak `npm audit`, ale pomija podatności z listy ACCEPTED
 * do daty `until` — razem z pakietami pośrednimi zgłaszanymi wyłącznie przez tę
 * podatność. Po dacie wygaśnięcia wyjątek przestaje działać i skrypt zgłosi błąd,
 * co wymusza świadomą decyzję: przedłużyć datę albo (lepiej) usunąć wyjątek,
 * gdy upstream wyda łatana wersję.
 *
 * Wyjątek NIE wyłącza alertów Dependabota na GitHubie — tam zarządzaj osobno
 * (Security → Dependabot alerts → dismiss z powodem "build tool, not exploitable").
 */
import { spawnSync } from 'node:child_process';

const ACCEPTED = [
	{
		id: 'GHSA-fc5q-39xc-vjpf',
		sourceId: 1247710,
		cve: 'CVE-2026-112366',
		until: '2026-12-31',
		// picomatch ReDoS: wszystkie wersje ≤ 4.0.7 podatne, brak łatanej wersji na npm,
		// fix (micromatch/picomatch#194) wciąż niemerged. Zależność wyłącznie build-time
		// (globy przy budowie strony); blog nie przepuszcza przez nią danych od atakującego.
		reason: 'Brak łatanej wersji upstream; zależność build-time, nieeksploatowalna w tym projekcie.',
	},
];

const today = new Date().toISOString().slice(0, 10);
const active = ACCEPTED.filter((entry) => entry.until >= today);
const expired = ACCEPTED.filter((entry) => entry.until < today);
const acceptedAdvisoryIds = new Set(active.map((entry) => entry.id));
const acceptedAdvisorySources = new Set(active.map((entry) => entry.sourceId).filter(Boolean));

// npm audit kończy się kodem 1, gdy znajdzie podatności — czytamy stdout niezależnie od statusu.
const result = spawnSync('npm audit --json', { encoding: 'utf8', shell: true });
if (!result.stdout) {
	console.error('[audit] Nie udało się uruchomić `npm audit --json`.');
	process.exit(1);
}
const report = JSON.parse(result.stdout);
const vulnerabilities = report.vulnerabilities ?? {};

// Pomijamy pakiet, gdy JEGO problem to wyłącznie: (a) zaakceptowane advisory,
// albo (b) zależność od pakietów, które same są pominięte. Propagacja w pętli,
// bo kolejność zależności jest dowolna.
const skipped = new Set();
let changed = true;
while (changed) {
	changed = false;
	for (const [name, vuln] of Object.entries(vulnerabilities)) {
		if (skipped.has(name)) continue;
		const allViaHandled = vuln.via.every((item) => {
			if (typeof item === 'string') return skipped.has(item);
			return acceptedAdvisoryIds.has(item.id) || acceptedAdvisoryIds.has(item.url) || acceptedAdvisorySources.has(item.source);
		});
		if (allViaHandled) {
			skipped.add(name);
			changed = true;
		}
	}
}

const remaining = Object.keys(vulnerabilities).filter((name) => !skipped.has(name));

if (expired.length > 0) {
	console.error(`\n[audit] Wygasłe wyjątki — decyzja wymagana:`);
	for (const entry of expired) {
		console.error(`  ${entry.id} (${entry.cve ?? '-'}) wygasł ${entry.until}: ${entry.reason}`);
	}
}

console.log(`\n[audit] Pominięte (zaakceptowane do daty wygaśnięcia):`);
if (skipped.size === 0) {
	console.log('  (brak)');
} else {
	for (const name of skipped) console.log(`  ${name}`);
}

if (remaining.length > 0) {
	console.error(`\n[audit] NIEZAAKCEPTOWANE podatności: ${remaining.join(', ')}`);
	console.error('[audit] Uruchom `npm audit`, aby zobaczyć szczegóły.');
	process.exit(1);
}

console.log(`\n[audit] OK — brak niezaakceptowanych podatności (npm zgłasza ${report.metadata?.vulnerabilities?.total ?? '?'} z pominiętymi wyjątkami).`);
