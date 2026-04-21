import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'customPipe',
})
export class CustomPipePipe implements PipeTransform {

  private DatePipe = new DatePipe('en-US');
  transform(value: string | number | Date | null | undefined): string | null {
    // if(value == '' || value == null || value == undefined ){
    //   return 'NA';
    // }else{
    //   return value ? '+91 ' + value : value;
    // }
    return this.DatePipe.transform(value,'dd-MMM-yy');
  }
}
