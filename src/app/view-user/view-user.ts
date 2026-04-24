import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../Services/crudservice';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-view-user',
  imports: [],
  templateUrl: './view-user.html',
  styleUrl: './view-user.css',
})
export class ViewUser {

  constructor(private crud :CrudService,
    private router : Router,
    private fb :FormBuilder,
    private activeroute : ActivatedRoute,
    private cd : ChangeDetectorRef){}

    userId: { uid: number } = { uid: 0 };

    userData : any;

    ngOnInit(): void {

      this.activeroute.paramMap.subscribe(params => {
    const id = Number(params.get('id'));
    this.crud.getDataById(id).subscribe(res => {
    this.userData = res;
    this.cd.detectChanges();
   });
  });

    }
    onClose(){
    this.router.navigateByUrl("crud");
    }

}
