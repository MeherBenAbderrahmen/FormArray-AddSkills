import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pcntVente'
})
export class PcntVentePipe implements PipeTransform {

  transform(value: any, args1: any, args2: any): any {
    var x =100 - (100 * (parseFloat(args2))) / parseFloat(args1);

    return '%' + parseInt(x.toString());
  }

}
