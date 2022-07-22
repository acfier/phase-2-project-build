import React from 'react'; 
import BookCard from './BookCard'; 

const ListBooks = ({books}) => {

    const bookCards = books.map((book) => 
        <BookCard 
            key={book.id} 
            book={book} />
        )

  return (
    <div>
        <h1>This page renders the Books</h1>
        {bookCards}
        
    </div>
  )
}

export default ListBooks