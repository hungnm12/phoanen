import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SenderService } from '../chat/sender.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide = true;
  email: string = '';
  password: string = '';
  sender: string =''
  token:String='';
  
  constructor(private http: HttpClient, private router: Router, private senderService: SenderService) { } 
  public async login(){
    
    const loginData = {
      email: this.email,
      password: this.password,
    };
    try {
      const res = await this.http.post('http://localhost:8003/api/v1/auth/authenticate',loginData,{responseType:"text"});
      await res.forEach(value=>{
        var y = JSON.parse(value);
        this.token= y['token'] as String;
      }
        );
       if(this.token!= null ||this.token!=''){
        alert("Login successfully!")
        // setTimeout(() =>{},2000)
        this.router.navigate(['chat']);
        this.senderService.setSender(this.sender);
       }
    } catch (error) {
      alert("The information does not correct")
    }
  }
}
