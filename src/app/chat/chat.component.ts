import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { Stomp, CompatClient, Message } from '@stomp/stompjs';
import { ChatMessage } from './chat.model';




@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent  implements OnInit {
message: string ='';
stompClient!: CompatClient;



  

constructor() {}

ngOnInit() {
  this.initializeWebSocketConnection();
}

initializeWebSocketConnection() {
  const socket = new WebSocket('ws://localhost:8003/api/chat'); // Update with your WebSocket endpoint

  this.stompClient = Stomp.over(socket);
  this.stompClient.connect({}, () => {
    this.stompClient.subscribe('/topic/chat', (message: Message) => {
      const newMessage: ChatMessage = JSON.parse(message.body);
      // Handle incoming message
    });
  });
}

sendMessage() {
  const chatMessage: ChatMessage = {
    content: this.message
  };
  this.stompClient.send('/app/chat', {}, JSON.stringify(chatMessage));
  this.message = ''; // Clear the input field
}
}
