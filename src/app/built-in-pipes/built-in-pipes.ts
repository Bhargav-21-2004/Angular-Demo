import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { of, pipe } from 'rxjs';
import { CustomPipePipe } from '../custom-pipe-pipe';
import { PurePipe } from '../pure-pipe';
import { ImpurePipe } from '../impure-pipe';

@Component({
  selector: 'app-built-in-pipes',
  imports: [CommonModule,CustomPipePipe,PurePipe,ImpurePipe],
  templateUrl: './built-in-pipes.html',
  styleUrl: './built-in-pipes.css',
})
export class BuiltInPipes {

  Number : any = 8897196575
  angularPipe : string = "These are the example for the angular pipes.";

  personData = {
    name :'Abhi Ram',
    age :30,
    city:'mumbai'
  }

  currentDate : Date = new Date();

  items = of(['Apple','Bananna','orange']);
}
