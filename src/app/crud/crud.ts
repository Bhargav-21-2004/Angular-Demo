import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CrudService } from '../crudservice';
import { Iuser } from '../iuser';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
@Component({
  selector: 'app-crud',
  imports: [CommonModule],
  templateUrl: './crud.html',
  styleUrl: './crud.css',
})
export class Crud implements OnInit {

  ApiData : Iuser[] =[];
  constructor(private apiData :CrudService,
    private cd :ChangeDetectorRef,
    private router : Router
  ){}

  ngOnInit(): void {
      this.getApiData();
  }
  getApiData(){
    this.apiData.getData().subscribe(res => {
      this.ApiData =res;
      this.cd.detectChanges();
    })
  }
  AddUser(){
   this.router.navigateByUrl("add-user");
  }

  onUpdate(id: number){
  this.router.navigateByUrl(`update-user/${id}`);
}

}
