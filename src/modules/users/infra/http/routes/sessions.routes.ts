import { Router } from 'express';
import SessionsControllers from '@modules/users/infra/http/controllers/SessionsControllers';

const usersRouter = Router();
const sessionsControllers = new SessionsControllers();

usersRouter.post('/', sessionsControllers.create);

export default usersRouter;
