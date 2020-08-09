import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuarterCardComponent } from './quarter-card/quarter-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import { CarService } from '../app/quarter-card/car.service';

@NgModule({
  declarations: [
    AppComponent,
    QuarterCardComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatListModule,
    HttpClientModule
   
  ],
  providers: [ CarService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
