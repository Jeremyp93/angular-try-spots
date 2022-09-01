import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() comment: string = '';

  show: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  showComment = () => {
    this.show = !this.show;
  }

}
