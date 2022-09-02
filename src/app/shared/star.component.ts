import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from "@angular/core";

@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
    @Input() rating!: number;
    cropWidth: number = 75;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
        this.cropWidth = this.rating! * 75/5
    }

    onClick = (): void => {
        this.ratingClicked.emit(`The rating is ${this.rating}`);
    }
}