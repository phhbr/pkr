import { Session } from '@/interfaces/session.interface';
import { v4 as uuidv4 } from 'uuid';
import { CreateSessionDto } from '@dtos/session.dto';

class SessionService {
  public async createSession(): Promise<Session> {
    const createUserData: CreateSessionDto = { id: uuidv4() };

    return createUserData;
  }
}

export default SessionService;
