import React from 'react'

const ListBooks = ({books}) => {
  return (
    <div>
        <h1>This page renders the Books</h1>
        {books}
    </div>
  )
}

export default ListBooks