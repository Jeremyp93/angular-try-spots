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
  dict: Object = {};

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

  getCorrectBackgroundColor = (spot: Spot): string => {
    if (!spot.visited) return 'grey';
    if (spot.rating! > 3) return 'green';
    return 'red';
  }

  sort = (property: keyof Spot): void => {
    if (!this.dict.hasOwnProperty(property)) {
      (this.dict as any)[property] = 'asc';
      this.sortAsc(property);
      return;
    }
    if ((this.dict as any)[property] === 'asc') {
      (this.dict as any)[property] = 'des';
      this.sortDes(property);
      return;
    }
    (this.dict as any)[property] = 'asc';
    this.sortAsc(property);
  }

  private sortAsc = (property: keyof Spot) => {
    this.filteredSpots.sort(function(a, b) {
      if (a[property]! < b[property]!) {
        return -1;
      }
      if (a[property]! > a[property]!) {
        return 1;
      }
      return 0;
    });
  }

  private sortDes = (property: keyof Spot) => {
    this.filteredSpots.sort(function(a, b) {
      if (a[property]! > b[property]!) {
        return -1;
      }
      if (a[property]! > a[property]!) {
        return 1;
      }
      return 0;
    });
  }
}
