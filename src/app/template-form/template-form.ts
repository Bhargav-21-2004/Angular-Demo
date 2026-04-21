import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../user/user';
import { Fromuser } from '../fromuser';
import { CommonModule } from '@angular/common';
import { first } from 'rxjs';
import { NgforDirective } from '../ngfor-directive/ngfor-directive';

@Component({
  selector: 'app-template-form',
  imports: [FormsModule,CommonModule],
  templateUrl: './template-form.html',
  styleUrls: ['./template-form.css'],
})
export class TemplateForm implements OnInit{

  userObject : Fromuser = {}

  onSubmit(userForm:NgForm){
    console.log("Form Submitted",userForm.value);
  }
  ngOnInit():void {
      this.userObject={
        firstName:'Bhargav',
        lastName:'Sai',
        email:'bhargav@gmail.com',
        contact:'8125325384',
        oncheck:true
      }
  }

  setValues(userForm:NgForm){
    let obj ={
        firstName:"Rahul",
        lastName:"Kumar",
        email:"bhargav@gmail.com",
        contact:"8125325384",
        oncheck:true
    }
    userForm.setValue(obj);
  }
  PatchValues(userForm:NgForm){
    let obj={
        firstName:"Abhi",
        lastName:"Ram",
        email:"bhargav@gmail.com",
        contact:"8125325384",
        oncheck:true
    }
    userForm.control.patchValue(obj);
  }
  onReset(userForm:NgForm){
    userForm.reset();
    // userForm.resetForm();
  }
}
