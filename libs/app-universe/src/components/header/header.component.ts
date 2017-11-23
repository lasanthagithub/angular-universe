import { Component, OnInit, Input, trigger, state, transition, style, animate } from '@angular/core';
import { HeaderConfig } from '../../model/configs';
import { UniverseConfig } from '../../model/universe.config';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('shrinkOut', [
      state('in', style({height: '*'})),
      transition('* => void', [
        style({height: '*'}),
        animate(150, style({height: 65}))
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit {
  shrinked: boolean = false;
  toggleState: String;
  imageHeight: String = '150';
  @Input() universeOptions: UniverseConfig;
  options: HeaderConfig;
  constructor() {}
  shrinkCssClass: String = '';

  onScrolled(event) {
    this.shrinkCssClass = event.target.scrollTop ? 'shrink-header' : '';
    this.shrinked = event.target.scrollTop > 0;
    this.imageHeight = event.target.scrollTop ? '50' : '150';
    this.toggleState = "in";
  }
  ngOnInit() {
    this.options = this.universeOptions.header;
  }
}
