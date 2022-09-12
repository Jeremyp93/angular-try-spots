import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { SpotModule } from './spots/spot.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home',  pathMatch: 'full' },
      { path: '**', redirectTo: 'home',  pathMatch: 'full' } //Used to show 404 not found
    ]),
    SpotModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
