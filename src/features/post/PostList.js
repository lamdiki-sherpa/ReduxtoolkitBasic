import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import { selectAllPosts } from './postSlice'
import Singlepost from './Singlepost'
const PostList = () => {
    const posts = useSelector(selectAllPosts)
 
  return (
    <div className='container ' id='post-container'>
        <h2>Post List</h2>
        <section className='post-section'>
        {posts.map((post)=>{
            return <Singlepost key={post.id} {...post}/>
        })}
        </section>
    </div>
  )
}

export default PostList