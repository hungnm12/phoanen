import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { ChatMessage } from './chat';
import { ApiService } from './chat.service';
import { SenderService } from './sender.service';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent  implements OnInit {
message: string ='';
socket$!: WebSocketSubject<any>;
chatMessages: ChatMessage[] = [];
sender: string='';

  

constructor(private apiService: ApiService, private senderService: SenderService) {}

ngOnInit() {
  this.sender = this.senderService.sender;
  this.socket$ = webSocket('ws://localhost:8003/api/chat'); 
 
  this.socket$.subscribe(
    message => {
      // Handle incoming messages
      this.chatMessages.push(message);
    },
    error => {
      // Handle WebSocket error
    }
  );
}

sendMessage(): void {
  const chatMessage: ChatMessage = {
    sender: this.sender,
    content: this.message
  };

  this.socket$.next(chatMessage);
  this.message = '';
}
}
