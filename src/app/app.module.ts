import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './materialModule/material.module';
import { MatDialogModule } from '@angular/material/dialog';
/* components */
import { AppComponent } from './appcomponent/app.component';
import { QuarterCardComponent } from './components/quarter-card/quarter-card.component';
import { TimelinechartComponent } from './components/timelinechart/timelinechart.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

/* services */
import { CarService } from './services/car.service';
import { SubtimelineComponent } from './components/timelinechart/subtimeline/subtimeline.component';
import { DeviceRoadMapComponent } from './components/device-road-map/device-road-map.component';
import { DetailscardComponent } from './components/detailscard/detailscard.component';

@NgModule({
  declarations: [
    AppComponent,
    QuarterCardComponent,
    TimelinechartComponent,
    DashboardComponent,
    SubtimelineComponent,
    DeviceRoadMapComponent,
    DetailscardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    MatDialogModule
  ],
  providers: [ CarService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
