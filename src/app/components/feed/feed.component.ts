import { PostTO } from './../utils/PostTO';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  constructor() { }

  private static pathImgs = 'https://raw.githubusercontent.com/LuccasTraumer/maiara_martins_webpage/master/src/assets/photograpys/';

  numeroPosts = 29;

  posts = [];

  ngOnInit(): void {
    this.populateArray();
  }
  private populateArray() {
    for (let i = 0; i <= this.numeroPosts; i++) {
      const obj = new PostTO();
      obj.src = FeedComponent.pathImgs + i + '.jpg';
      obj.id = i;
      this.posts.push(obj);
    }
  }
}
