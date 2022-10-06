import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Spot } from '../spot';

@Component({
  selector: 'app-sidepane',
  templateUrl: './sidepane.component.html',
  styleUrls: ['./sidepane.component.css']
})
export class SidepaneComponent implements OnInit {
  @Input() title?: string = '';
  @Output() onSidepaneClosed: EventEmitter<void> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  closeSidepane = () => {
    this.onSidepaneClosed.emit();
  }

}
