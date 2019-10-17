import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})

export class NotificationsComponent implements OnInit {
  displayedColumns: string[] = ['date', 'hour', 'camera','list', 'personId','coment','attended','select'];
  dataSource = new MatTableDataSource<NotificationsElement>(ELEMENT_DATA);
  selection = new SelectionModel<NotificationsElement>(true, []);
  constructor() { }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }
  
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: NotificationsElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.personId + 1}`;
  }

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}

  export interface NotificationsElement {
    date: string;
    hour: string;
    camera: number;
    list: string;
    personId: number;
    coment: string;
    attended: boolean;
  }
  
  const ELEMENT_DATA: NotificationsElement[] = [
    {date: '2019-10-11', hour: '10:00:00', camera: 10, list: 'White List', personId: 1, coment: "sos", attended:false},
    {date: '2019-10-11', hour: '10:00:00', camera: 13, list: 'Black List', personId: 2, coment: "sos", attended:true},
    {date: '2019-10-11', hour: '10:00:00', camera: 15, list: 'White List', personId: 3, coment: "sos", attended:false},
    {date: '2019-10-11', hour: '10:00:00', camera: 17, list: 'Black List', personId: 4, coment: "sos", attended:true},
    {date: '2019-10-11', hour: '10:00:00', camera: 18, list: 'White List', personId: 5, coment: "sos", attended:false},
    {date: '2019-10-11', hour: '10:00:00', camera: 19, list: 'White List', personId: 6, coment: "sos", attended:false},
    {date: '2019-10-11', hour: '10:00:00', camera: 31, list: 'Black List', personId: 7, coment: "sos", attended:true},
    {date: '2019-10-11', hour: '10:00:00', camera: 78, list: 'White List', personId: 8, coment: "sos", attended:false},
    {date: '2019-10-11', hour: '10:00:00', camera: 23, list: 'Black List', personId: 9, coment: "sos", attended:false},
    {date: '2019-10-11', hour: '10:00:00', camera: 24, list: 'White List', personId: 10, coment: "sos", attended:false},
  ];






