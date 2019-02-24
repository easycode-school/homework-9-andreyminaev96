import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeCustomDate'
})
export class PipeCustomDatePipe implements PipeTransform {
  // Преобразовать дату в строку соответсвующего вида

  transform(value: Date): string {
    const infoDate = {day: '2-digit', month: '2-digit', year: 'numeric'};
    const infoTime = {hour: '2-digit', minute: '2-digit'};
    
    const ms = Date.now() - value.getTime();
    const days = Math.floor(ms / 86400000);
    const hrs = Math.floor((ms % 86400000) / 3600000);
    const mins = Math.floor(((ms % 86400000) % 3600000) / 60000);

    let result = mins ? `${mins} minutes ago` : ' now';
    result = hrs ? `${hrs} hours ago` : result;
    result = days ? `${value.toLocaleString('ru-RU', infoDate)} at ${value.toLocaleString('ru-RU', infoTime)}` : result;

    return result;
  }
}
