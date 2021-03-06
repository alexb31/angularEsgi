import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';


import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { SpacexApiPipe } from './providers/spacex-api.pipe';
import { AppRoutingModule } from './modules/app-routing/app-routing.module';
import { Page2Component } from './components/page2/page2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Page2Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatListModule,
    HttpClientModule,
    MatButtonModule,
    AppRoutingModule
  ],
  exports: [AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
