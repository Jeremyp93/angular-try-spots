import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Spot } from '../spot';
import { SpotService } from '../spot.service';

@Component({
  selector: 'app-spot-detail',
  templateUrl: './spot-detail.component.html',
  styleUrls: ['./spot-detail.component.css']
})
export class SpotDetailComponent implements OnInit {

  spot: Spot | undefined;
  sub!: Subscription;
  errorMessage: string = '';

  constructor(private route: ActivatedRoute, private router: Router, private spotService: SpotService) { }

  ngOnInit(): void {
    const spotId = Number(this.route.snapshot.paramMap.get('id'));
    this.sub = this.spotService.getSpots().subscribe({
      next: x => this.spot = x.find(x => x.id === spotId),
      error: error =>this.errorMessage = error
    });
  }

}
