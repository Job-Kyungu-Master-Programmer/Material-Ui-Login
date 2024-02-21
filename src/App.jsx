import { Routes, Route, useMatch, Navigate } from 'react-router-dom'
import { Container } from '@mui/material'
import Home from './components/Home'
import Login from './components/Login'
import Note from './components/Note'
import Notes from './components/Notes'
import Users from './components/Users'
import { useState } from 'react'
import Header from './components/Header'


const App = () => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      content: 'HTML is easy',
      important: true,
      user: 'Matti Luukkainen'
    },
    {
      id: 2,
      content: 'Browser can execute only JavaScript',
      important: false,
      user: 'Matti Luukkainen'
    },
    {
      id: 3,
      content: 'Most important methods of HTTP-protocol are GET and POST',
      important: true,
      user: 'Arto Hellas'
    }
  ])

  const [user, setUser] = useState(null)
  const [message, setMessage] = useState(null)
  const match = useMatch('/notes/:id')

  const note = match ? notes.find(n => n.id === Number(match.params.id)) : null

  const login = (user) => {
      setUser(user)
      setMessage(`welcome ${user}`)
      setTimeout(() => {
        setMessage(null)
      }, 10000)
  }

  return (
    <Container>
         <Header user={user} />
         <Routes>
              <Route path='/notes/:id' element={<Note note={note} /> } />
              <Route path='/notes' element={<Notes notes={notes} />} />
              <Route path='/users' element={user ? <Users users={notes} /> : <Navigate replace to='/login' />} />
              <Route path='/login' element={<Login onLogin={login} />} />
              <Route path='/' element={<Home message={message} />} />
         </Routes>
    </Container>
  )
}

export default App