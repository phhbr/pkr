import { Component, Element, Event, EventEmitter, h, Host } from '@stencil/core';
import { User } from './../../models/user';
import { Session } from './../../models/session';
import { SessionService } from './../../services/session.service';

@Component({
  tag: 'pkr-home',
  shadow: true,
})
export class AppHome {
  @Element() el: HTMLElement;

  @Event({ eventName: 'pkr-join' }) pokerJoin: EventEmitter<Session & User>;

  private sessionEl: HTMLInputElement;
  private nameEl: HTMLInputElement;
  private sessionService: SessionService;

  constructor() {
    this.sessionService = SessionService.getInstance();
  }

  private get sessionId(): string {
    return this.sessionEl.value;
  }

  private get name(): string {
    return this.nameEl.value;
  }

  render() {
    return (
      <Host>
        <div>
          <label htmlFor="name">
            Your Name
            <input id="name" ref={el => (this.nameEl = el)} />
          </label>
        </div>
        <div>
          <label htmlFor="session">
            Session Id
            <input id="session" ref={el => (this.sessionEl = el)} />
          </label>
        </div>
        <div>
          <button onClick={this.handleSession}>Join / Create</button>
        </div>
      </Host>
    );
  }

  private handleSession = (): void => {
    Boolean(this.sessionId) ? this.createSession() : this.joinSession();
  };
  createSession() {
    console.log('create');
    this.sessionService.get().then(session => {
      debugger;
      return this.pokerJoin.emit({ ...session, name: this.name });
    });
  }
  joinSession() {
    Promise.all([]).then(() => this.pokerJoin.emit({ id: this.sessionId, name: this.name }));
  }
}
