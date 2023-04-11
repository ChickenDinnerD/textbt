import { Request, Response } from 'express';
import { NoteRepository } from '../src/repositories/note.repository';

const repo = new class Repository<T> extends NoteRepository<T> {};

export class noteService {

    public async getNotes(req: Request, res: Response){
        return res.send(await repo.findAll());
    };
}

export default noteService;
