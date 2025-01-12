import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppointmentComponent } from '../../components/appointment/appointment.component';

@Component({
  selector: 'app-lobby',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, AppointmentComponent],
  templateUrl: './lobby.component.html',
  styleUrl: './lobby.component.scss'
})
export class LobbyComponent {

}
