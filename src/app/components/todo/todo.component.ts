import { map } from 'rxjs';
import { IAppState, setTodos } from './../../store/app.state';
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

  constructor(
    private http: HttpClient,
    private store: Store<{ app: IAppState }>
  ) {}

  ngOnInit(): void {
    this.store
      .select('app')
      .pipe(map((app) => app.todos))
      .subscribe({
        next: (todos) => {
          if (todos.length === 0) {
            this.http
              .get<ITodo[]>('https://jsonplaceholder.typicode.com/todos')
              .subscribe({
                next: (res) => {
                  this.store.dispatch(setTodos({ payload: res }));
                },
              });
          }
        },
      });
  }
}
export interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
