import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-shifumi-game-level',
  templateUrl: './shifumi-game-level.component.html',
  styleUrls: ['./shifumi-game-level.component.css']
})
export class ShifumiGameLevelComponent implements OnInit {

  @Output() sendLevelOneToData = new EventEmitter();
  @Output() sendLevelTwoToData = new EventEmitter();
  @Output() sendLevelThreeToData = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    
  }

  sendEvent1() {
    this.sendLevelOneToData.emit(
      // {
      // value:'3'
      // }
    );
  }

  sendEvent2() {
    this.sendLevelTwoToData.emit(
      // {
      // value:''
      // }
    );
  }

  sendEvent3() {
    this.sendLevelThreeToData.emit(
      // {
      // value:'7'
      // }
    );
  }

}
