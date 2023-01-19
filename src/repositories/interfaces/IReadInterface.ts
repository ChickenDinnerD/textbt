export interface IRead<Notes> {
    findAll(): Promise<Notes[]>;
    findNoteById(id: number): Promise<object>;
    findNoteByName(noteName: string): Promise<object>;
}