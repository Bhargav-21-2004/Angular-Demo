import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CrudService } from '../Services/crudservice';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-user',
  imports: [ReactiveFormsModule],
  templateUrl: './update-user.html',
  styleUrls: ['./update-user.css'],
})
export class UpdateUser implements OnInit {
 
  updateUserForm : FormGroup;
  
  constructor(private crud :CrudService,
    private router : Router,
    private fb :FormBuilder,
    private activeroute : ActivatedRoute,
    private cd : ChangeDetectorRef){

    this.updateUserForm = this.fb.group({
    id:[''],
    name:[''],
    username:[''],
    email:['']
  })
    }

    userId: { uid: number } = { uid: 0 };

    userData : any;

  ngOnInit(): void {

    this.userId = {
      uid : this.activeroute.snapshot.params['id']
    }
    console.log(this.userId.uid);
      this.crud.getDataById(this.userId.uid).subscribe(res =>{
        this.userData=res;
      this.updateUserForm.setValue({id:this.userData.id, name : this.userData.name,  username : this.userData.username , email : this.userData.email})
      })
  }
  onCancel(){
    this.router.navigateByUrl("crud");
  }

  onSubmit(){
    this.crud.putDataByID(this.userId.uid,this.updateUserForm.value).subscribe(res => {
      this.router.navigateByUrl('crud');
    })
    }
}
