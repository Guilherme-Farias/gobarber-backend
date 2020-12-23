import { Router } from 'express';
import AuthenticateUserService from '../services/AuthenticateUserService';

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
  try {
    const { email, password } = request.body;
    const authenticateUserService = new AuthenticateUserService();
    const { user, token } = await authenticateUserService.execute({
      email,
      password,
    });
    const userWithoutPassword = {
      id: user.id,
      name: user.name,
      email: user.email,
      created_at: user.created_at,
      updated_at: user.updated_at,
    };

    return response.status(201).json({ user: userWithoutPassword, token });
  } catch (err) {
    return response.status(err.statusCode).json({ error: err.message });
  }
});

export default usersRouter;
