import {IWrite} from 'src/repositories/interfaces/IWriteInterface';
import {IRead} from 'src/repositories/interfaces/IReadInterface';
import { QueryTypes } from 'sequelize';
import {connection} from '../connection';



export abstract class NoteRepository<Note> implements IWrite<Note>, IRead<Note> {

    public async findAll(): Promise<Note[]> {

        const notesArr = [];
        notesArr.push(await connection.query('SELECT * FROM notes', {type: QueryTypes.SELECT}));

        return notesArr;
    }

    public async findNoteById(id: number): Promise<object> {

        const result = await connection.query(`SELECT * FROM notes WHERE id = ${id}`, {type: QueryTypes.SELECT});

        return result[0];
    }

    public async createNote(name: string, text: string): Promise<number> {

        const [note] = await connection.query(`INSERT INTO notes (noteName, noteText) VALUES ('${name}', '${text}')`, {type: QueryTypes.INSERT});

        return note;
    }

    public async findNoteByName(noteName: string): Promise<object> {

        const [note] = await connection.query(`SELECT * FROM notes WHERE noteName = '${noteName}'`, {type: QueryTypes.SELECT});

        if(!note) {
          return note;
        }
        const id = note['id'];

        return id;
    }
}
