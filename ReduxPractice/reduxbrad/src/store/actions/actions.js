export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADD = "ADD";
export const SUB = "SUB";
export const STORE_RESULTS = "STORE_RESULTS";
export const DELETE_RESULTS = "DELETE_RESULTS";

export const increment = () => {
  return {
    type: INCREMENT
  };
};

export const decrement = () => {
  return {
    type: DECREMENT
  };
};

export const add = value => {
  return {
    type: ADD,
    val: value
  };
};

export const sub = value => {
  return {
    type: SUB,
    val: value
  };
};

export const saveResult = res => {
  return {
    type: STORE_RESULTS,
    result: res
  };
};

export const storeResult = res => {
  return dispatch => {
    setTimeout(() => {
      dispatch(saveResult(res));
    }, 2000);
  };
};

export const deleteResults = id => {
  return {
    type: DELETE_RESULTS,
    elementId: id
  };
};
