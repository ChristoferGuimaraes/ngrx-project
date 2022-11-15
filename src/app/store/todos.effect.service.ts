import { IAppState, setTodos } from 'src/app/store/app.state';
import { loadTodos, successLoadTodos } from './app.state';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, tap } from 'rxjs';
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
      switchMap(() =>
        this.http.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos')
      ),
      tap((todos) => this.store.dispatch(setTodos({ payload: todos }))),
      map(() => successLoadTodos())
    )
  );
}
