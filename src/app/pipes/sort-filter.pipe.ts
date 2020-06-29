import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../catalog-page/catalog/catalog.component';

@Pipe({
  name: 'sortFilter'
})
export class SortFilterPipe implements PipeTransform {

  transform(value: Item[], sortBy: string): Item[] {
    switch(sortBy) {
      case 's_alfa':
        value = value.sort((a, b) => {
          if (a.name < b.name) return -1
          if (a.name > b.name) return 1
          if (a.name == b.name) return 0
        })
        break
      case 's_costup':
        value = value.sort((a, b) => a.cost - b.cost)
        break
      case 's_costdown':
        value = value.sort((a, b) => b.cost - a.cost)
        break
    }
    return value;
  }

}
