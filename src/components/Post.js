import React,{useState} from 'react';
import { BsFillCaretDownFill, BsFillCaretUpFill } from 'react-icons/bs';

const Post = ({post}) => {
  const [expanded, handleExpand] = useState(false);

  return (
    <section className="post">
      <div className="title">{post.title}</div>
     <div className="icon" onClick={() => handleExpand(!expanded)}>{expanded ? <BsFillCaretUpFill/> : <BsFillCaretDownFill/>}</div>
     {expanded ? 
     <p>
      {post.body}
     </p> : ''}
     <hr/>
    </section>
  )
}

export default Post;