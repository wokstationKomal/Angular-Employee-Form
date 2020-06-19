import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogFormComponent } from './dialog-form/dialog-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Angular-Kayk1';

  constructor(private dialog: MatDialog){}

  openDialog(){
    this.dialog.open(DialogFormComponent);
  }
}
