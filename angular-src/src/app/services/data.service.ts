import { Injectable } from '@angular/core';

import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Router} from '@angular/router';

@Injectable()
export class DataService {

  constructor(private http:Http,private router:Router) { }

  convertExcelToJson(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:3000/excel/file',{headers:headers})
    .map(res => res.json());
  }
}
