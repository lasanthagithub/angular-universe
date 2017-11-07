import { Component, OnInit, Input } from '@angular/core';
import { HeaderConfig } from '../../model/configs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  shrinked: boolean;
  imageHeight: String = "150";
  constructor(public options: HeaderConfig) {

  }
  shrinkCssClass: String = '';

  onScrolled(yPos: number) {
    this.shrinkCssClass = yPos ? 'shrink-header' : '';
    this.shrinked = yPos > 0;
    this.imageHeight = yPos? '100': '150';
  }
  ngOnInit() {}
}
