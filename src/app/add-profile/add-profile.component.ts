import { Component, OnInit } from '@angular/core';


export interface PeriodicElement {
  date: string; 
  hour: string; 
  camera: number; 
  list: string; 
  personId: number,
  coment: string, 
  attended: boolean; 


}

const ELEMENT_DATA: PeriodicElement[] = [
  {date:'2019-10-11',hour: '10:00:00', camera: 10, list: 'White List', personId: 1, coment:"sos",attended:false},
  {date:'2019-10-11',hour: '10:00:00', camera: 13, list: 'Black List', personId: 2, coment:"sos",attended:true},
  {date:'2019-10-11',hour: '10:00:00', camera: 15, list: 'White List', personId: 3, coment:"sos",attended:false},
  {date:'2019-10-11',hour: '10:00:00', camera: 17, list: 'Black List', personId: 4, coment:"sos",attended:true},
  {date:'2019-10-11',hour: '10:00:00', camera: 18, list: 'White List', personId: 5, coment:"sos",attended:false},
  {date:'2019-10-11',hour: '10:00:00', camera: 19, list: 'White List', personId: 6, coment:"sos",attended:false},
  {date:'2019-10-11',hour: '10:00:00', camera: 31, list: 'Black List', personId: 7, coment:"sos",attended:true},
  {date:'2019-10-11',hour: '10:00:00', camera: 78, list: 'White List', personId: 8, coment:"sos",attended:false},
  {date:'2019-10-11',hour: '10:00:00', camera: 23, list: 'Black List', personId: 9, coment:"sos",attended:false},
  {date:'2019-10-11',hour: '10:00:00', camera: 24, list: 'White List', personId: 10, coment:"sos",attended:false},
];

@Component({
  selector: 'app-add-profile',
  templateUrl: './add-profile.component.html',
  styleUrls: ['./add-profile.component.scss']
})
export class AddProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }
  displayedColumns: string[] = ['date', 'hour', 'camera','list', 'personId','coment','attended'];
    dataSource = ELEMENT_DATA;
  

}



