import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MoodComponent } from './mood/mood.component';
import { MoodsComponent } from './moods/moods.component';
import { CalcBoxComponent } from './calc-box/calc-box.component';



@NgModule({
  declarations: [
    AppComponent,
    MoodComponent,
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
