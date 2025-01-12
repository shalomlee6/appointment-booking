import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appointment } from '../model/appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  url = 'http://localhost:3000/appointment';

  constructor(private http: HttpClient) { }

  getData(){
    this.http.get<Appointment[]>(this.url);
  }

  getAppointmentData(appointmerntId: number) {
    const api = this.url + '/' + appointmerntId;
    this.http.get<Appointment>(api);
  }

  createAppointment(appointment: Appointment) {
    return this.http.post(this.url,appointment);
  }

  updateAppointment(appointment: Appointment) {
    return this.http.put<Appointment>(this.url + '/' + appointment.id, appointment);
  }

  deleteAppointment(appointment: Appointment) {
    return this.http.delete<Appointment>(this.url + '/' + appointment.id);
  }
  
}
