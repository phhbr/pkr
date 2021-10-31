import { Component, h, Listen } from '@stencil/core';
import { User } from './../../models/user';
import { Session } from './../../models/session';
import state from './../../store/store';

@Component({
  tag: 'pkr-root',
  shadow: true,
})
export class AppRoot {
  @Listen('pkr-join')
  onPkrJoin(event: CustomEvent<Session & User>) {
    state.session = { id: event.detail.id };
    state.user = { name: event.detail.name };
  }
  render() {
    return (
      <div>
        <header>
          <h1>Scrum Poker</h1>
        </header>
        <main>
          {Boolean(state.session?.id) ? (
            <div>
              foook off {state.user.name} of {state.session.id}
            </div>
          ) : (
            <pkr-home></pkr-home>
          )}
        </main>
      </div>
    );
  }
}
