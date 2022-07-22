import React, { useState } from 'react'
import { baseUrl } from '../Globals'

const AddBooks = ({book}) => {

    const [state, setState] = useState({
        title: "", 
        author: "", 
        image: "", 
        description: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault(); 
        fetch(baseUrl + '/books', {
            method: "POST", 
            headers: {
                "Accept" : "application/json", 
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(state)
        })
            .then(resp => resp.json())
            .then(data => console.log(data))
    }

    const handleChange = (e) => {
        setState({
            ...state, 
            [e.target.name] : e.target.value
        })
    }

  return (
    <div>
       <h1>This page is for adding a new book form</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='title'>Book Name </label>
                <input type="text" name="title" id="title" value={state.title} onChange={handleChange}></input>
            </div>
            <div>
                <label htmlFor='author'>Author Name </label>
                <input type="text" name="author" id="author" value={state.author} onChange={handleChange}></input>
            </div>
            <div>
                <label htmlFor='image'>Book Image </label>
                <input type="text" name="image" id="image" value={state.image} onChange={handleChange}></input>
            </div>
            <div>
                <label htmlFor='description'>Book Description </label>
                <input type="text" name="description" id="description" value={state.description} onChange={handleChange}></input>
            </div>
            <input type="submit" value="Add New Book"></input>
        </form>
    </div>
  )
}

export default AddBooks