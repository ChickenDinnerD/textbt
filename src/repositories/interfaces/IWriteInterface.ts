export interface IWrite<Note> {
    createNote(name: string, text: string): Promise<number>;
}