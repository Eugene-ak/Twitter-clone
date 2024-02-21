import React, { Component } from "react";
import { getPosts } from "../hooks/useFetch";

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      isLoading: false,
      error: null,
    };
  }

  async componentDidMount() {
    this.setState({
      isLoading: true,
    });

    const data = await getPosts();

    if (data.status === 200 && data?.data) {
        this.setState({
          posts: data.data.splice(0, 10),
          isLoading: false,
          error: null,
        });
    } else {
      this.setState({
        posts: [],
        isLoading: false,
        error: "Sorry! No posts found :(",
      });
    }
  }

  render() {
    const posts = this.state.posts;
    const isLoading = this.state.isLoading;
    const error = this.state.error;

    return (
      <main>
        {isLoading && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {posts && posts.length !== 0 &&
          posts.map((post) => {
            return (
              <div key={post.id}>
                <h2 className="post-title">{post.title}</h2>
                <p className="post-body">{post.body}</p>
                <p className="post-author">
                  This post was created by user id {post.userId}
                </p>
              </div>
            );
          })}
      </main>
    );
  }
}
