import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-work-pipe',
  templateUrl: './home-work-pipe.component.html',
  styleUrls: ['./home-work-pipe.component.css']
})
export class HomeWorkPipeComponent implements OnInit {
  private direction = '';

  /** имя по которому необходимо сортироват данные */
  private sortName = 'name';

  /** Текущяя дата */
  private dateNow = new Date();

  /** менее минуты назад */
  private now = new Date(this.dateNow .getTime() - 20000);

  /** более или менее часа */
  private moreMin = new Date(this.dateNow .getTime() - 300000);

  /** более часа назад или менее суток */
  private moreHour = new Date(this.dateNow .getTime() - 7000000);

  /** больше суток назад */
  private moreDay = new Date(this.dateNow .getTime() - 700000000);

  private users = [
    {
      name: 'Denis',
      age: 29
    },
    {
      name: 'Ivan',
      age: 17
    },
    {
      name: 'Olga',
      age: 19
    },
    {
      name: 'Maks',
      age: 20
    },
    {
      name: 'Aleks',
      age: 31
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
