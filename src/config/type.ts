export interface NoteData {
	id: number,
	title: string;
	description?: string;
	startDate: Date;
	dueDate?: Date;
	priority: "Baixa" | "Normal" | "Alta";
	state: "Novo" | "Em Andamento" | "Pronto";
	tags?: {
    id: number;
    value: string;
  }[];
}

export interface ProntoData {
  name: string;
  notas: NoteData[];
}