import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsertService } from '../../services/insert.service';
import {ValidateService} from '../../services/validate.service';
import {Dentist} from '../../model/dentist';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username : string;
  password : string;
  name: string;
  email : string;
  dent:Dentist;

   add(){
     this.dent.username = this.username;
     this.dent.password = this.password;
     this.dent.name = this.name;
     this.dent.email = this.email;
     this.int.insertUser(this.dent).subscribe(
      response =>{
        if (response==true) {
          this.flashMessage.show('User created successfully',{cssClass:'alert-success',timeout:3000});
          this.router.navigate(['/login']);
        } else {
        }
      })

   }

   insertDentist(){
     const user = {
       username : this.username,
       password : this.password,
       name : this.name,
       email : this.email
     }
     this.add();
   }

   constructor(private int:InsertService, 
    private validateService:ValidateService, 
    private flashMessage:FlashMessagesService,
    private router: Router) {
    this.dent=new Dentist();
   }

  ngOnInit() {
  }

}
