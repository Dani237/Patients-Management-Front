import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToListComponent } from "./Patient/to-list/to-list.component";
import { AddComponent } from "./Patient/add/add.component";
import { EditComponent } from "./Patient/edit/edit.component";
import { ListAppoComponent } from "./Appointment/list-appo/list-appo.component";
import { AddAppoComponent } from "./Appointment/add-appo/add-appo.component";
import { EditAppoComponent } from "./Appointment/edit-appo/edit-appo.component";

const routes: Routes = [
  {path: 'toList', component: ToListComponent},
  {path: 'add', component: AddComponent},
  {path: 'edit', component: EditComponent},
  {path: 'listAppo', component: ListAppoComponent},
  {path: 'addAppo', component: AddAppoComponent},
  {path: 'editAppo', component: EditAppoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
