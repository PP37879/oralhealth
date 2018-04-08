import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';
import { Component } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PDFComponent } from './components/pdf/pdf.component';
import { ExcelComponent } from './components/excel/excel.component';
import { ImportComponent } from './components/import/import.component';
import { MenuComponent } from './components/menu/menu.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FileComponent } from './components/file/file.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import {ValidateService} from './services/validate.service';
import { InsertService } from './services/insert.service';
const appRoutes : Routes = [
  {path : '' , component : HomeComponent},
  {path : 'login' , component : LoginComponent},
  {path : 'register' , component : RegisterComponent},
  {path : 'import' , component : ImportComponent},
  {path : 'menu' , component : MenuComponent},
  {path : 'pdf' , component : PDFComponent},
  {path : 'excel' , component : ExcelComponent},
  {path : 'file' , component : FileComponent}
]

@Component({
	selector: 'app-root',
	template: `<sheetjs></sheetjs>`
})

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    PDFComponent,
    ExcelComponent,
    ImportComponent,
    MenuComponent,
    NavbarComponent,
    FileComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    InsertService,
    ValidateService
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
