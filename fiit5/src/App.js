import React, { useState } from "react";
import Persons from "./persons/persons";
import "./App.css";

const App = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "max", age: 25 },
      { name: "Manu", age: 29 },
      { name: "stepheni", age: 26 }
    ]
  });
  const [otherSate, setOtherState] = useState({
    otherstate: "some value"
  });

  console.log(personsState, otherSate);
  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: "abdul", age: 20 },
        { name: "dahir", age: 34 },
        { name: "siaid", age: 30 }
      ]
    });
    setOtherState({ otherstate: "some value2" });
  };

  return (
    <div className="container-fluid m-3">
      <button onClick={switchNameHandler} className="btn btn-primary btn-sm">
        Switch Names
      </button>
      <Persons
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Persons
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        My hoppies: Racing{" "}
      </Persons>
      <Persons
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
};

export default App;
