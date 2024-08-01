import WebSocketClient from './WebSocketClient';
 
class ParkWebSocketService extends WebSocketClient{

  constructor(){
    super('http://192.168.4.88:8080/ws');
  }


  connect(token, onMessageReceived){
    super.connect(token, onMessageReceived, ['/topic/parkInfos'])
  }
}


export default new ParkWebSocketService();
