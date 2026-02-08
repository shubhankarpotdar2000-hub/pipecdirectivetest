import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { summaryPipe } from './pipes/summary.pipe';
import { Highlighter } from './directive/highlighterdi';
import { DataComponent } from './components/data/data.component';

import { FormsModule } from '@angular/forms';
import { filterpipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    summaryPipe,
    Highlighter,
    DataComponent,
    filterpipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
