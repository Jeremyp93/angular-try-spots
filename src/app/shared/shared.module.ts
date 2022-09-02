import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star.component';
import { FormsModule } from '@angular/forms';
import { LocationPipe } from '../location.pipe';
import { CommentPipe } from '../comment.pipe';
import { CommentComponent } from '../comment/comment.component';



@NgModule({
  declarations: [
    StarComponent,
    LocationPipe,
    CommentPipe,
    CommentComponent,
    StarComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StarComponent,
    CommonModule,
    FormsModule,
    LocationPipe,
    CommentPipe,
    CommentComponent
  ]
})
export class SharedModule { }
