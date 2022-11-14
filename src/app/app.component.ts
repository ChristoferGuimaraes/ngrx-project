import { decrementCounter, IAppState, incrementCounter, setCounter } from './store/app.state';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private store: Store<{ app: IAppState }>) {};

  counter$ = this.store.select('app').pipe(
    map(e => e.counter)
  );

  incrementCounter() {
    this.store.dispatch(incrementCounter());
  };

  decrementCounter() {
    this.store.dispatch(decrementCounter());
  };

  setCounter(event: string) {
    const transformedNumber = parseFloat(event);
    this.store.dispatch(setCounter({ payload: transformedNumber }));
  };
}
