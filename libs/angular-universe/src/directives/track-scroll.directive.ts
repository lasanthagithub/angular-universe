import { Directive, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appTrackScroll]',
  host: { '(window:scroll)': 'track($event)' }
})
export class TrackScrollDirective {
  constructor() {}

  @Output() scrolled: EventEmitter<any> = new EventEmitter();

  track(event: any) {
    this.scrolled.emit(document.scrollingElement.scrollTop);
  }
}
