import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MoodComponent } from './mood/mood.component';
import { MoodsComponent } from './moods/moods.component';


@NgModule({
  declarations: [
    AppComponent,
    MoodComponent,
    MoodsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
