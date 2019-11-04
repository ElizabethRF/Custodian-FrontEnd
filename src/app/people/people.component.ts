import { Component, OnInit, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface PersonElement {
  avatar: number;
  name: string;
  email: string;
  phone: number;
}

export interface DialogData {
  animal: string;
  name: string;
}

const ELEMENT_DATA: PersonElement[] = [
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
  animal: string;
  name: string;

  constructor(public dialog: MatDialog) { }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openEdit(): void {
    const dialogEdit = this.dialog.open(EditDialog, {
      width: '250px',
      data: { name: this.name, animal: this.animal }
    });
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
