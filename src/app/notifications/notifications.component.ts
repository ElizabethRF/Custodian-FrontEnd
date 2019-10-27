import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  date: string;
  hour: string;
  camera: number;
  list: string;
  personId: number;
  comment: string;
  handled: boolean;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {date: '2019-10-11', hour: '10:00:00', camera: 10, list: 'White List', personId: 1, comment: "sos", handled:false},
  {date: '2019-10-11', hour: '10:00:00', camera: 13, list: 'Black List', personId: 2, comment: "sos", handled:true},
  {date: '2019-10-11', hour: '10:00:00', camera: 15, list: 'White List', personId: 3, comment: "sos", handled:false},
  {date: '2019-10-11', hour: '10:00:00', camera: 17, list: 'Black List', personId: 4, comment: "sos", handled:true},
  {date: '2019-10-11', hour: '10:00:00', camera: 18, list: 'White List', personId: 5, comment: "sos", handled:false},
  {date: '2019-10-11', hour: '10:00:00', camera: 19, list: 'White List', personId: 6, comment: "sos", handled:false},
  {date: '2019-10-11', hour: '10:00:00', camera: 31, list: 'Black List', personId: 7, comment: "sos", handled:true},
  {date: '2019-10-11', hour: '10:00:00', camera: 78, list: 'White List', personId: 8, comment: "sos", handled:false},
  {date: '2019-10-11', hour: '10:00:00', camera: 23, list: 'Black List', personId: 9, comment: "sos", handled:false},
  {date: '2019-10-11', hour: '10:00:00', camera: 24, list: 'White List', personId: 10, comment: "sos", handled:false},
];

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  displayedColumns: string[] = ['date', 'hour','personId','comment','handled'];
  dataSource = ELEMENT_DATA;

}
