import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddAppointmentComponent } from '../add-appointment/add-appointment.component';

@Component({
  selector: 'app-appointment',
  imports: [MatButtonModule, MatDialogModule],
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.scss'
})
export class AppointmentComponent {

  constructor(private dialog: MatDialog){}

  addAppointment() {
    this.dialog.open(AddAppointmentComponent, {
      width: '50%',
      exitAnimationDuration: '300ms',
      enterAnimationDuration: '400ms'
    }).afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
