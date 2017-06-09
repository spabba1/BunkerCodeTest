import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RoutingModule } from './routing/routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
//import {FormService} from './form/form.service';
import { FormComponent } from './form/form.component';
import { InstructionsComponent } from './instructions/instructions.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    InstructionsComponent
  ],
  imports: [
    RoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers:[FormComponent],
  //providers: [FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
