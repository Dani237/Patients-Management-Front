import { Component, OnInit } from '@angular/core';
import {Patient} from "../../Models/Patient";
import {Router} from "@angular/router";
import {ServiceService} from "../../Service/service.service";
import swal from 'sweetalert2';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  patient : Patient;

  constructor(private router: Router, private service: ServiceService) {
    this.patient = {} as Patient;
  }

  ngOnInit(): void {
    this.EditPage();
  }

  EditPage() {
    let id = localStorage.getItem("id");
    // @ts-ignore
    this.service.getPatientById(+id)

      .subscribe(data => {
        this.patient = data;
      })
  }

  Update(patient: Patient) {
    this.service.updatePatient(patient)
      .subscribe(data => {
        this.patient = data;
        swal('Datos Actualizados',`Los datos del paciente ${this.patient.firstName} han sido actualizados con exito`,`success`);
        this.router.navigate(["toList"]);
      })
  }

}
