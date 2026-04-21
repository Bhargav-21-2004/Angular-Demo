import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormControlName, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form.html',
  styleUrls: ['./reactive-form.css'],   
})
export class ReactiveForm {

  reactiveForm: FormGroup;

  // constructor(){
  //   this.reactiveForm = new FormGroup({
  //     firstName:new FormControl(),
  //     lastName : new FormControl(),
  //     email : new FormControl(),
  //     contact : new FormControl(),
  //     oncheck : new FormControl(),
  //     address:new FormGroup({
  //       city : new FormControl(),
  //       district: new FormControl(),
  //       pincode: new FormControl(),
  //     })
  //   })
  // }
  constructor(private fb: FormBuilder) {
    this.reactiveForm = this.fb.group({
      firstName: ['', Validators.required,Validators.pattern("^[a-zA-Z]+ $")],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email,Validators.maxLength(10)]],
      contact: ['', Validators.required],
      oncheck: [false],
      address: this.fb.group({
        city: [''],
        district: [''],
        pincode: [''],
      }),
      skills: this.fb.array([this.newSkill()])   
    });
  }

  get skills(): FormArray {
    return this.reactiveForm.get('skills') as FormArray;
  }
  newSkill(): FormGroup {
    return this.fb.group({
      skill: ['', Validators.required]
    });
  }
  
  AddSkill() {
    this.skills.push(this.newSkill());
  }

  onDelete(i: number) {
    this.skills.removeAt(i);
  }

  PartialValues() {
    this.reactiveForm.patchValue({
      firstName: "abhi",
      lastName: "ram",
      email: "abhiram@gmail.com",
      contact: "8787818125",
      oncheck: true,
      address: {
        city: "vzm",
        district: "vzm",
        pincode: "535003",
      }
    });
  }

  setAllValues() {
    this.reactiveForm.setValue({
      firstName: "abhi",
      lastName: "ram",
      email: "abhiram@gmail.com",
      contact: "8787818125",
      oncheck: true,
      address: {
        city: "vzm",
        district: "vzm",
        pincode: "535003",
      },
      skills: []  
    });
  }

  onReset() {
    this.reactiveForm.reset();
  }

  onSubmit() {
    console.log(this.reactiveForm.value);
  }
}
