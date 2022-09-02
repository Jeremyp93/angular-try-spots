import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Spot } from '../spot';
import { SpotService } from '../spot.service';

@Component({
  selector: 'app-spot-new-edit',
  templateUrl: './spot-new-edit.component.html',
  styleUrls: ['./spot-new-edit.component.css']
})
export class SpotNewEditComponent implements OnInit {
  spot: Spot = {
    id: 0,
    name: '',
    location: {city: '', country: ''},
    category: '',
    season: '',
    visited: false,
    rating: -1,
  };
  sub!: Subscription;
  errorMessage: string = '';

  constructor(private route: ActivatedRoute, private spotService: SpotService) { }

  ngOnInit(): void {
    const spotId = Number(this.route.snapshot.paramMap.get('id'));
    if (spotId === 0) return;
    this.sub = this.spotService.getSpots().subscribe({
      next: x => this.spot = x.find(x => x.id === spotId)!,
      error: error =>this.errorMessage = error
    });
  }

}
