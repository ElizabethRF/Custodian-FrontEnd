import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  avatar: number;
  name: string;
  email: string;
  phone: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {avatar: 1, name: 'john', email: 'john@doe.com', phone: 555555},
  {avatar: 1, name: 'john', email: 'john@doe.com', phone: 555555},
  {avatar: 1, name: 'john', email: 'john@doe.com', phone: 555555},
  {avatar: 1, name: 'john', email: 'john@doe.com', phone: 555555},
  {avatar: 1, name: 'john', email: 'john@doe.com', phone: 555555},
  {avatar: 1, name: 'john', email: 'john@doe.com', phone: 555555},
  {avatar: 1, name: 'john', email: 'john@doe.com', phone: 555555},
  {avatar: 1, name: 'john', email: 'john@doe.com', phone: 555555},
  {avatar: 1, name: 'john', email: 'john@doe.com', phone: 555555},
  {avatar: 1, name: 'john', email: 'john@doe.com', phone: 555555},
  {avatar: 1, name: 'john', email: 'john@doe.com', phone: 555555},
  {avatar: 1, name: 'john', email: 'john@doe.com', phone: 555555},
  {avatar: 1, name: 'john', email: 'john@doe.com', phone: 555555},
  {avatar: 1, name: 'john', email: 'john@doe.com', phone: 555555},
  {avatar: 1, name: 'john', email: 'john@doe.com', phone: 555555},
];

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  displayedColumns: string[] = ['avatar', 'name', 'email', 'phone'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor() { }

  ngOnInit() {
  }

}
