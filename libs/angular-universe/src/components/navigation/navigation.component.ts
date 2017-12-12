import { Component, OnInit, Input } from '@angular/core';
import { NavConfig, NavigationItem } from '../../model/configs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  @Input() options: NavConfig;
  constructor() {}

  ngOnInit() {}
  setActive(item: NavigationItem) {
    const activeItem: NavigationItem = this.options.items.find((it: NavigationItem) => it.active);
    if (!activeItem || activeItem !== item) {
      if (activeItem) {
        activeItem.active = false;
      }
      item.active = true;
    }
  }
}
