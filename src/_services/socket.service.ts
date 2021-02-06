import { io } from 'socket.io-client';
import { fromEvent, Observable } from 'rxjs';

export class SocketService {
   private socket: any;

   public init(): SocketService {
      console.log('initiating socket service');
      this.socket = (io as any)(process.env.REACT_APP_API_SERVER_URL);
      return this;
   }

   // user connect
   public connect(userId: string): void {
      this.socket.emit('USER_CONNECTED', { user_id: userId });
   }

   // link message event to rxjs data source
   public onMessage(): Observable<any> {
      return fromEvent(this.socket, 'NEW_MESSAGE');
   }

   // disconnect - used when unmounting
   public disconnect(): void {
      this.socket.disconnect();
   }
}
