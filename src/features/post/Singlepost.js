import React,{useState} from 'react'

const Singlepost = (post) => {
    const {title,content}= post;
    const [show,setShow]=useState(true)
  return (
    <article>
    <h3>{title}</h3>
 { show?<p>{content}</p>:<p>{content.slice(0,98)}...</p>}   
 <button className='btn btn-danger' onClick={()=>setShow(!show)}>{!show?'show more':'show less'}</button>
 </article>
  )
}

export default Singlepost