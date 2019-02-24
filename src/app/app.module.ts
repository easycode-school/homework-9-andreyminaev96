import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeWorkPipeComponent } from './components/home-work-pipe/home-work-pipe.component';
import { PipeCustomDatePipe } from './pipes/pipe-custom-date.pipe';
import { PipeCustomSortPipe } from './pipes/pipe-custom-sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeWorkPipeComponent,
    PipeCustomDatePipe,
    PipeCustomSortPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
