import { NextFunction, Request, Response } from 'express';
import { Session } from '@/interfaces/session.interface';
import SessionService from '@services/session.service';

class SessionController {
  public sessionService = new SessionService();

  public createSession = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const createUserData: Session = await this.sessionService.createSession();

      res.status(201).json({ data: createUserData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };
}

export default SessionController;
