import { Link } from "react-router-dom"
import { TableCell, TableContainer, Table, TableRow, TableBody,Paper } from "@mui/material"

const Notes = ( { notes } ) => {
  return (
    <div>
        <h2>Notes</h2>

        <TableContainer component={Paper}>
          <Table>
            <TableBody>
              {notes.map(note => (
                <TableRow key={note.id}>
                  <TableCell>
                    <Link to={`/notes/${note.id}`}>{note.content}</Link>
                  </TableCell>
                  <TableCell>
                    {note.user}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
  )
}

export default Notes