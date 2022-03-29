import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShifumiGameService } from 'src/app/services/shifumi-game.service';

@Component({
  selector: 'app-shifumi-game',
  templateUrl: './shifumi-game.component.html',
  styleUrls: ['./shifumi-game.component.css']
})
export class ShifumiGameComponent implements OnInit {

  scorePlayer:number=0;
  scoreIa:number=0;
  scoreToReach:number=0;
  jeuActif:boolean=false;

  result:string="";
  resultat:string = "";
  private player:string="";
  private iaPlayer:string="";
  iaChoice=["Pierre", "Papier", "Ciseaux"];
  iaPossibility:number=0;

  constructor(
    private shifumiService:ShifumiGameService,
    private router:Router,
    private route:ActivatedRoute,
  ) { }

  ngOnInit(): void {
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
  

  // On crée la fonction définissant les conditions de victoire,
  // de défaite et d'égalité
  playingCondition ():void {
    let ia = this.iaPlayer
    let p = this.player;
    

  if (p === "Pierre" && ia === "Ciseaux" ||
      p === "Papier" && ia === "Pierre" ||
      p === "Ciseaux" && ia === "Papier"
  ) {
      this.result = "Gagné !";
      // this.scorePlayer=this.scorePlayer++;
      this.resultat = `
          ${this.player} VS ${this.iaPlayer} : ${this.result}
      `;
      this.shifumiService.shifumiLevelOne().subscribe(
        () =>{
          this.router.navigate(['/shifumi-game']);
        }
      )
      console.log('Ajout 3 points');
      
  }
  else if (p === "Pierre" && ia === "Papier" ||
          p === "Papier" && ia === "Ciseaux" ||
          p === "Ciseaux" && ia === "Pierre"
  ) {
      this.result = "Perdu !";
      this.resultat = `
          ${this.player} VS ${this.iaPlayer} : ${this.result}
      `;
  } else {
      this.result = "Egalité !";
      this.resultat = `
          ${this.player} VS ${this.iaPlayer} : ${this.result}
      `;
  }
  }

  endGame() {
    if(this.scoreToReach=this.scorePlayer)
    this.jeuActif=false;
    if(this.scoreToReach=this.scoreIa)
    this.jeuActif=false;
  }


// On crée les fonctions liées au clic sur pierre
 stoneCase() {
  this.player = "Pierre";
  // On arrondie au chiffre inférieur le nombre renvoyé par random() grâce à floor()
  this.iaPossibility = Math.floor(Math.random() * 3);
  this.iaPlayer = this.iaChoice[this.iaPossibility];
  this.playingCondition();

  // this.endGame();

  console.log('pierre');
}

// On crée les fonctions liées au clic sur papier
paperCase() {
  this.player = "Papier";
  // On arrondie au chiffre inférieur le nombre renvoyé par random() grâce à floor()
  this.iaPossibility = Math.floor(Math.random() * 3);
  this.iaPlayer = this.iaChoice[this.iaPossibility];
  this.playingCondition();

  // this.endGame();

  console.log('papier');
}

// On crée les fonctions liées au clic sur ciseaux
 scissorsCase() {
  this.player = "Ciseaux";
  // On arrondie au chiffre inférieur le nombre renvoyé par random() grâce à floor()
  this.iaPossibility = Math.floor(Math.random() * 3);
  this.iaPlayer = this.iaChoice[this.iaPossibility];
  this.playingCondition();
  
  // this.endGame();

  console.log('ciseaux');
}

}

// TRAVAILLER SUR LA FONCTINO POUR INITIALISER LE JEU ET VERIFIER QUE LES CONDITIONS DE FIN DE JEU MARCHE 
