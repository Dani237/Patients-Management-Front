import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ServiceService } from "../../Service/service.service";
import {Patient} from "../../Models/Patient";
import swal from 'sweetalert2';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  patient: Patient;
  constructor(private router:Router, private service:ServiceService) {
    this.patient = {} as Patient;
  }

  ngOnInit(): void {
  }

  savePatient() {
    this.service.createPatient(this.patient)
      .subscribe(data => {
        swal('Paciente registrado',`El paciente ${this.patient.firstName} ha sido registrado con exito`,`success`);
        this.router.navigate(["toList"]);
      });
  }
}
