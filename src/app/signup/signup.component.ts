import { ChangeDetectorRef, Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  hide = true;
  username: string = '';
  email: string = '';
  password: string = '';
  telephone: string = '';
  confirmPassword: string = '';
  fullname: string = '';
  token:String='';
  exist:String='';
  noticeIfUserExist:String='';
  constructor(private http: HttpClient,private cdr: ChangeDetectorRef) { } 

  public async register() {
    
    const registerData = {
      email: this.email,
      password: this.password,
      fullName:this.fullname  
    };

    try {
      const response =await  this.http.post('http://localhost:8003/api/v1/auth/register', registerData,{responseType:"text"
        // headers:new HttpHeaders().set('Authorization','Bearer '+localStorage.getItem('access_token'))
      });
      
   await response.forEach(value=>{
     var x = JSON.parse(value);
     this.token=x['token'];
     this.exist=x['exist'];
     this.noticeIfUserExist=x['noticeIfUserExist'];

      });
      console.log(this.token);  
      console.log(this.noticeIfUserExist);
      alert(this.noticeIfUserExist);
      // this.title= "he;ppopooo";
      // this.cdr.detectChanges(); 
    } catch (error) {
      console.log(error);
    }
}
}
