import { map } from 'rxjs';
import { IAppState } from './../../store/app.state';
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-display-contador',
  templateUrl: './display-contador.component.html',
  styleUrls: ['./display-contador.component.scss']
})
export class DisplayContadorComponent implements OnInit {

  constructor(private store: Store<{ app: IAppState }>) { }

  counter$ = this.store.select('app').pipe(
    map(e => e.counter)
  );

  ngOnInit(): void {
  }

}
