import { Request, Response, Router } from 'express';
import { noteService } from './service';

const mainRouter = Router();
const service = new class Service extends noteService {};

mainRouter.get('/',
    async (req: Request, res: Response) => {
        res.send("API is working!");
});

mainRouter.get('/service', 
    async (req: Request, res: Response) => {
        service.getNotes(req, res)

});

export {mainRouter};
