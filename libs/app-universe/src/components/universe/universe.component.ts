import { Component, OnInit } from '@angular/core';
import { UniverseConfig } from '../../model/universe.config';

@Component({
  selector: 'app-universe',
  templateUrl: './universe.component.html',
  styleUrls: ['./universe.component.css']
})
export class UniverseComponent implements OnInit {
  constructor(public options: UniverseConfig) {}

  ngOnInit() {}
}
