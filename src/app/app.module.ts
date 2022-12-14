import { appReducer } from './store/app.state';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayCounterComponent } from './components/display-counter/display-counter.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { TodoComponent } from './components/todo/todo.component';
import { CounterComponent } from './components/counter/counter.component';
import { EffectsModule } from '@ngrx/effects';
import { TodosEffectService } from './store/todos.effect.service';

@NgModule({
  declarations: [
    AppComponent,
    DisplayCounterComponent,
    TodoComponent,
    CounterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({ app: appReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([TodosEffectService]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
