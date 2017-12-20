import * as fromActions from './actions';

export const initialState = {
  loaded: false,
  loading: false,
  data: [
    {
      label: "Eat pizza",
      complete: false
    }
  ]
};
export function reducer(
  state = initialState,
  action: { type: string; payload: { label: string; complete: boolean } }
) {
  switch (action.type) {
    case fromActions.ADD_TODO:
      return { ...state, data: [...state.data, action.payload] };
  }

  return state;
}
