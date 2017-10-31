import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { UniverseComponent } from './components/universe/universe.component';
import { TrackScrollDirective } from './directives/track-scroll.directive';
import { BsRootModule } from 'ngx-bootstrap';
@NgModule({
  imports: [CommonModule],
  declarations: [HeaderComponent, UniverseComponent, TrackScrollDirective],
  exports: [UniverseComponent, HeaderComponent],
  bootstrap: []
})
export class AppUniverseModule {}
