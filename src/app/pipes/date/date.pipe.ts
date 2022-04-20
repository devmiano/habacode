import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePipe',
})
export class DatePipe implements PipeTransform {
  transform(value: any): number {
    let today: Date = new Date();
    let todayNoTime: any = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );
    var dateDifference = Math.abs(todayNoTime - value);
    const secondsInADay = 86400;

    var dateDifferenceSeconds = dateDifference * 0.001;
    var dateCounter = dateDifferenceSeconds / secondsInADay;
    if (dateCounter >= 1 && todayNoTime > value) {
      return dateCounter;
    } else {
      return 0;
    }
  }
}
