import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChatMessage } from './chat';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:8003'; // Update with your backend URL

  constructor(private http: HttpClient) {}

 

  sendMessage(message: ChatMessage): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/chat`, message);
  }
}