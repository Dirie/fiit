import React, { Component } from "react";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "https://jsonplaceholder.typicode.com/posts",
      posts: null
    };
  }

  componentDidMount() {
    fetch(this.state.url)
      .then(res => res.json())
      .then(data => console.log(data));
  }
  render() {
    const posts = this.state.posts;

    // const postItems = posts.map(post => (
    //   <div key={post.id}>
    //     <h3>post.title</h3>
    //     <p>post.body</p>
    //   </div>
    // ));
    return (
      <div>
        <h1>Posts</h1>
        {/* {postItems} */}
      </div>
    );
  }
}

export default Posts;
