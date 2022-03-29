import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dice-game',
  templateUrl: './dice-game.component.html',
  styleUrls: ['./dice-game.component.css']
})
export class DiceGameComponent implements OnInit {

  // Initialisation des données
  scores:Number[]=[];
  activePlayer:number=0;
  roundScore:number=0;
  gamePlaying:boolean=true;

  delay:number=2500;
  i:number=1

  //*gnIf
  dice:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  // for rolling the dice and upating current socore
  gamePlay_1(){
    if(this.gamePlaying) {
      if(this.activePlayer==0){
          // 1. Random number
          // let dice1 = Math.floor(Math.random() * 6) + 1;
          let dice2 = Math.floor(Math.random() * 6) + 1;

          //2. Display the result
          // document.getElementById('dice-1').style.display = 'block';
          // document.getElementById('dice-2').style.display = 'block';
          // document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
          // document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';

          //3. Update the round score IF the rolled number was NOT a 1
          if (dice2 !== 1) { //dice1 !== 1 && 
              //Add score
              this.roundScore += dice2; //dice1 + 
              // document.querySelector('#current-' + activePlayer).textContent = roundScore;

          } else {
              //Next player
              // setTimeout(nextPlayer,1000);
          } 
      }
  }    
  }

}
