import { Component, OnInit } from '@angular/core';
import {InsertService} from '../../services/insert.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Dentist} from '../../model/dentist';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username : String;
  password : String;
  constructor(
    private insertService:InsertService,
    private router:Router,
    private flashMessage:FlashMessagesService
  ) { }

  ngOnInit() {
  }
  onLoginSubmit(){
    const user =  {
      username : this.username,
      password : this.password
    }
    this.insertService.authenticateUser(user).subscribe(data =>{
        
    });
  }
}
