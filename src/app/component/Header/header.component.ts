import {Component, HostListener, Inject, OnChanges, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges {
  navIsFixed: boolean;

  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit() {
  }

  ngOnChanges() {
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    console.log(number)
    if (number >= 100) {
      this.navIsFixed = true;
    } else if (this.navIsFixed && number < 21) {
      this.navIsFixed = false;
    }
  }

  bindHeader() {
    this.navIsFixed = false;
  }
}
