import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpotsComponent } from './spots.component';
import { SpotDetailComponent } from '../spot-detail/spot-detail.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { SpotNewEditComponent } from '../spot-new-edit/spot-new-edit.component';

@NgModule({
  declarations: [
    SpotsComponent,
    SpotDetailComponent,
    SpotNewEditComponent,
  ],
  imports: [
    RouterModule.forChild([
      { path: 'home', component: SpotsComponent },
      { path: 'spot/:id', component: SpotDetailComponent },
      { path: 'spot-new', component: SpotNewEditComponent },
      { path: 'spot-edit/:id', component: SpotNewEditComponent },
    ]),
    SharedModule
  ]
})
export class SpotModule { }
