import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JoinUsRoutingModule } from './join-us-routing.module';
import { JoinUsComponent } from './join-us.component';
import {FooterComponent} from "../../common/footer/footer.component";


@NgModule({
  declarations: [
    JoinUsComponent
  ],
    imports: [
        CommonModule,
        JoinUsRoutingModule,
        FooterComponent
    ]
})
export class JoinUsModule { }
