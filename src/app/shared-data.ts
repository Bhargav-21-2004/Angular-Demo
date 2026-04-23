import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class SharedData {
  
  apiurl = "https://jsonplaceholder.typicode.com/posts/1";

  constructor(private https : HttpClient) {}
  
   getData(): Observable<any> {
    return this.https.get(this.apiurl);
  }
  userData = {
    id:'1',
    name:'AbhiRam',
    age:24,
    username:'abhi',
    email:'abhiram@gmail.com',
    subscription:'Premium'
  }

  isEligible(){
    if(this.userData.subscription === 'Premium' && this.userData.email.endsWith('@gmail.com')){
      return true;
    }else{
      return false;
    }
  }
}
