import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StrandingsComponent } from './Strandings/Strandings.component';

const routes: Routes = [
  {path:'',component:StrandingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
