import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CareerSeekersRoutingModule } from './career-seekers-routing.module';
import { CareerSeekersComponent } from './career-seekers.component';
import {FooterComponent} from "../../common/footer/footer.component";


@NgModule({
  declarations: [
    CareerSeekersComponent
  ],
    imports: [
        CommonModule,
        CareerSeekersRoutingModule,
        FooterComponent
    ]
})
export class CareerSeekersModule { }
