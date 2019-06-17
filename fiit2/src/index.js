// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
//import * as serviceWorker from "./serviceWorker";

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import React, { Component } from "react";
import { render } from "react-dom";

let books = [
  { title: "all were made", author: "Mr. Ali Salad", pages: "270" },
  { title: "the alchemist", author: "Dr. Mohamed", pages: "310" },
  { title: "Fire from the light", author: "Dr. Alex", pages: "232" }
];

class Library extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     open: false
  //   };
  //   this.toggleOpenClose = this.toggleOpenClose.bind(this);
  // }
  state = {
    open: false,
    freebookmark: false,
    hire: true,
    data: [],
    loading: true
  };
  toggleOpenClose = () => {
    this.setState(prevoisState => ({
      open: !prevoisState.open
    }));
  };

  componentDidMount() {
    this.state.loading = true;
    fetch("https://hplussport.com/api/products/order/price/sort/asc/qty/1")
      .then(data => data.json())
      .then(data => this.setState({ data, loading: false }));
  }
  componentDidUpdate() {
    console.log("Component did updated!");
  }
  render() {
    const { bookList } = this.props;
    return (
      <div>
        {this.state.hire ? <Hiring /> : <NotHiring />}
        {this.state.loading ? (
          "loading....."
        ) : (
          <div>
            {this.state.data.map(product => {
              return (
                <div key={product.id}>
                  <h1>the library product of the week</h1>
                  <h4>{product.name}</h4>
                  <img src={product.image} height={100} alt={product.name} />
                </div>
              );
            })}
          </div>
        )}
        <h1>The library is {this.state.open ? "open" : "close"} </h1>
        <button onClick={this.toggleOpenClose}>Change</button>
        {bookList.map((book, i) => (
          <Books
            key={i}
            title={bookList[i].title}
            author={bookList[i].author}
            pages={bookList[i].pages}
            freebookmark={this.state.freebookmark}
          />
        ))}
      </div>
    );
  }
}

const Hiring = () => (
  <div>
    <p>The library is hiring for more info www.pp/jobs.com</p>
  </div>
);

const NotHiring = () => (
  <div>
    <p>The library is not hiring. Check back later for more.</p>
  </div>
);

const Books = ({ title, author, pages, freebookmark }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>by: {author}</p>
      <p>Pages: {pages} pages.</p>
      <p>Free bookmark today {freebookmark ? "Yes!" : "No!"}</p>
    </div>
  );
};

render(<Library bookList={books} />, document.getElementById("root"));

// let skiData = {
//   total: 50,
//   powder: 20,
//   backCountery: 10,
//   goal: 100
// };
// class SkiDayCounter extends Component {
//   getPercent = decimal => {
//     return decimal * 100 + "%";
//   };
//   calGoalProgress = (total, goal) => {
//     return this.getPercent(total / goal);
//   };
//   render() {
//     const { total, powder, backCountery, goal } = this.props;
//     return (
//       <div>
//         <p>Total Days: {total} </p>
//         <p>Powder Days: {powder} </p>
//         <p>Back Country Days: {backCountery} </p>
//         <p>Goal Progress: {this.calGoalProgress(total, goal)} </p>
//       </div>
//     );
//   }
// }

// render(
//   <SkiDayCounter
//     total={skiData.total}
//     powder={skiData.powder}
//     backCountery={skiData.backCountery}
//     goal={skiData.goal}
//   />,
//   document.getElementById("root")
// );

// const title = React.createElement(
//   "h1",
//   { id: "title", className: "header" },
//   "hello world"
// );

// const list = React.createElement(
//   "ul",
//   { id: "ul1" },
//   React.createElement("li", { id: "l1" }, "Item one")
// );
//const ar = [title, list];

// class Message extends React.Component {
//   render() {
//     return (
//       <React.Fragment>
//         <h1 style={{ color: this.props.color }}>{this.props.msg}</h1>
//         <p>I'll check back in {this.props.minuets} minuets.</p>
//       </React.Fragment>
//     );
//   }
// }
// //ReactDOM.render(ar, document.getElementById("root"));
// ReactDOM.render(
//   <Message msg="How are you?" color="blue" minuets={5} />,
//   document.getElementById("root")
// );
