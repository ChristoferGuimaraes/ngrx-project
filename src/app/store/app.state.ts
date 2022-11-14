import { createAction, createReducer, on, props } from "@ngrx/store";

export interface IAppState {
 counter: number;
};

export const initialState: IAppState = {
  counter: 0
};

export const incrementCounter = createAction('[App] Increment Counter');
export const decrementCounter = createAction('[App] Decrement Counter');
export const setCounter = createAction('[App] Set Counter', props<{ payload: number }>());

export const appReducer = createReducer(
  initialState,
  on(incrementCounter, (state) => {
    state = {
      ...state,
      counter: state.counter + 1
    };

    return state;
  }),
  on(decrementCounter, (state) => {
    state = {
      ...state,
      counter: state.counter -1
    };

    return state;
  }),
  on(setCounter, (state, action) => {
    const payload = action.payload;

    state = {
      ...state,
      counter: payload
    };

    return state;
  })
);


