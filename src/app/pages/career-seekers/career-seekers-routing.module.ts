import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CareerSeekersComponent } from './career-seekers.component';

const routes: Routes = [{ path: '', component: CareerSeekersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CareerSeekersRoutingModule { }
