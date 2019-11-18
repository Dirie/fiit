// import redux from "redux";
const redux = require("redux");

const createStore = redux.createStore;

const initialState = {
  counter: 0
};

const rootReducer = (state = initialState, action) => {
  if (action.type === "INC_STATE") {
    return {
      ...state,
      counter: state.counter + 1
    };
  }
  if (action.type === "ADD_STATE") {
    return {
      ...state,
      counter: state.counter + action.value
    };
  }
  return state;
};

const store = createStore(rootReducer);
console.log(store.getState());

store.subscribe(() => {
  console.log("[Subscriptoin]", store.getState());
});

store.dispatch({ type: "INC_STATE" });
store.dispatch({ type: "ADD_STATE", value: 10 });
console.log(store.getState());
