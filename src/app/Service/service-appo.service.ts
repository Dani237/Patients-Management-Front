import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Appointment } from "../Models/Appointment";

@Injectable({
  providedIn: 'root'
})
export class ServiceAppoService {

  constructor(private http: HttpClient) { }

  Url = 'http://localhost:8080/appointments';

  getAppointments() {
    return this.http.get<Appointment[]>(this.Url);
  }

  createAppointment(appointment: Appointment) {
    return this.http.post<Appointment>(this.Url, appointment);
  }

  getAppointmentById(id: number) {
    return this.http.get<Appointment>(this.Url + "/" + id);
  }

  updateAppointment(appointment:Appointment) {
    return this.http.put<Appointment>(this.Url + "/" + appointment.appId, appointment);
  }

  deleteAppointment(appointment: Appointment) {
    return this.http.delete<Appointment>(this.Url + "/" + appointment.appId);
  }
}
