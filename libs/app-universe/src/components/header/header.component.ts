import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor() {}
  shrinkCssClass: String = '';

  onScrolled(yPos: number) {
    this.shrinkCssClass = yPos ? 'shrink-header' : '';
  }
  ngOnInit() {}
}
