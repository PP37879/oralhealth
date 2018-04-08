import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsertService } from '../../services/insert.service';
import {ValidateService} from '../../services/validate.service';
import {Dentist} from '../../model/dentist';

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
  confirmPassword : string;
  dent:Dentist;

   add(){
     this.dent.username = this.username;
     this.dent.password = this.password;
     this.dent.name = this.name;
     this.dent.email = this.email;
     this.int.insertUser(this.dent).subscribe(
      response =>{
        if (response==true) {
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
     if(!this.validateService.validateRegister(user)){
       console.log("All field must be filled");
       return false;
     }
     if(!this.validateService.validatePassword(this.password)){
       console.log("Password must be 8 or more characters");
       return false;
     }
     if(!this.validateService.validateEmail(this.email)){
       console.log("Please input appropriate email");
       return false;
     }
     console.log(this.confirmPassword);
     this.add();
   }

   constructor(private int:InsertService, private validateService:ValidateService) {
    this.dent=new Dentist();
   }

  ngOnInit() {
  }

}
