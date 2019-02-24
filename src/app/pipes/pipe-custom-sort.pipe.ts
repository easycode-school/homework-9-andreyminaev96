import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeCustomSort'
})
export class PipeCustomSortPipe implements PipeTransform {
  // Преобразование массива обьектов, в массив отсортированный по значению указанного свойства и в указанном направлении
  transform(value: Array<object>, prop: string, direction: string = 'withMore'): Array<object> {
    // Проверка входящих параметров
    if (!prop || !(direction === 'withMore' || direction === 'withLess')) {
      return value;
    }

    value = value.slice().sort((a, b) =>  b[prop] < a[prop] ? 1 : (b[prop] > a[prop] ? -1 : 0));

    return direction === 'withLess' ? value.reverse() : value;
  }

}
