import { Component,signal, linkedSignal} from '@angular/core';

@Component({
  selector: 'app-link-signals',
  imports: [],
  templateUrl: './link-signals.html',
  styleUrl: './link-signals.css',
})
export class LinkSignals {

  // wrritable signal
  Quantityprice = signal(1);
  price = 10;
  //computed signal
  // total = computed(() => {
  //   return this.Quantityprice() * this.price;
  // })


  //shortHand synatx linked signal
  // total = linkedSignal(() => {
  //   return this.Quantityprice()* this.price; 
  // })

  // linked signal with soiurce and computation
  total = linkedSignal({
    source : this.Quantityprice,
    computation: () => this.Quantityprice() * this.price,
  })

  caluculate(){
    this.Quantityprice.set(5);
  }
}
