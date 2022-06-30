import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToListComponent } from './Patient/to-list/to-list.component';
import { AddComponent } from './Patient/add/add.component';
import { EditComponent } from './Patient/edit/edit.component';
import { FormsModule } from "@angular/forms";
import { ServiceService } from "./Service/service.service";
import { HttpClientModule } from "@angular/common/http";
import { AddAppoComponent } from './Appointment/add-appo/add-appo.component';
import { ListAppoComponent } from './Appointment/list-appo/list-appo.component';
import { EditAppoComponent } from './Appointment/edit-appo/edit-appo.component';
import {ServiceAppoService} from "./Service/service-appo.service";
import { LOCALE_ID } from '@angular/core';
//import { MatSidenavModule } from "@angular/material/sidenav";

@NgModule({
  declarations: [
    AppComponent,
    ToListComponent,
    AddComponent,
    EditComponent,
    AddAppoComponent,
    ListAppoComponent,
    EditAppoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    ServiceService,
    ServiceAppoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
