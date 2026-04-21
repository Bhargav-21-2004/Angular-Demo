import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attribute-directives',
  imports: [CommonModule,FormsModule],
  templateUrl: './attribute-directives.html',
  styleUrl: './attribute-directives.css',
})
export class AttributeDirectives {
  textcolor:string ="text-primary";

  stylecolor:string ='orange';
  onChange(color:string){
    this.textcolor = color;

  }
  ChangeColor(ngstylecolor:string){
    this.stylecolor =ngstylecolor;
  }

    isChange:boolean =false;

    isTextColor:boolean = false;
    userClass:string ='';

    customClass:any ={
      'color' :'black',
      'height':'200px',
      'width':'300px',
      'border':' 1px solid black'
    }
}
