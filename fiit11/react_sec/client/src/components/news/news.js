import React, { Component } from "react";
import NewSingle from "./newSingle";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: []
    };
  }

  componentDidMount() {
    const url =
      "https://newsapi.org/v2/everything?q=bitcoin&from=2019-08-25&sortBy=publishedAt&apiKey=4acf6b21bd914cc590ff6212d3a37084";

    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ news: data.articles });
      })
      .catch(error => console.log(error));
  }

  renderItems = () => {
    return this.state.news.map(item => (
      <NewSingle key={item.url} item={item} />
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

export default News;
