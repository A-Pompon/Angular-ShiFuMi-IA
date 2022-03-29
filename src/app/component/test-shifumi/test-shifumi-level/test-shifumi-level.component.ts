import { EventEmitter } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { ShifumiGameService } from 'src/app/services/shifumi-game.service';

@Component({
  selector: 'app-test-shifumi-level',
  templateUrl: './test-shifumi-level.component.html',
  styleUrls: ['./test-shifumi-level.component.css']
})
export class TestShifumiLevelComponent implements OnInit {

  @Output() sendLevelOneToData = new EventEmitter();
  @Output() sendLevelTwoToData = new EventEmitter();
  @Output() sendLevelThreeToData = new EventEmitter();
  @Output() sendDisplayToData = new EventEmitter();

  constructor(public data:ShifumiGameService) { }

  level:boolean=true;

  ngOnInit(): void {
  }

  displayGameBoardChild() {
    this.sendDisplayToData.emit();
  }
  
  sendEvent1() {
    this.data.level=false;
    this.sendLevelOneToData.emit();
  }

  sendEvent2() {
    this.data.level=false;
    this.sendLevelTwoToData.emit();
  }

  sendEvent3() {
    this.data.level=false;
    this.sendLevelThreeToData.emit();
  }

  resetGame(){
    this.data.level=true;
  }
  
}
