import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy, Location } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home/home.component';
import { CardModule } from 'primeng/card';
import { CommonService } from './services/common.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    CardModule
  ],
  providers: [Location,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
