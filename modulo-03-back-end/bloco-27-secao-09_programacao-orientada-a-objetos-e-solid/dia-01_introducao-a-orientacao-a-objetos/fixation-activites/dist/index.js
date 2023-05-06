"use strict";
class Tv {
    constructor(b, s, r, c) {
        this._brand = b;
        this._size = s;
        this._resolution = r;
        this._connections = c;
    }
    turnOn() {
        console.log(`Brand: ${this._brand} - Size: ${this._size} inches - Resolution: ${this._resolution} - Connections: ${this._connections}`);
    }
    get connectedTo() {
        return this._connectedTo;
    }
    set connectedTo(newConnection) {
        if (!newConnection || this._connections.includes(newConnection)) {
            this._connectedTo = newConnection;
            console.log(`New connection established on ${this._connectedTo}`);
        }
        else {
            console.log('Sorry, connection unavailable!');
        }
    }
}
const tv1 = new Tv('Sony', 50, '4K', ['HDMI', 'Ethernet', 'Wifi']);
tv1.turnOn();
tv1.connectedTo = 'HDMI';
tv1.connectedTo = 'VGA';
