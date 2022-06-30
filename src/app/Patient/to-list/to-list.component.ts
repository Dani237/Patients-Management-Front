import { Component, OnInit } from '@angular/core';
import {ServiceService} from "../../Service/service.service";
import {Router} from "@angular/router";
import {Patient} from "../../Models/Patient";
import  swal  from 'sweetalert2';

@Component({
  selector: 'app-to-list',
  templateUrl: './to-list.component.html',
  styleUrls: ['./to-list.component.css']
})
export class ToListComponent implements OnInit {

  patients : Patient[];


  constructor(private service:ServiceService, private router:Router) {
    this.patients = [];
  }

  ngOnInit(): void {
    this.service.getPatient()
      .subscribe(data => {
        this.patients = data;
      })
  }

  Edit(patient:Patient) {
    localStorage.setItem("id", patient.id.toString());
    this.router.navigate(["edit"]);
  }

  Delete(patient:Patient) {

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
        this.service.deletePatient(patient)
          .subscribe(data => {
            this.patients = this.patients.filter(p => p! == patient);
            swal(
              'Paciente eliminado',
              'El paciente ha sido eliminado con exito',
              'success'
            )
            this.router.navigate(["toList"]);
          });
      }
    })
  }

  Add() {
    this.router.navigate(['add']);
  }

}
