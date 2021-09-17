import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './user/form/form.component';
import { ListComponent } from './user/list/list.component';


const routes: Routes = [
  { path:"", redirectTo:"lista", pathMatch:"full"},
  { path:"lista", component: ListComponent},
  { path:"cadastro", component: FormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
