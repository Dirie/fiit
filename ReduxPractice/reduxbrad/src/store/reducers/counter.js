import * as actionTypes from "../actions/actions";
import { updateObject } from "./../utils";

const initialState = {
  counter: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return updateObject(state, { counter: state.counter + 1 });
    case actionTypes.DECREMENT:
      return updateObject(state, { counter: state.counter - 1 });
    case actionTypes.ADD:
      return updateObject(state, { counter: state.counter + action.val });
    case actionTypes.SUB:
      return updateObject(state, { counter: state.counter - action.val });
  }

  return state;
};

export default reducer;