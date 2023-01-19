import { Request, Response, Router } from 'express';
import { noteService } from './service';

const mainRouter = Router();
const service = new class Service extends noteService {};

mainRouter.get('/',
    async (req: Request, res: Response) => {
        service.getMainPage(req, res);
});

mainRouter.get('/service', 
    async (req: Request, res: Response) => {
        service.getNotes(req, res);
});

export {mainRouter};
