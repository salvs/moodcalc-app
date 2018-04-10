import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tile } from './tile';
import { Calc } from './calc';
import { TILES } from './mock-data';

@Component({
  selector: 'app-moods',
  templateUrl: './moods.component.html',
  styleUrls: ['./moods.component.css']
})
export class MoodsComponent implements OnInit {
  tiles = TILES;
  selectedTile: Tile;
  result: string;
  interimNum: string;

  constructor() { }

  ngOnInit() {
  }
  onSelect(tile: Tile): void {
    this.selectedTile = tile;
    console.log('hi');
    this.result = tile.name + this.result;
  }
  calcEquals(): void {
    console.log('calc');
    this.result = 'calc';
  }
  addNumbers(): void {
  }
}
