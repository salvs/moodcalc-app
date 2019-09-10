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

  result: string = '';
  total: number = 0;
  inp: string = '';
  lastInput: string = '';
  fullText: string = '';
  fullMap : Map <string, string>;
  
  ngOnInit() {}

  

  onSelect(num: string): void {
    this.fullText = this.fullText + num;
    this.result = this.fullText;
    
  };

  add = function() {
    this.fullMap.put('test','2');
    this.fullText = this.fullText + '+';
    this.result = this.fullText;
  };
  subtract = function(num: string) {
    this.fullText = this.fullText + '-';
    this.result = this.fullText;
  };

  clear = function() {
    this.result = '';
    this.total = 0;
    this.inp = '';
    this.lastInput = '';
  };
  clearRunningTotals = function() {
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

  computeFinal = function() {
    console.log(this.fullText);
    
    
  }




}
