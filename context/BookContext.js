import React, { creatContext, useState } from 'react'

export const BookContext = createContext()

const BookProvider = (props) => {
  const [book, setBook] = useState({ name: 'One book', isbn: '32453' })

  return <BookContext.Provider value={book}></BookContext.Provider>
}

export default BookProvider
