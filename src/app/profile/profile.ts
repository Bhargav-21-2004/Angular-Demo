import { Component } from '@angular/core';
import { SharedData } from '../shared-data';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {

  dummyData : any;

  isEligible:boolean;
  constructor(private sharedData: SharedData){
    this.dummyData = this.sharedData.userData;

    this.isEligible = this.sharedData.isEligible();
  }

}
