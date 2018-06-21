import React from 'react';

import postAPI from '../postAPI';

const {Provider, Consumer} = React.createContext();

class PostProvider extends React.Component {
  static defaultProps = {
    id: null, // 마운트 시 불러올 게시글의 ID
  }

  state = {
    loading: true,
    id: null,
    title: null,
    body: null,
    author: null,
  }

  async componentDidMount() {
    const {id} = this.props;
    this.setState({loading: true});
    try {
      const res = await postAPI.get(`/posts/${id}?_expand=user`);
      this.setState({
        id: res.data.id,
        title: res.data.title,
        body: res.data.body,
        author: res.data.user.username
      });
    } finally {
      this.setState({loading: false});
    }
  }

  render() {
    const value = {
      loading: this.state.loading,
      id: this.state.id,
      title: this.state.title,
      body: this.state.body,
      author: this.state.author
    };
    return (
      <Provider value={value}>{this.props.children}</Provider>
    );
  }
}

export {PostProvider, Consumer as PostConsumer}