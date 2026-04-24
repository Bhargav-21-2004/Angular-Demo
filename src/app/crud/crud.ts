import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CrudService } from '../Services/crudservice';
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
  this.router.navigate(['update-user',id]);
}

onView(id:number){
  this.router.navigate(['view-user',id]);
}

onDelete(id:number){
  if (confirm("Do you want to delete this record?")){
  this.apiData.deleteById(id).subscribe(res=>{
    this.getApiData();
  })
}
}

}
