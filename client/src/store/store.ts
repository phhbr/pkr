import { createStore } from '@stencil/store';
import { Session } from './../models/session';
import { User } from './../models/user';

const { state, onChange } = createStore({
  user: { name: null },
  session: { id: null },
});

onChange('user', (user: User) => (state.user = user));
onChange('session', (session: Session) => (state.session = session));

export default state;
