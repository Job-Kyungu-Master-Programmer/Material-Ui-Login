import Alert from '@mui/material/Alert';


const Home = ( { message }) => {
  return (
    <div>
      <div> 
        {(message &&
          <Alert severity="success">
            {message}
          </Alert>
        )}
      </div>
      <h1>Home</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas incidunt praesentium tempora voluptatem dolor molestiae exercitationem libero ullam. Saepe 
        excepturi at rerum illum nulla. Non quidem libero inventore repellat doloremque!</p>
    </div>
  )
}

export default Home