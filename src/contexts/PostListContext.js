import React from 'react';

import postAPI from '../postAPI';

const {Provider, Consumer} = React.createContext();
const POSTS_PER_PAGE = 10;

class PostListProvider extends React.Component {
  state = {
    posts: []
  }

  async componentDidMount() {
    const res = await postAPI.get('/posts');
    this.setState({
      posts: res.data
    });
  }

  render() {
    const value = {
      posts: this.state.posts
    };
    return (
      <Provider value={value}>{this.props.children}</Provider>
    );
  }
}

export {PostListProvider, Consumer as PostListConsumer};