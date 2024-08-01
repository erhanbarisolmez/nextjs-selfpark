import  {Stomp} from '@stomp/stompjs';
import SockJS from 'sockjs-client';

const WebSocketService = {
  stompClient: null,

  connect(token, onMessageReceived) {
    const socket = new SockJS('http://192.168.4.88:8080/ws');
    this.stompClient = Stomp.over(socket);

    const headers = {
      Authorization: `Bearer ${token}`
    };

    this.stompClient.connect(headers, () => {
      console.log("WebSocket Connected");
      this.stompClient.subscribe('/topic/parkInfos', (message) => {
        onMessageReceived(message);
      });
    }, (error) => {
      console.log("Error connecting to WebSocket: " + error);
    });
  },

  disconnect() {
    if (this.stompClient !== null) {
      this.stompClient.disconnect();
      console.log("WebSocket disconnected");
    }
  },

  subscribe(topic, callback) {
    if (this.stompClient !== null) {
      this.stompClient.subscribe(topic, (message) => {
        callback(message);
      });
    }
  }
};

export default WebSocketService;