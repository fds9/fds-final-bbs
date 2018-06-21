import React from 'react';

import postAPI from '../postAPI';

const {Provider, Consumer} = React.createContext();

class PostFormProvider extends React.Component {
  static defaultProps = {
    id: null, // id가 주어지면 편집 모드, 아니면 생성 모드
  };

  state = {
    success: false,
    loading: false,
    title: '',
    body: '',
  }

  async componentDidMount() {
    const {id} = this.props;
    if (id) {
      this.setState({loading: true});
      try {
        const res = await postAPI.get(`/posts/${id}`);
        this.setState({
          title: res.data.title,
          body: res.data.body
        })
      } finally {
        this.setState({
          loading: false
        })
      }
    }
  }

  submit = async () => {
    const {id} = this.props;
    const payload = {
      title: this.state.title,
      body: this.state.body
    };
    this.setState({loading: true});
    try {
      if (id) {
        // 편집
        await postAPI.patch(`/posts/${id}`, payload);
      } else {
        await postAPI.post('/posts', payload);
      }
      this.setState({success: true});
    } finally {
      this.setState({loading: false});
    }
    
  }

  updateTitle = title => this.setState({title})
  updateBody = body => this.setState({body})

  render() {
    const value = {
      ...this.state,
      updateTitle: this.updateTitle,
      updateBody: this.updateBody,
      submit: this.submit
    };
    return (
      <Provider value={value}>{this.props.children}</Provider>
    )
  }
}

export {PostFormProvider, Consumer as PostFormConsumer}