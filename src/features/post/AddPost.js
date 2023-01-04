import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { postAdded } from './postSlice'
const AddPost = () => {
    const dispatch =useDispatch()
    const [title,setTitle] =useState('')
    const [content,setContent] =useState('')
  
    const onTitleChange =(e)=>{
      setTitle(e.target.value)
    }
    const onContentChange=(e)=>{
        setContent(e.target.value)
    }
    const onSavePostClicked =()=>{
    if(title && content){
        dispatch(postAdded({
            id:nanoid(),
            title,
            content

        }))
        setTitle('')
        setContent('')
    }
    }
  return (
    <section className='container my-3'>
        <h3>Add Post</h3>
        <form className=' col-3 form-section'>
            <label htmlFor='postTitle'>Post Title:</label>
            <input type='text' 
            id='postTitle' 
            name='postTitle' 
            value={title} 
            onChange={onTitleChange} className='form-control'/>
            <label htmlFor='postContent'>Post Content:</label>
            <textarea type='text'
            id='postContent' 
            name='postContent'
            value={content}
            onChange={onContentChange} className='form-control'/>
            <button type='button' onClick={onSavePostClicked} className='btn btn-primary my-3' id='button'>Save Post</button>
        </form>
    </section>
    
  )
}

export default AddPost