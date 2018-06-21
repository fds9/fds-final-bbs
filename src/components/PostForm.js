import React from 'react';

export default function PostForm({
  title = '',
  body = '',
  onTitleChange = title => {},
  onBodyChange = body => {},
  onSubmit = () => {}
}) {
 return (
  <form onSubmit={e => {e.preventDefault(); onSubmit()}}>
    <div className="field">
      <label className="label">제목</label>
      <div className="control">
        <input className="input" value={title} onChange={e => onTitleChange(e.target.value)} />
      </div>
    </div>
    <div className="field">
      <label className="label">내용</label>
      <div className="control">
        <textarea className="textarea" value={body} onChange={e => onBodyChange(e.target.value)} />
      </div>
    </div>
    <button className="button is-primary">전송</button>
  </form>
 );
}