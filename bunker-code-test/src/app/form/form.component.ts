import { Component, OnInit } from '@angular/core';
//import {FormService} from './form.service';
import {Http, Response, Headers, RequestOptions} from "@angular/http";

import {Observable} from 'rxjs/Rx';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  
constructor(private http:Http) { }
 public firstName: string;
        public lastName: string;
        public color: string;
      //  constructor(private _formService: FormService) { }
        ngOnInit() {
  
    //this.getnameandcolor();
    this.postdetails(this.firstName,this.lastName,this.color);
          //this.postlastname();
        //  this.postcolor()

          
  }
 

  //getnameandcolor() {
    //this._formService.getnameandcolor().subscribe(
      //data => {
       // this.firstName = data[0]
       // this.lastName = data[1]
       // this.color = data[2]
     // },
     // err => console.error(err),
     // () => console.log('done loading firstname')
      
    //);
 // }

  postdetails(firstName,lastName,color){
    var headers = new Headers();
headers.append('Content-Type', 'application/json');
this.http.post('https://bunkerdev.azure-api.net/codetest/api/people/add', 
                      {firstName:'aaa',lastName:'bbb',color:'blue'},
                      {headers:headers})
.map((res: Response) => res.json()).subscribe(
       data => {
     this.firstName = data[0]
        this.lastName = data[1]
       this.color = data[2]
       //  this.getnameandcolor();
         return true;
       },
       error => {
         console.error("Error saving firstName!");
         return Observable.throw(error);
       }
    );
  }
}
  

    // Update a comment