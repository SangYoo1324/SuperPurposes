import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./pages/main/main.component";
import {PageNotFoundComponent} from "./common/page-not-found/page-not-found.component";

const routes: Routes = [{path:'', component:MainComponent},
{ path: 'careerSeekers', loadChildren: () => import('./pages/career-seekers/career-seekers.module').then(m => m.CareerSeekersModule) },
{ path: 'contact-us', loadChildren: () => import('./pages/contact-us/contact-us.module').then(m => m.ContactUsModule) },
{ path: 'join-us', loadChildren: () => import('./pages/join-us/join-us.module').then(m => m.JoinUsModule) },
{ path: 'why-us', loadChildren: () => import('./pages/why-us/why-us.module').then(m => m.WhyUsModule) }, {path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
