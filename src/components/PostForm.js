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
    <input value={title} onChange={e => onTitleChange(e.target.value)} />
    <textarea value={body} onChange={e => onBodyChange(e.target.value)} />
    <button>전송</button>
  </form>
 );
}