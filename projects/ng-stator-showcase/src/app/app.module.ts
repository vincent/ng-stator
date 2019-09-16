import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { todosReducer } from './store/reducer';
import { TodosEffects } from './store/effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    StoreModule.forRoot({ todos: todosReducer }),
    EffectsModule.forRoot([TodosEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
