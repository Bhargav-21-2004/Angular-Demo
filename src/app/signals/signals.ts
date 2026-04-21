import { Component, signal ,effect, linkedSignal, computed} from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.html',
  styleUrl: './signals.css',
})
export class Signals {

  counter = signal(0);


  // constructor(){
  //   this.counter.set(3);
  // }
  
  onIncrement(){
    this.counter.update(intialValue => intialValue + 1);
  }

  onDecrement(){
    this.counter.update(finalValue => finalValue - 1);
  }

  constructor(){
    this.counter.set(5);
    setTimeout(() => {
      this.counter.set(30)
    },3000);
  effect(() => console.log("The Value of Counter : " + this.counter())        
  );
}


}
