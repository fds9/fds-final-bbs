import React from 'react';

import postAPI from '../postAPI';

const {Provider, Consumer} = React.createContext();
// const POSTS_PER_PAGE = 10;

class PostListProvider extends React.Component {
  state = {
    posts: [],
    loading: false
  }

  async componentDidMount() {
    this.setState({loading: true});
    try {
      const res = await postAPI.get('/posts?_expand=user');
      this.setState({
        posts: res.data.map(p => ({
          id: p.id,
          title: p.title,
          body: p.body,
          author: p.user.username
        }))
      });
    } finally {
      this.setState({loading: false});
    }
  }

  render() {
    const value = {
      posts: this.state.posts,
      loading: this.state.loading
    };
    return (
      <Provider value={value}>{this.props.children}</Provider>
    );
  }
}

export {PostListProvider, Consumer as PostListConsumer};