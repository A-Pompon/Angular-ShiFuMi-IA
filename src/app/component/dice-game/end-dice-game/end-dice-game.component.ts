import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DiceGameService } from 'src/app/services/dice-game/dice-game.service';

@Component({
  selector: 'app-end-dice-game',
  templateUrl: './end-dice-game.component.html',
  styleUrls: ['./end-dice-game.component.css']
})
export class EndDiceGameComponent implements OnInit {

  @Output() sendResetToData = new EventEmitter();

  @Input() winOrLoos='';
  @Input() scorePlayerFinal=0;
  @Input() scoreIaFinal=0;

  constructor(public data:DiceGameService) { }

  level:boolean=false;

  show:boolean=false;

  ngOnInit(): void {
  }

  resetGame() {
    this.sendResetToData.emit();
    // this.endPage=false;
  }

  resetAll(){
    this.resetGame();
    this.displayLevel();
  }

  displayLevel() {
    this.data.level=true;
    this.data.show=false;
  }

}
