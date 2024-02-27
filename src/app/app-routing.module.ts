import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ChatComponent } from './chat/chat.component';
import { ChannelComponent } from './channel/channel.component';
import { UserprofileComponent } from './userprofile/userprofile.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
    
     
    ],
    
  },
 
  { path: 'chat', component: ChatComponent },
  { path: 'signup', component: SignupComponent },
      { path: 'login', component: LoginComponent },
      {path: 'channel', component:ChannelComponent},
      {path: 'pro5',component:UserprofileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
