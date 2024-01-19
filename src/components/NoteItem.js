import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext'

const NoteItem = (props) => {
    const {note , updateNote}= props
    const context= useContext(noteContext)
    const { deleteNote } = context;

  return (
      <div className='col-sm-4 col-md-4 my-3'>
      <div className="card ">
        <div className="card-body "  key={note._id}>
            <h4 className="card-title">{note.title}</h4>
            <p className="card-text">  {note.description}</p>
            <i className="fa-solid fa-trash mx-2 " onClick={()=>{
              deleteNote(note._id)
            }}></i>
            <i className="fa-solid fa-pen-to-square mx-4" onClick={() => { updateNote(note) }}></i>
        </div>
      </div>
      </div>
      

  )
}

export default NoteItem
