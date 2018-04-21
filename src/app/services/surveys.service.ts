import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SurveysService {

  constructor(public http : Http) { 

  }

  getSurveyList(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts').map(res => res.json());
  }

 
  getSurvey(id){
    return this.http.get('https://jsonplaceholder.typicode.com/posts/'+id).map(res => res.json());
  }

}
