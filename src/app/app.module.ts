import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MdBootstrapModule } from './md-bootstrap-module/md-bootstrap.module';
import { RailComponent } from './rail/rail.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
//import {MatTableModule} from '@angular/material/table';
@NgModule({
  declarations: [
    AppComponent,
    RailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MdBootstrapModule,MaterialModule//,MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
