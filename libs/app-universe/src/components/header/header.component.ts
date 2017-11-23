import { Component, OnInit, Input, trigger, state, transition, style, animate } from '@angular/core';
import { HeaderConfig } from '../../model/configs';
import { UniverseConfig } from '../../model/universe.config';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('shrinkOut', [
      state('less', style({'min-height': '65px', 'display': 'block'})),
      state('full', style({'min-height': '150px', 'display': '*'})),
      transition('full => less', [
        style({'min-height': '150px', 'display': '*'}),
        animate('500ms ease-in-out')
      ]),
      transition('less => full', [
        style({'min-height': '65px', 'display': 'block'}),
        animate('500ms ease-in-out')
      ])
    ]),
    trigger('centerHeader', [
      state('center', style({'width': 'auto', 'margin': 'auto', transform: 'scale(1)'})),
      state('pull', style({'width': '*', 'margin': '*', transform: 'scale(1)'})),
      transition('center => pull', [
        style({'width': '*', 'margin': '*', transform: 'scale(.5)'}),
        animate('500ms ease-in-out')
      ]),
      transition('pull => center', [
        style({'width': 'auto', 'margin': 'auto', transform: 'scale(.5)'}),
        animate('500ms ease-in-out')
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit {
  shrinked: boolean = false;
  toggleState: String = "full";
  toggleTitle: String  = 'center';
  imageHeight: String = '150';
  @Input() universeOptions: UniverseConfig;
  options: HeaderConfig;
  constructor() {}
  shrinkCssClass: String = '';

  onScrolled(event) {
    this.shrinkCssClass = event.target.scrollTop ? 'shrink-header' : '';
    this.shrinked = event.target.scrollTop > 0;
    this.imageHeight = event.target.scrollTop ? '50' : '150';
    this.toggleState = this.shrinked? "less": "full";
    this.toggleTitle = this.shrinked? "pull": "center";
  }
  ngOnInit() {
    this.options = this.universeOptions.header;
  }
}
