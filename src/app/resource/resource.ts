import { Component, OnInit } from '@angular/core';
import { Resourceservice } from '../Services/resourceservice';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resource',
  imports: [CommonModule],
  templateUrl: './resource.html',
  styleUrl: './resource.css',
})
export class Resource implements OnInit {

  constructor(private service : Resourceservice){}

  ApiData : any;


  ngOnInit(): void {
      this.getApiData();
  }
  getApiData(){
    // this.ApiData = this.service.rxResourceData;
    this.ApiData = this.service.resourceData;
  }
}
