import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from "./common/header/header.component";
import {FooterComponent} from "./common/footer/footer.component";
import {MainComponent} from "./pages/main/main.component";
import {JumbotronComponent} from "./pages/main/jumbotron/jumbotron.component";
import {SweepstakesComponent} from "./pages/main/sweepstakes/sweepstakes.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {PrizeListComponent} from "./pages/main/sweepstakes/prize-list/prize-list.component";
import {SectionTitleComponent} from "./common/section-title/section-title.component";
import {SuccessStoriesComponent} from "./pages/main/sweepstakes/success-stories/success-stories.component";

@NgModule({
  declarations: [
    AppComponent,

    // main page components
    MainComponent,
    PrizeListComponent,
    SweepstakesComponent,
    JumbotronComponent,
    SuccessStoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderComponent,
    FooterComponent,
    BrowserAnimationsModule,
    SectionTitleComponent,
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
