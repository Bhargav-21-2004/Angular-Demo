import { Component, OnInit } from '@angular/core';
import { SharedData } from '../shared-data';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile implements OnInit{

  dummyData : any;

  apiData : any;
  isEligible:boolean;
  constructor(private sharedData: SharedData){
    this.dummyData = this.sharedData.userData;

    this.isEligible = this.sharedData.isEligible();
  }

  ngOnInit(): void {
      this.getApiData();
  }
  getApiData(){
    this.sharedData.getData().subscribe(res => {
      this.apiData = res;
    })
  }
  
}
