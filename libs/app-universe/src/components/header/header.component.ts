import { Component, OnInit, Input } from '@angular/core';
import { HeaderConfig } from '../../model/configs';
import { UniverseConfig } from '../../model/universe.config';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  shrinked: boolean;
  imageHeight: String = '150';
  @Input() universeOptions: UniverseConfig;
  options: HeaderConfig;
  constructor() {}
  shrinkCssClass: String = '';

  onScrolled(yPos: number) {
    this.shrinkCssClass = yPos ? 'shrink-header' : '';
    this.shrinked = yPos > 0;
    this.imageHeight = yPos ? '100' : '150';
  }
  ngOnInit() {
    this.options = this.universeOptions.header;
  }
}
