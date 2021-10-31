import session from 'express-session';
import { v4 as uuidv4 } from 'uuid';

const oneDay = 1000 * 60 * 60 * 24;

const sessionMiddleware = session({
  secret: uuidv4(),
  saveUninitialized: true,
  cookie: { maxAge: oneDay },
  resave: false,
});

export default sessionMiddleware;
