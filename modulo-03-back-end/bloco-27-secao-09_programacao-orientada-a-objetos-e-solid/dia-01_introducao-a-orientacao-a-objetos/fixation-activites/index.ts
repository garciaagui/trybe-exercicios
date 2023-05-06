class Tv {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo?: string;

  constructor(b: string, s: number, r: string, c: string[]) {
    this._brand = b;
    this._size = s;
    this._resolution = r;
    this._connections = c;
  }

  turnOn(): void {
    console.log(`Brand: ${this._brand} - Size: ${this._size} inches - Resolution: ${this._resolution} - Connections: ${this._connections}`);
  }

  get connectedTo(): string | undefined {
    return this._connectedTo;
  }

  set connectedTo(newConnection: string | undefined) {
    if (!newConnection || this._connections.includes(newConnection)) {
      this._connectedTo = newConnection;
      console.log(`New connection established on ${this._connectedTo}`);
    } else {
      console.log('Sorry, connection unavailable!');
    }
  }
}

const tv1 = new Tv('Sony', 50, '4K', ['HDMI', 'Ethernet', 'Wifi']);
tv1.turnOn();

tv1.connectedTo = 'HDMI';
tv1.connectedTo = 'VGA';
