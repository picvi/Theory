import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(itemList: any[], searchStr: string) {
    if (itemList.length === 0 || searchStr === '' ) {
      return itemList;
    };
    return itemList.filter((item: string) => {
      item.toLowerCase().indexOf(searchStr.toLowerCase()) !== -1;
    })
  }

}
