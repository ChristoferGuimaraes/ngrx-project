import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import {
  decrementCounter,
  IAppState,
  incrementCounter,
  setCounter,
} from 'src/app/store/app.state';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {
  counter$ = this.store.select('app').pipe(map((e) => e.counter));

  constructor(private store: Store<{ app: IAppState }>) {}

  incrementCounter() {
    this.store.dispatch(incrementCounter());
  }

  decrementCounter() {
    this.store.dispatch(decrementCounter());
  }

  setCounter(event: string) {
    const transformedNumber = parseFloat(event);
    this.store.dispatch(setCounter({ payload: transformedNumber }));
  }
}
