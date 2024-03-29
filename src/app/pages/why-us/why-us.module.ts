import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WhyUsRoutingModule } from './why-us-routing.module';
import { WhyUsComponent } from './why-us.component';
import {FooterComponent} from "../../common/footer/footer.component";


@NgModule({
  declarations: [
    WhyUsComponent
  ],
  imports: [
    CommonModule,
    WhyUsRoutingModule,
    FooterComponent
  ]
})
export class WhyUsModule { }
