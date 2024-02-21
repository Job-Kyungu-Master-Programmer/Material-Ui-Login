import { AppBar, Button, Toolbar } from "@mui/material"
import { Link } from "react-router-dom"


const Header = ( { user } ) => {

  const fles = {
     display: 'flex',
     justifyContent: 'space-between',
     width: '50%'
  }

  return (
   <AppBar position="static">
      <Toolbar>
         <Button color="inherit" component={Link} to="/">
            home
         </Button>
         <Button color="inherit" component={Link} to="/notes">
            notes
         </Button>
         <Button color="inherit" component={Link} to="/users">
            users
         </Button>   
         {user
            ? <em>{user} logged in</em>
            : <Button color="inherit" component={Link} to="/login">
               login
            </Button>
         }                              
      </Toolbar>
</AppBar>
  )
}

export default Header