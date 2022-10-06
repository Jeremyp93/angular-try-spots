import { Component, Input, OnInit } from '@angular/core';
import { Spot } from '../spot';

@Component({
  selector: 'app-spot-detail',
  templateUrl: './spot-detail.component.html',
  styleUrls: ['./spot-detail.component.css']
})
export class SpotDetailComponent implements OnInit {
  @Input() spot: Spot | undefined;

  constructor() { }

  ngOnInit(): void {
    
  }

}
