import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clientsCrud';

  constructor(private router:Router) {}

  ToList() {
    this.router.navigate(['toList']);
  }

  ToAppointments() {
    this.router.navigate(['listAppo']);
  }

}
