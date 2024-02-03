import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styles: [
    `
      .online {
        color: white;
      }
    `,
  ],
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = '';
  serverCreated = false;
  servers = ['server1', 'server2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = `Server was created! Name is + ${this.serverName} `;
  }

  onUpdateServerName({ target: { value } }) {
    this.serverName = value;
  }
}
