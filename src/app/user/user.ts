import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [RouterLink],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {

  constructor(private router : Router){}
  login(){
    this.router.navigateByUrl("Attribute-directive");
    // this.router.navigate(['structural-directives']);
  }
}
