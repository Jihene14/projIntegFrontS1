import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerformingEmpComponent } from './Interfaces/RH/performing-emp/performing-emp.component';
import { HomeRhComponent } from './Interfaces/RH/home-rh/home-rh.component';
import { HomeEmpComponent } from './Interfaces/Employe/home-emp/home-emp.component';
import { LoginComponent } from './Interfaces/Employe/login/login.component';
import { ListEmployeesDepComponent } from './Interfaces/RH/list-employees-dep/list-employees-dep.component';
import { ListCalendrierComponent } from './Interfaces/Employe/list-calendrier/list-calendrier.component';
import { EditEmployeComponent } from './Interfaces/RH/edit-employe/edit-employe.component';
import { LoginRhComponent } from './Interfaces/RH/login-rh/login-rh.component';
import { HomeComponent } from './Interfaces/home/home.component';
import { AjouterEmpComponent } from './Interfaces/RH/ajouter-emp/ajouter-emp.component';

const routes: Routes = [
  { path: '', title: 'home Entreprise', component: HomeComponent },
  { path: 'loginEmp', title: 'login', component: LoginComponent },
  { path: 'loginrh', title: 'loginRh', component: LoginRhComponent },
  { path: 'listEmp/:id', title: 'listEmp', component: ListCalendrierComponent },

  { path: 'homeRh/:id', title: 'home', component: HomeRhComponent },
  {
    path: 'performingEmp/:id',
    title: 'performing',
    component: PerformingEmpComponent,
  },
  { path: 'homeEmploye/:id', title: 'home', component: HomeEmpComponent },
  { path: 'editeEmploye/:id', title: 'home', component: EditEmployeComponent },

  {
    path: 'listEmplyees/:dep',
    title: 'list employees dep',
    component: ListEmployeesDepComponent,
  },
  {
    path:"homeRh/:id/ajoutEmp",title:"ajouter employé", component:AjouterEmpComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
