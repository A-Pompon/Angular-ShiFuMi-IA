import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShifumiGameService } from 'src/app/services/shifumi-game.service';
import { TestShifumiService } from 'src/app/services/test-shifumi/test-shifumi.service';
import { TestShifumiEndComponent } from '../test-shifumi-end/test-shifumi-end.component';

@Component({
  selector: 'app-test-shifumi',
  templateUrl: './test-shifumi.component.html',
  styleUrls: ['./test-shifumi.component.css']
})
export class TestShifumiComponent implements OnInit {

  // Initialisation des données
  activeGame:boolean=true;
  scoreToReach:number=0;
  scorePlayer:number=0;
  scoreIa:number=0;
  
  sentPoints:boolean=false;

  gameBoard:boolean=false;

  winOrLoos:string="";
  winLoos:string="";

  scorePlayerFinal:number=this.scoreIa;
  scoreIaFinal:number=this.scorePlayer;

  show:boolean=true;
  // endGamePage:boolean=false;
  // @ViewChild(TestShifumiEndComponent) //RAJOUTER
  

  result:string="";
  resultat:string = "";
  player:string="";
  iaPlayer:string="";
  iaChoice:string[]=["Pierre", "Papier", "Ciseaux"];
  iaPossibility:number=0;

  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private testShifumiService:TestShifumiService,
    private shifumiService:ShifumiGameService,
    private data:ShifumiGameService,
    
    // public endPage:TestShifumiEndComponent //RAJOUTER
  ) { }

  ngOnInit(): void {
  }

  displayEndGame(){
    this.data.show=true;
  }

  displayGameBoard(){
    this.gameBoard = true;
  }

  scoreToEnd1() {
    this.scoreToReach = 3;
  }

  scoreToEnd2() {
    this.scoreToReach = 5;
  }

  scoreToEnd3() {
    this.scoreToReach = 7;
  }

  resetStats(){
    this.scoreToReach=0;
    this.scorePlayer=0;
    this.scoreIa=0;
    this.activeGame=true;
    // this.gameBoard=true;
    console.log("Les stats sont remises à zéro :D !");
  }


  // On crée la fonction définissant les conditions de victoire,
  // de défaite et d'égalité
  playingCondition ():void {
    let ia = this.iaPlayer
    let p = this.player;
    this.activeGame=true;
    

  if (p === "Pierre" && ia === "Ciseaux" ||
      p === "Papier" && ia === "Pierre" ||
      p === "Ciseaux" && ia === "Papier"
  ) {
      this.result = "Gagné !";
      this.scorePlayer=this.scorePlayer +1;
      // console.log('Score Player = '+this.scorePlayer);
      this.resultat = `
          ${this.player} VS ${this.iaPlayer} : ${this.result}
      `;
      // this.shifumiService.shifumiLevelOne().subscribe(
      //   () =>{
      //     this.router.navigate(['/shifumi-game']);
      //   }
      // )
      // console.log('Ajout 3 points');
      
  }
  else if (p === "Pierre" && ia === "Papier" ||
          p === "Papier" && ia === "Ciseaux" ||
          p === "Ciseaux" && ia === "Pierre"
  ) {
      this.result = "Perdu !";
      this.scoreIa=this.scoreIa +1;
      // console.log('Score IA = '+this.scoreIa);
      this.resultat = `
          ${this.player} VS ${this.iaPlayer} : ${this.result}
      `;
  } else {
      this.result = "Egalité !";
      this.resultat = `
          ${this.player} VS ${this.iaPlayer} : ${this.result}
      `;
  }
  console.log('Score Player = '+this.scorePlayer);
  console.log('Score IA = '+this.scoreIa);
  }

  // 
  // PAS MIS A VERIFIER SI BESOIN !???
  // 
  endGame() {
    if(this.sentPoints == true) {
      this.activeGame == false;
    }
  }

  sendPoints() {
    console.log('La manche est en '+this.scoreToReach+' points gagnant !');
    
    // Level 1
    if(this.scorePlayer === this.scoreToReach && this.scoreToReach == 3) {
      this.sentPoints==true;
      // alert('PLAYER WIN !');
      this.shifumiService.shifumiLevelOne().subscribe(
        // () =>{
        //   this.router.navigate(['/shifumi-game']);
        // }
      )
      console.log('Envoie de 3 points');
      this.gameBoard = false;
      // this.show=false; MARCHE AUSSI
      this.displayEndGame();
      this.winLoos="GAGNE !! :D"
      this.winOrLoos=this.winLoos;
    }

    // Level 2
    if(this.scorePlayer === this.scoreToReach && this.scoreToReach == 5) {
      this.sentPoints==true;
      // alert('PLAYER WIN !');
      this.shifumiService.shifumiLevelOne().subscribe(
        // () =>{
        //   this.router.navigate(['/shifumi-game']);
        // }
      )
      console.log('Envoie de 5 points');
      this.gameBoard = false;
      this.displayEndGame();
      this.winLoos="GAGNE !! Serais-tu un expert ? :D"
      this.winOrLoos=this.winLoos;
    }

    // Level 3
    if(this.scorePlayer === this.scoreToReach && this.scoreToReach == 7) {
      this.sentPoints=true;
      // alert('PLAYER WIN !');
      this.shifumiService.shifumiLevelOne().subscribe(
        // () =>{
        //   this.router.navigate(['/shifumi-game']);
        // }
      )
      console.log('Envoie de 7 points');
      this.gameBoard = false;
      this.displayEndGame();
      this.winLoos="GAGNE !! Tu es tout simplement IMBATTABLE:D"
      this.winOrLoos=this.winLoos;
    }
    
    // Level 1
    if(this.scoreToReach === this.scoreIa && this.scoreToReach == 3) {
      // alert('IA WIN !');
      this.sentPoints=true;
      this.shifumiService.shifumiLevelOne().subscribe(
        // () =>{
        //   this.router.navigate(['/shifumi-game']);
        // }
      )
      console.log('Soustraction de 1 points');
      this.gameBoard = false;
      // this.show=false; MARCHE AUSSI
      this.displayEndGame();
      this.winLoos="PERDU... Tu feras mieux la prochaine fois :("
      this.winOrLoos=this.winLoos;
    }

    // Level 2
    if(this.scoreToReach === this.scoreIa && this.scoreToReach == 5) {
      // alert('IA WIN !');
      this.sentPoints=true;
      this.shifumiService.shifumiLevelOne().subscribe(
        // () =>{
        //   this.router.navigate(['/shifumi-game']);
        // }
      )
      console.log('Soustraction de 3 points');
      this.gameBoard = false;
      this.displayEndGame();
      this.winLoos="PERDU... Tu manques d'exercice ? :("
      this.winOrLoos=this.winLoos;
    }

    // Level 3
    if(this.scoreToReach === this.scoreIa && this.scoreToReach == 7) {
      // alert('IA WIN !');
      this.sentPoints=true;
      this.shifumiService.shifumiLevelOne().subscribe(
        // () =>{
        //   this.router.navigate(['/shifumi-game']);
        // }
      )
      console.log('Soustraction de 5 points');
      this.gameBoard = false;
      this.displayEndGame();
      this.winLoos="PERDU... Essayes toujours ! :D"
      this.winOrLoos=this.winLoos;
    }
    
  }


