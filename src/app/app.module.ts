import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//module
import { TicTacToeModule } from './pages/tic-tac-toe/tic-tac-toe.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TicTacToeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
