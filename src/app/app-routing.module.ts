import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditCharacterComponent } from './components/edit-character/edit-character.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
