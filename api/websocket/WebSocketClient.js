import { Stomp } from "@stomp/stompjs"
import SockJS from "sockjs-client"

export default class WebSocketClient {
  constructor(url) {
    this.url = url;
    this.stompClient = null;
  }

  connect(token, onMessageReceived, topics) {
    const socket = new SockJS(this.url);
    this.stompClient = Stomp.over(socket);

    const headers = {
      Authorization: `Bearer ${token}`
    }
    this.stompClient.connect(headers, () => {
      console.log('WebSocket Connected');
      topics.forEach(topic => {
        this.stompClient.subscribe(topic, message => {
          onMessageReceived(topic, message);
        });
      });
    }, error => {
      console.log('Error connecting to WebSocket: ' + error);
    });
  }

  disconnect() {
    if (this.stompClient !== null) {
      this.stompClient.disconnect();
      console.log('WebSocket disconnected');
    }

  }
} 