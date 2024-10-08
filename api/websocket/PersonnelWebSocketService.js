import WebSocketClient from "./WebSocketClient";
class PersonnelWebSocketService extends WebSocketClient{

  constructor() {
    super("http://192.168.4.88:8080/ws");
  }


connect(token, onMessageReceived){
  super.connect(token, onMessageReceived, [
    '/topic/addPersonnel',
    '/topic/updatePersonnel',
    '/topic/deletePersonnel'
  ]);
}
}

export default new PersonnelWebSocketService();