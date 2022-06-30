import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Patient } from "../Models/Patient";
import { Appointment } from "../Models/Appointment";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  constructor(private http:HttpClient) { }

  Url = 'http://localhost:8080/patients';
  Url2 = 'http://localhost:8080/appointments';

  getPatient() {
    return this.http.get<Patient[]>(this.Url);
  }

  createPatient(patient: Patient) {
    return this.http.post<Patient>(this.Url, patient);
  }

  createAppointment(appointment: Appointment) {
    return this.http.post<Appointment>(this.Url2, appointment);
  }

  getPatientById(id: number) {
    return this.http.get<Patient>(this.Url + "/" + id);
  }

  updatePatient(patient:Patient) {
    return this.http.put<Patient>(this.Url + "/" + patient.id, patient);
  }

  deletePatient(patient: Patient) {
    return this.http.delete<Patient>(this.Url + "/" + patient.id);
  }
}
