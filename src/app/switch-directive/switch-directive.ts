import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-switch-directive',
  imports: [CommonModule],
  templateUrl: './switch-directive.html',
  styleUrl: './switch-directive.css',
})
export class SwitchDirective {
  grade:number = 0;

  set(x:number){
    this.grade =x;
  }

}
