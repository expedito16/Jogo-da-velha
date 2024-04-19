import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicTacToeRoutingModule } from './tic-tac-toe-routing.module';

//components
import { CreatingPlayersComponent } from './creating-players/creating-players.component';


@NgModule({
  declarations: [
    CreatingPlayersComponent
  ],
  imports: [
    CommonModule,
    TicTacToeRoutingModule
  ]
})
export class TicTacToeModule { }
