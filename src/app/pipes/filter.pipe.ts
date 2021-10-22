import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: string[] | undefined, filter: string): any {
    console.log(items);
    if (!items || !filter) {
        return items;
    }
    return items.filter(item => item.indexOf(filter) !== -1);
}

}
