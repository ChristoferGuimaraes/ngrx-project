import { createAction, createReducer, on } from "@ngrx/store";

export interface IAppState {
 counter: number;
}

export const initialState: IAppState = {
  counter: 2
}

export const incrementCounter = createAction('[App] Increment Counter');

export const decrementCounter = createAction('[App] Decrement Counter')

export const appReducer = createReducer(
  initialState,
  on(incrementCounter, (state) => {
    state = {
      ...state,
      counter: state.counter + 1
    }
    return state;
  }),
  on(decrementCounter, (state) => {
    state = {
      ...state,
      counter: state.counter -1
    }
    return state;
  })
  );
