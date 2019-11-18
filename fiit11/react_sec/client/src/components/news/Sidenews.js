import React, { Component } from "react";
import SingleNews from "./singleNews";

class SideNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidenews: []
    };
  }

  componentDidMount() {}

  renderItems = () => {
    return this.state.sidenews.map(item => (
      <SingleNews key={item.url} item={item} />
    ));
  };
  render() {
    return (
      <>
        <div className="row">{this.renderItems()}</div>
      </>
    );
  }
}

export default SideNews;
