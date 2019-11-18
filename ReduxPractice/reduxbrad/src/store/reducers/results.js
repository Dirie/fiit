import * as actionTypes from "../actions/actions";
import { updateObject } from "./../utils";
const initialState = {
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULTS:
      return updateObject(state, {
        results: state.results.concat({ id: new Date(), value: action.result })
      });

    case actionTypes.DELETE_RESULTS:
      const updatedArray = state.results.filter(
        result => result.id !== action.elementId
      );
      return updateObject(state, { results: updatedArray });
  }

  return state;
};

export default reducer;
