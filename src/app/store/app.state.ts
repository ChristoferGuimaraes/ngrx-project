import { ITodo } from './../components/todo/todo.component';
import { createAction, createReducer, on, props } from '@ngrx/store';

export interface IAppState {
  counter: number;
  todos: ITodo[];
}

export const initialState: IAppState = {
  counter: 0,
  todos: [],
};

export const incrementCounter = createAction('[App] Increment Counter');
export const decrementCounter = createAction('[App] Decrement Counter');
export const setCounter = createAction(
  '[App] Set Counter',
  props<{ payload: number }>()
);

export const successLoadTodos = createAction('[App] [Success] Load Todos');
export const loadTodos = createAction('[App] Load Todos');
export const setTodos = createAction(
  '[App] Set Todos',
  props<{ payload: ITodo[] }>()
);

export const appReducer = createReducer(
  initialState,
  on(incrementCounter, (state) => {
    state = {
      ...state,
      counter: state.counter + 1,
    };

    return state;
  }),
  on(decrementCounter, (state) => {
    state = {
      ...state,
      counter: state.counter - 1,
    };

    return state;
  }),
  on(setCounter, (state, { payload }) => {
    state = {
      ...state,
      counter: payload,
    };

    return state;
  }),
  on(setTodos, (state, { payload }) => {
    state = {
      ...state,
      todos: payload,
    };

    return state;
  })
);
