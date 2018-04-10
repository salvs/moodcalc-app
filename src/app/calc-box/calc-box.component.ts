import {Component, OnInit} from '@angular/core';
import {Tile} from './Tile';

@Component({
  selector: 'app-calc-box',
  templateUrl: './calc-box.component.html',
  styleUrls: ['./calc-box.component.css']
})
export class CalcBoxComponent implements OnInit {

  selectedTile: Tile;

  constructor() {}

  ngOnInit() {}

  result: string = '';
  total: number = 0;
  inp: string = '';
  lastInput: string = '';

  onSelect(num: string): void {
    this.calc(num);
  }

  calc = function(num: string) {
    if (num === 'a') {
      this.add(num);
      this.lastInput = 'a';
    } else if (num === 'e') {
      this.display();
      this.lastInput = 'e';
    } else if (num === 'c') {
      this.clear();
    } else {
      this.inp = this.inp + '' + num;
      this.result = this.inp;
    }
  };

  add = function(num: string) {
    this.total = this.total + parseInt(this.inp);
    this.result = '' + this.total;
    this.inp = '';
  };

  clear = function() {
    this.result = '';
    this.total = 0;
    this.inp = '';
    this.lastInput = '';
  };

  append = function(num: string) {
    this.inp = this.inp + '' + num;
    this.result = this.inp;
  };

  display = function(num: string) {
    this.computeFinal(num);
    this.result = '' + this.total;
    this.inp = '';
  };

  computeFinal = function(num: string) {
    if (this.lastInput == 'a') {
      console.log('last input was add');
      this.total = this.total + parseInt(this.inp);
    }
  }




}
