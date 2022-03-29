import { EventEmitter, Input } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { ShifumiGameService } from 'src/app/services/shifumi-game.service';

@Component({
  selector: 'app-test-shifumi-end',
  templateUrl: './test-shifumi-end.component.html',
  styleUrls: ['./test-shifumi-end.component.css']
})
export class TestShifumiEndComponent implements OnInit {

  @Output() sendResetToData = new EventEmitter();

  @Input() winOrLoos='';
  @Input() scorePlayerFinal=0;
  @Input() scoreIaFinal=0;

  constructor(public data:ShifumiGameService) { }

  // endPage:boolean=false;

  level:boolean=false;

  show:boolean=false;

  ngOnInit(): void {
  }

  resetAll(){
    this.resetGame();
    this.displayLevel();
  }

  resetGame() {
    this.sendResetToData.emit();
    // this.endPage=false;
  }

  displayLevel() {
    this.data.level=true;
    this.data.show=false;
  }
  

}
