import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SenderService {
  sender: string ='';

  setSender(sender: string): void {
    this.sender = sender;
  }
}