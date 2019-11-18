import * as actionTypes from "../actions";

const initialState = {
  persons: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ON_ADD_PERSON:
      return {
        ...state,
        persons: state.persons.concat({
          id: Math.random(),
          name: action.personData.name,
          age: action.personData.age
        })
      };
    case actionTypes.ON_DELETE_PERSON:
      const updatedArray = state.persons.filter(
        person => person.id !== action.elementId
      );
      return {
        ...state,
        persons: updatedArray
      };
  }

  return state;
};

export default reducer;
