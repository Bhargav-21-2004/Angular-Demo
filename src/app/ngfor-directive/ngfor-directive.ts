import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ngfor-directive',
  imports: [CommonModule,FormsModule],
  templateUrl: './ngfor-directive.html',
  styleUrl: './ngfor-directive.css',
})
export class NgforDirective {

  employees :any[] = [
    {empName:'John',empId:'101',empEmail:'john@gmail.com',empDep:'IT'},
    {empName:'ravi',empId:'102',empEmail:'ravi@gmail.com',empDep:'HR'},
    {empName:'Abhi',empId:'103',empEmail:'abbhi@gmail.com',empDep:'NON-IT'},
    {empName:'Ram',empId:'104',empEmail:'ram@gmail.com',empDep:'HR'},
  ]

  companies:string[] =['TCS','WIPRO','ACCENTURE','GOOGLE','AMAZON','AASLIN']
}
