import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ShifumiGameComponent } from './component/shifumi-game/shifumi-game.component';
import { TestShifumiComponent } from './component/test-shifumi/test-shifumi/test-shifumi.component';
import { ShifumiGameLevelComponent } from './component/shifumi-game-level/shifumi-game-level/shifumi-game-level.component';
import { TestShifumiLevelComponent } from './component/test-shifumi/test-shifumi-level/test-shifumi-level.component';
import { TestShifumiEndComponent } from './component/test-shifumi/test-shifumi-end/test-shifumi-end.component';
import { DiceGameComponent } from './component/dice-game/dice-game/dice-game.component';
import { LevelDiceGameComponent } from './component/dice-game/level-dice-game/level-dice-game.component';
import { EndDiceGameComponent } from './component/dice-game/end-dice-game/end-dice-game.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'shifumi-game', component:ShifumiGameComponent},
  {path:'shifumi-game-level', component:ShifumiGameLevelComponent},
  {path:'test-shifumi', component:TestShifumiComponent},
  {path:'test-shifumi-level', component:TestShifumiLevelComponent},
  {path:'test-shifumi-end', component:TestShifumiEndComponent},
  {path:'dice-game', component:DiceGameComponent},
  {path:'level-dice-game', component:LevelDiceGameComponent},
  {path:'end-dice-game', component:EndDiceGameComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
