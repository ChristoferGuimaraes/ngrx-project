import { IAppState, setTodos } from 'src/app/store/app.state';
import { loadTodos, successLoadTodos } from './app.state';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, map, switchMap, tap, of, withLatestFrom } from 'rxjs';
import { ITodo } from '../components/todo/todo.component';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class TodosEffectService {
  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<{ app: IAppState }>
  ) {}

  loadAllTodos = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTodos),
      withLatestFrom(this.store.select('app').pipe(map((app) => app.todos))),
      switchMap(([_, todos]) => {
        if(todos.length === 0) {
          return this.http.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos').pipe(
            tap((todos) => this.store.dispatch(setTodos({ payload: todos }))),
            map(() => successLoadTodos())
          )
        }
        return of(successLoadTodos());
      }),
    )
  );
}
