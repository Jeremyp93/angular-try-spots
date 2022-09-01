import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Spot } from '../spot';
import { SpotService } from '../spot.service';

@Component({
  selector: 'app-spots',
  templateUrl: './spots.component.html',
  styleUrls: ['./spots.component.css']
})
export class SpotsComponent implements OnInit, OnDestroy {
  spots: Spot[] = [];
  filteredSpots: Spot[] = [];
  pageTitle: string = 'Spots';
  sub!: Subscription;
  errorMessage: string = '';

  private _searchSpot = "";
  get searchSpot(): string {
    return this._searchSpot;
  }
  set searchSpot(value: string) {
    this._searchSpot = value;
    this.filteredSpots = this.filterSpots(value);
  }

  constructor(private spotService: SpotService) { }

  ngOnInit(): void {
    this.sub = this.spotService.getSpots().subscribe({
      next: spots => {
        this.spots = spots;
        this.filteredSpots = this.spots;
      },
      error: error =>this.errorMessage = error
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  filterSpots = (search: string): Spot[] => {
    search = search.toLocaleLowerCase();
    if (!search.trim()) return this.spots;
    return this.spots.filter(x => x.name.toLocaleLowerCase().includes(search) || x.location.city.toLocaleLowerCase().includes(search))
  }
}
