import { map } from 'rxjs';
import { IAppState, setTodos, loadTodos } from './../../store/app.state';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  todos$ = this.store.select('app').pipe(map((app) => app.todos));

  constructor(private store: Store<{ app: IAppState }>) {}

  ngOnInit(): void {
    this.store.dispatch(loadTodos())
  }
}
export interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
