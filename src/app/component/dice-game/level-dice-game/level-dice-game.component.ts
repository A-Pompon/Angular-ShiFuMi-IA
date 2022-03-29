import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DiceGameService } from 'src/app/services/dice-game/dice-game.service';

@Component({
  selector: 'app-level-dice-game',
  templateUrl: './level-dice-game.component.html',
  styleUrls: ['./level-dice-game.component.css']
})
export class LevelDiceGameComponent implements OnInit {

  @Output() sendLevelOneToData = new EventEmitter();
  @Output() sendLevelTwoToData = new EventEmitter();
  @Output() sendLevelThreeToData = new EventEmitter();
  @Output() sendDisplayToData = new EventEmitter();

  constructor(public data:DiceGameService) { }

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
