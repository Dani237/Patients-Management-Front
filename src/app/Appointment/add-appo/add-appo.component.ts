import { Component, OnInit } from '@angular/core';
import {Appointment} from "../../Models/Appointment";
import {Router} from "@angular/router";
import {ServiceAppoService} from "../../Service/service-appo.service";
import {ServiceService} from "../../Service/service.service";
import swal from "sweetalert2";

@Component({
  selector: 'app-add-appo',
  templateUrl: './add-appo.component.html',
  styleUrls: ['./add-appo.component.css']
})
export class AddAppoComponent implements OnInit {

  appointment: Appointment;

  constructor(private router: Router, private service: ServiceService) {
    this.appointment = {} as Appointment;
  }

  ngOnInit(): void {
  }

  saveAppointment() {
    this.service.createAppointment(this.appointment)
      .subscribe(data => {
        swal('Cita registrado',`La cita del paciente ${this.appointment.patientName} ha sido registrada con exito`,`success`);
        this.router.navigate(["listAppo"]);
      });
  }

}
