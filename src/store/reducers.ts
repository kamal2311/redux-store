import * as fromActions from "./actions";

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
    case fromActions.REMOVE_TODO: {
      const data = state.data.filter(
        todo => todo.label != action.payload.label
      );
      return { ...state, data };
    }
  }

  return state;
}
