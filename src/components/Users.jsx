import React from 'react'

const Users = ( { users } ) => {
  return (
    <div className="notes">
        <h1 className="notes__title">Users</h1>
        <ul className="note__list">
           {users.map(note => 
              <li key={note.id}>
                {note.user}
              </li>
            )}
        </ul>
    </div>
  )
}

export default Users