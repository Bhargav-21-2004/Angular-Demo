import { NgIf} from '@angular/common';
import { Component } from '@angular/core';
import { DataBinding } from '../data-binding/data-binding';
import { SharedData } from '../Services/shared-data';

@Component({
  selector: 'app-directives',
  imports: [NgIf,DataBinding],
  templateUrl: './directives.html',
  styleUrl: './directives.css',
})
export class Directives {

  serviceData : any;

  isEligible :boolean;

  constructor(private sharedData : SharedData){
    this.serviceData = this.sharedData.userData;
    
    this.isEligible = this.sharedData.isEligible();
  }
}
