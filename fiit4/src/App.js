import React, { Component } from "react";
import "./App.css";
import Counters from "./components/counters";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/navbar";
// const App = () => {
//   return (
//     <div>
//       <h1>New Application of mastering react!</h1>
//     </div>
//   );
// };

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleIncrement = cntr => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(cntr);
    counters[index] = { ...cntr };
    counters[index].value++;
    this.setState({ counters });
  };

  hadleDelete = cid => {
    const counters = this.state.counters.filter(c => c.id !== cid);
    this.setState({ counters });
  };
  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDecrement = cntr => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(cntr);
    counters[index] = { ...cntr };
    if (counters[index].value > 0) {
      counters[index].value--;
      this.setState({ counters });
    }
  };

  render() {
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <Counters
          counters={this.state.counters}
          onDelete={this.hadleDelete}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onReset={this.handleReset}
        />
      </React.Fragment>
    );
  }
}

export default App;
