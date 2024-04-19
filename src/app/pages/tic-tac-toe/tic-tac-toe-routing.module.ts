import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { CreatingPlayersComponent } from './creating-players/creating-players.component';

const routes: Routes = [
  { path: '', redirectTo:'criar-jogadores', pathMatch: 'full' },
  { path: 'criar-jogadores', component: CreatingPlayersComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicTacToeRoutingModule { }
