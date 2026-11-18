// Typy katalogu narzędzi AI.

export interface AiTool {
	/** Nazwa narzędzia */
	name: string;
	/** Adres strony narzędzia */
	url: string;
	/** Krótka etykieta "najlepsze do..." */
	best: string;
	/** Jednozdaniowy opis */
	desc: string;
	/** Wycen w skrócie */
	price: string;
}

export interface AiCategory {
	/** Identyfikator używany w anchorach (#cat-1) */
	id: string;
	/** Nazwa kategorii */
	name: string;
	/** Opis kategorii */
	desc: string;
	tools: AiTool[];
}
