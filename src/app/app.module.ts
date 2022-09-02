import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SpotsComponent } from './spots/spots.component';
import { LocationPipe } from './location.pipe';
import { FormsModule } from '@angular/forms';
import { CommentPipe } from './comment.pipe';
import { CommentComponent } from './comment/comment.component';
import { StarComponent } from './shared/star.component';
import { SpotDetailComponent } from './spot-detail/spot-detail.component';
import { RouterModule } from '@angular/router';
import { SpotModule } from './spots/spot.module';
import { SpotNewEditComponent } from './spot-new-edit/spot-new-edit.component';

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
    SpotModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
