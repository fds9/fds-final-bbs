import React from 'react';

import postAPI from '../postAPI';
import CommentList from '../components/CommentList';

export default class CommentListContainer extends React.Component {
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
    const {loading, comments} = this.state;
    return localStorage.getItem('token') ? (
      loading || <CommentList comments={comments} />
    ) : (
      <div>로그인하지 않은 사용자는 댓글을 볼 수 없습니다.</div>
    )
  }
}
