import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../../components/home/home.component';
import { Page2Component } from '../../components/page2/page2.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'page2', component: Page2Component},
];


@NgModule({
  exports : [RouterModule],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
})
export class AppRoutingModule { }
