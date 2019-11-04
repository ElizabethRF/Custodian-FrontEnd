import { Component, OnInit, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface NotificationElement {
  id: number;
  information: string;
  date: string;
  hour: string;
  image: string;
}

export interface DialogData {
  animal: string;
  name: string;
}

const ELEMENT_DATA: NotificationElement[] = [
  {id: 1, information: '3 people in camera', date: '2019-10-11', hour: '10:00:00', image: 'https://www.google.com/'},
  {id: 2, information: '5 people in camera', date: '2019-10-11', hour: '11:00:00', image: 'https://www.google.com/'},
  {id: 3, information: '4 people in camera', date: '2019-10-11', hour: '13:00:00', image: 'https://www.google.com/'},
  {id: 4, information: '2 people in camera', date: '2019-10-11', hour: '14:00:00', image: 'https://www.google.com/'},
  {id: 5, information: '8 people in camera', date: '2019-10-11', hour: '15:00:00', image: 'https://www.google.com/'},
  {id: 6, information: '9 people in camera', date: '2019-10-11', hour: '15:00:00', image: 'https://www.google.com/'},
  {id: 7, information: '6 people in camera', date: '2019-10-11', hour: '16:00:00', image: 'https://www.google.com/'},
  {id: 8, information: '8 people in camera', date: '2019-10-11', hour: '16:00:00', image: 'https://www.google.com/'},
  {id: 9, information: '9 people in camera', date: '2019-10-11', hour: '17:00:00', image: 'https://www.google.com/'},
  {id: 10, information: '13 people in camera', date: '2019-10-11', hour: '19:00:00', image: 'https://www.google.com/'},
];

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'information', 'date', 'hour', 'image'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  animal: string;
  name: string;

  constructor(public dialog: MatDialog) { }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDelete(): void {
    const dialogDelete = this.dialog.open(EditDialog, {
      width: '250px',
      data: { name: this.name, animal: this.animal }
    });
  }

  ngOnInit() {
  }
}

@Component({
  selector: 'edit-dialog',
  templateUrl: 'edit-dialog.html',
})
export class EditDialog {

  constructor(
    public dialogRef: MatDialogRef<EditDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
