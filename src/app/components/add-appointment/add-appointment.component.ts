import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HebLabel } from '../../constants/heb-label';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { Appointment } from '../../model/appointment';
import { AppointmentService } from '../../services/appointment.service';


@Component({
  selector: 'app-add-appointment',
  imports: [ MatCardModule, ReactiveFormsModule, MatFormFieldModule, 
    MatInputModule, MatButtonModule, MatSelectModule, MatDatepickerModule
  ],
  templateUrl: './add-appointment.component.html',
  styleUrl: './add-appointment.component.scss'
})
export class AddAppointmentComponent implements OnInit{
  
  hebLabel = HebLabel;
  appointmentForm!: FormGroup
  appointmentService = inject(AppointmentService);
  
  ngOnInit(): void {
    this.appointmentForm = new FormGroup({
      id: new FormControl(0),
      name: new FormControl('',Validators.required),
      date: new FormControl(new Date(),Validators.required),
      type: new FormControl('',Validators.required),
      time: new FormControl('',Validators.required),
      address: new FormControl('',Validators.required),
      price: new FormControl('',Validators.required)
    })
  }

  saveAppointment() {
    if( this.appointmentForm.valid ) {
      const _data: Appointment =  {
        id: this.appointmentForm.value.id as number,
        address: this.appointmentForm.value.address as string,
        date: new Date(this.appointmentForm.value.date),
        name: this.appointmentForm.value.name as string,
        type: this.appointmentForm.value.type as string,
        price: this.appointmentForm.value.price as string,
        time: this.appointmentForm.value.time as string
      }
      this.appointmentService.createAppointment(_data)
    }
  }


}
