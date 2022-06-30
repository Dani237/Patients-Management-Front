import {DatePipe, Time} from "@angular/common";

export interface Appointment {
  appId: number
  dateAppointment: Date
  hourAppointment: Time
  patientName: String
  description: String
}
