import React from 'react';

import postAPI from '../postAPI';

const {Provider, Consumer} = React.createContext();

class CommentListProvider extends React.Component {
  static defaultProps = {
    postId: null // 댓글을 불러올 게시글의 ID
  };

  state = {
    loading: false,
    comments: []
  };

  async componentDidMount() {
    const {postId} = this.props;
    this.setState({loading: true});
    try {
      const res = await postAPI.get(`/comments?_expand=user&postId=${postId}`);
      this.setState({
        comments: res.data.map(c => ({
          id: c.id,
          body: c.body,
          ownerId: c.userId,
          author: c.user.username
        }))
      });
    } finally {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    const value = {
      ...this.state
    }
    return (
      <Provider value={value}>{this.props.children}</Provider>
    )
  }
}

export {CommentListProvider, Consumer as CommentListConsumer};