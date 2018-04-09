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
     this.add();
   }

   constructor(private int:InsertService, private validateService:ValidateService) {
    this.dent=new Dentist();
   }

  ngOnInit() {
  }

}
