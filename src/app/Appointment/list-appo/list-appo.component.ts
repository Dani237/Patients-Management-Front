import { Component, OnInit } from '@angular/core';
import { Appointment } from "../../Models/Appointment";
import { Router } from "@angular/router";
import { ServiceAppoService } from "../../Service/service-appo.service";
import  swal  from 'sweetalert2';

@Component({
  selector: 'app-list-appo',
  templateUrl: './list-appo.component.html',
  styleUrls: ['./list-appo.component.css']
})
export class ListAppoComponent implements OnInit {

  appointments: Appointment[];
  appointment: Appointment;

  dateConvert: Date[];


  constructor(private router: Router, private service: ServiceAppoService) {
    this.appointments = [];
    this.appointment = {} as Appointment;
    this.dateConvert = [];
  }

  ngOnInit(): void {
    this.dateConvert.length = this.appointments.length;
    this.service.getAppointments()
      .subscribe(data => {
        this.appointments = data;
        for (let i = 0; i < this.appointments.length; i++) {
          this.dateConvert[this.appointments[i].appId] = this.appointments[i].dateAppointment;
        }
      });
    console.log(this.dateConvert);
    console.log(this.appointments);
  }


  Edit(appointment: Appointment) {
    localStorage.setItem("id", appointment.appId.toString());
    this.router.navigate(["editAppo"]);
  }

  Delete(appointment: Appointment) {

    swal({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar al Paciente",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si , Elimínar',
      cancelButtonText: 'No, Cancelar',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true
    }).then((result) => {
      if(result.value){
        this.service.deleteAppointment(appointment)
          .subscribe(data => {
            this.appointments = this.appointments.filter(p => p! == appointment);
            swal(
              'Cita eliminada',
              `La cita del paciente ${appointment.patientName} ha sido eliminada con exito`,
              'success'
            )
            //this.router.navigate(["toList"]);
          })
      }
    })

  }

  Add() {
    this.router.navigate(['addAppo']);
  }
}
