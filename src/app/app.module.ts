import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavcomponentComponent } from './navcomponent/nav.component';
import { FormcomponentComponent } from './formcomponent/formcomponent.component';
import { CheckcomponentComponent } from './checkcomponent/checkcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    NavcomponentComponent,
    FormcomponentComponent,
    CheckcomponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
