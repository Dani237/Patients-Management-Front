import { Component, OnInit } from '@angular/core';
import {Appointment} from "../../Models/Appointment";
import {Router} from "@angular/router";
import {ServiceAppoService} from "../../Service/service-appo.service";
import swal from 'sweetalert2';

@Component({
  selector: 'app-edit-appo',
  templateUrl: './edit-appo.component.html',
  styleUrls: ['./edit-appo.component.css']
})
export class EditAppoComponent implements OnInit {

  appointment: Appointment;
  constructor(private router: Router, private service: ServiceAppoService) {
    this.appointment = {} as Appointment;
  }

  ngOnInit(): void {
    this.EditPage();
  }
  EditPage() {
    let id = localStorage.getItem("id");
    // @ts-ignore
    this.service.getAppointmentById(+id)
      .subscribe(data => {
        this.appointment = data;
      })
  }

  Update(appointment: Appointment) {
    this.service.updateAppointment(appointment)
      .subscribe(data => {
        this.appointment = data;
        swal('Datos Actualizados',`Los datos de la cita del paciente ${this.appointment.patientName} han sido actualizados con exito`,`success`);
        this.router.navigate(["listAppo"]);
      })
  }
}
