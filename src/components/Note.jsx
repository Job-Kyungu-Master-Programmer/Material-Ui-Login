import React from 'react'

const Note = ( { note } ) => {
  return (
     <div className="note">
         <h3 className="note__title">{note.content}</h3>
         <strong>Author </strong> {note.user}

     </div>
  )
}

export default Note