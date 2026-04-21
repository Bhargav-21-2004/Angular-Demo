import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-directives',
  imports: [CommonModule,FormsModule],
  templateUrl: './structural-directives.html',
  styleUrl: './structural-directives.css',
})
export class StructuralDirectives {

  isCheck :boolean = false;

  isInput :boolean = true;

  input1:string ='';

  input2:string ='';

  onSubmit(){
    this.isCheck = !this.isCheck;
  }

  onShow(){
    this.isInput=true;
  }
  onHide(){
    this.isInput=false;
  }
}
