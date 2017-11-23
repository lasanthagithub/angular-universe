import { Component, OnInit, Input, trigger, state, transition, style, animate } from '@angular/core';
import { HeaderConfig } from '../../model/configs';
import { UniverseConfig } from '../../model/universe.config';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('shrinkOut', [
      state('less', style({'min-height': '65px'})),
      state('full', style({'min-height': '150px'})),
      transition('full => less', [
        style({'min-height': '150px'}),
        animate('500ms ease-in-out')
      ]),
      transition('less => full', [
        style({'min-height': '65px'}),
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
    ]),
    trigger('lineUp', [
      state('lined', style({'display': 'inline', transform: 'scale(1)'})),
      state('notLined', style({'display': '*', transform: 'scale(1)'})),
      transition('notLined => lined', [
        style({'display': '*', transform: 'scale(.5)'}),
        animate('50ms ease-in-out')
      ]),
      transition('lined => notLined', [
        style({'display': 'inline', transform: 'scale(.5)'}),
        animate('50ms ease-in-out')
      ])
    ]),
    trigger('blockyHeader', [
      state('blocky', style({'display': 'block'})),
      state('notBlocky', style({'display': '*'})),
      transition('notBlocky => blocky', [
        style({'display': '*'}),
        animate('500ms ease-in-out')
      ]),
      transition('blocky => notBlocky', [
        style({'display': 'block'}),
        animate('500ms ease-in-out')
      ])
    ]),
    trigger('lessNav', [
      state('less', style({'height': '0px', 'opacity': '*', 'border-left-style': 'inset', 'border-left-color': 'coral'})),
      state('full', style({'height': '*'})),
      transition('full => less', [
        style({'min-height': '*', 'opacity': '1'}),
        animate('500ms ease-in-out')
      ]),
      transition('less => full', [
        style({'min-height': '0px', 'opacity': '0'}),
        animate('500ms ease-in-out')
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit {
  shrinked: boolean = false;
  toggleState: String = "full";
  toggleTitle: String  = 'center';
  toggleLined: String = 'notLined';
  toggleBlocky: String = "notBlocky";
  toggleNav: String = "full";
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
    this.toggleLined = this.shrinked? "lined": "notLined";
    this.toggleBlocky = this.shrinked? "blocky": "notBlocky";
    this.toggleNav = this.shrinked? "less": "full";
  }
  ngOnInit() {
    this.options = this.universeOptions.header;
  }
}
