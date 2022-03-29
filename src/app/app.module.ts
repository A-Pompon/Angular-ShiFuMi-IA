import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { ShifumiGameComponent } from './component/shifumi-game/shifumi-game.component';
import { DiceGameComponent } from './component/dice-game/dice-game/dice-game.component';
import { HttpClientModule } from '@angular/common/http';
import { ShifumiGameLevelComponent } from './component/shifumi-game-level/shifumi-game-level/shifumi-game-level.component';
import { TestShifumiComponent } from './component/test-shifumi/test-shifumi/test-shifumi.component';
import { TestShifumiLevelComponent } from './component/test-shifumi/test-shifumi-level/test-shifumi-level.component';
import { TestShifumiEndComponent } from './component/test-shifumi/test-shifumi-end/test-shifumi-end.component';
import { EndDiceGameComponent } from './component/dice-game/end-dice-game/end-dice-game.component';
import { LevelDiceGameComponent } from './component/dice-game/level-dice-game/level-dice-game.component';

const appRoutes: Routes=[
  {path:'', component:HomeComponent},
  {path:'shifumi-game', component:ShifumiGameComponent},
  {path:'dice-game', component:DiceGameComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShifumiGameComponent,
    DiceGameComponent,
    ShifumiGameLevelComponent,
    TestShifumiComponent,
    TestShifumiLevelComponent,
    TestShifumiEndComponent,
    EndDiceGameComponent,
    LevelDiceGameComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
