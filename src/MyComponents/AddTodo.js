import React, { useState } from 'react'

const AddTodo = (props) => {
    let[title,setTitle] =useState("")
    let[desc,setdesc] =useState("")
    let submit =(e)=>{
        e.preventDefault();
        if(!title|| !desc){
            alert("Title or Description cannot be blank")

        }
        props.addTodo(title,desc)
        setTitle = " "
        setdesc =  " "
    }
  return (
    <div className='container my-3'>
        <h3>Add a Todo!</h3>
<form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" value ={title} onChange = {(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp"/>
    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  <div className="mb-3">
    <label htmlFor="desc" className="form-label">Description</label>
    <input type="text" value = {desc} onChange = {(e)=>{setdesc(e.target.value)}} className="form-control" id="desc"/>
  </div>
  {/* <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlfor="exampleCheck1">Check me out</label>
  </div> */}
  <button type="submit" className="btn btn-primary">Add Todo</button>
</form>
    </div>
  )
}

export default AddTodo