// On crée les fonctions liées au clic sur pierre
 stoneCase() {
  this.player = "Pierre";
  setTimeout(() => {
    // On arrondie au chiffre inférieur le nombre renvoyé par random() grâce à floor()
  this.iaPossibility = Math.floor(Math.random() * 3);
  this.iaPlayer = this.iaChoice[this.iaPossibility];
  this.playingCondition();
  },1250)
  

  this.sendPoints();

  console.log('pierre');
}

// On crée les fonctions liées au clic sur papier
paperCase() {
  this.player = "Papier";
  setTimeout(() => {
    // On arrondie au chiffre inférieur le nombre renvoyé par random() grâce à floor()
  this.iaPossibility = Math.floor(Math.random() * 3);
  this.iaPlayer = this.iaChoice[this.iaPossibility];
  this.playingCondition();
  },1250)
  

  this.sendPoints();

  console.log('papier');
}

// On crée les fonctions liées au clic sur ciseaux
 scissorsCase() {
  this.player = "Ciseaux";
  setTimeout(() => {
    // On arrondie au chiffre inférieur le nombre renvoyé par random() grâce à floor()
  this.iaPossibility = Math.floor(Math.random() * 3);
  this.iaPlayer = this.iaChoice[this.iaPossibility];
  this.playingCondition();
  },1250)
  
  
  this.sendPoints();

  console.log('ciseaux');
}

}


// TO DO :
// REVOIR LA FONCTION sendPoints() 
// Trouver un moyen de stopper le jeu lorsque quelqu'un gagne
// Verifier que tous les liens des services fonctionnent