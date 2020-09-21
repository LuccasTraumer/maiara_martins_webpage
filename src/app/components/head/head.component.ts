import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById('header').style.fontSize = '1.1rem';
        document.getElementById('title').style.fontSize = '1.4rem';
        document.getElementById('container-fluid').style.height = '16vh';
      } else {
        document.getElementById('header').style.fontSize = '1.3rem';
        document.getElementById('title').style.fontSize = '2rem';
      }
    }
  }

}
