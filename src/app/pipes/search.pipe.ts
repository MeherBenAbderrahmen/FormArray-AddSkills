import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) return null;
    if (!args) return value;

    args = args.toLowerCase();

    //La méthode JSON.stringify() convertit une valeur JavaScript en chaîne JSON.
    return value.filter((item: any) => {
      return item?.nomProduit?.toLowerCase().includes(args) ||
        item?.quantiteProduit?.toLowerCase().includes(args) ||
        item?.dispoProduit?.toLowerCase().includes(args) ||
        item?.categorieProduit?.toLowerCase().includes(args) ;
        

    });

}
}
