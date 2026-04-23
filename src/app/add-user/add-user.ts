import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../crudservice';

@Component({
  selector: 'app-add-user',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './add-user.html',
  styleUrl: './add-user.css',
})
export class AddUser {

  addUserForm : FormGroup;

  constructor(private router : Router,
    private fb :FormBuilder,
    private crud : CrudService) {

  this.addUserForm = this.fb.group({
    name:[''],
    username:[''],
    email:['']
  })
}
  onCancel(){
    this.router.navigateByUrl("crud");
  }

  onSubmit(){
    console.log(this.addUserForm.value);
    this.crud.postData(this.addUserForm.value).subscribe(res =>{
      this.router.navigateByUrl("crud");
    })
  }
}
