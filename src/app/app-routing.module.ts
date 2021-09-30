import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'',redirectTo:'/home', pathMatch:'full'},
  {path:'home',component: HomeComponent},
  {path:'add',component: AddComponent},
  {path:'edit/:id',component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
