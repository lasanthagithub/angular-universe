import { NavigationItem } from './nav-item';
export class NavConfig {
  items: Array<NavigationItem>;
  setActiveItem(item: NavigationItem) {
    item.active = true;
  }
}
