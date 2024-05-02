import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import {SuccessAlert} from './success-alert/app.component.success';
import {WarningAlert} from './warning-alert/app.component.warning';
import { UserInput } from './inputs/app.component.inputs';
import { Dynamics } from './dynamics/app.component.dynamics';

@NgModule({
  declarations: [
    AppComponent,
    SuccessAlert,
    WarningAlert,
    UserInput,
    Dynamics
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
