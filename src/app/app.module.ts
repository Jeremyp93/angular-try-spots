import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SpotsComponent } from './spots/spots.component';
import { LocationPipe } from './location.pipe';
import { FormsModule } from '@angular/forms';
import { CommentPipe } from './comment.pipe';
import { CommentComponent } from './comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    SpotsComponent,
    LocationPipe,
    CommentPipe,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
