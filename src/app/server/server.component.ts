import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {

    serverId;
    serverStatus;

    constructor() {
        this.serverId = 10
        this.serverStatus = 'active'
    }

    getServerStatus() {
        return this.serverStatus;
    }

    setServerStatus(status: string) {
        this.serverStatus = status;
    }

    getColor() {
        return this.serverStatus === 'active' ? 'lightgreen' : 'lightred';
    }
}
