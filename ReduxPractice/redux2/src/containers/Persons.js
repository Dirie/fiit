import React, { Component } from "react";
import { connect } from "react-redux";
import Person from "../components/Person/Person";
import AddPerson from "../components/AddPerson/AddPerson";
import * as actionTypes from "./../store/actions";
class Persons extends Component {
  state = {
    persons: []
  };

  personAddedHandler = () => {
    const newPerson = {
      id: Math.random(), // not really unique but good enough here!
      name: "Max",
      age: Math.floor(Math.random() * 40)
    };
    this.setState(prevState => {
      return { persons: prevState.persons.concat(newPerson) };
    });
  };

  personDeletedHandler = personId => {
    this.setState(prevState => {
      return {
        persons: prevState.persons.filter(person => person.id !== personId)
      };
    });
  };

  render() {
    return (
      <div>
        <AddPerson personAdded={this.props.onAddPerson} />
        {this.props.prs.map(person => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            clicked={() => this.props.OnDeletePerson(person.id)}
          />
        ))}
      </div>
    );
  }
}

const MapStateToProps = state => {
  return {
    prs: state.persons
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddPerson: (name, age) =>
      dispatch({
        type: actionTypes.ON_ADD_PERSON,
        personData: { name: name, age: age }
      }),
    OnDeletePerson: id =>
      dispatch({ type: actionTypes.ON_DELETE_PERSON, elementId: id })
  };
};

export default connect(
  MapStateToProps,
  mapDispatchToProps
)(Persons);
