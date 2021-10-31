import { Session } from './../models/session';
import { Get } from './interfaces/crud';
import { createUri } from './server';

export class SessionService implements Get<Session> {
  private constructor() {}

  static getInstance(): SessionService {
    return new SessionService();
  }
  async get(): Promise<Session> {
    return await fetch(createUri('session'))
      .then(response => response.json())
      .then(res => res.data);
  }
}
