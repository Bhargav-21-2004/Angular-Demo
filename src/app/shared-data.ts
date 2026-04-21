import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedData {

  constructor() {}
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
