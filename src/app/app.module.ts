import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { CalcBoxComponent } from './calc-box/calc-box.component';


@NgModule({
  declarations: [
    AppComponent,
    CalcBoxComponent
  ],
  imports: [
    BrowserModule,
	FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
