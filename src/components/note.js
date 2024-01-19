import React, { useContext,useState, useEffect, useRef ,  } from "react";
import noteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";
import { useHistory } from 'react-router-dom';

const Note = () => {
  let history = useHistory();
  const context = useContext(noteContext);
  const { note, getNote , editNote } = context; 
  // Destructuring values from context
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      history.push("/login");  // Redirect to login if no token is present
    } else {
      getNote();  // Fetch notes if the user is logged in
    }
  }, []);
  
  const ref = useRef(null);
  const refClose = useRef(null);


  const [notes, setNote] = useState({id:'', etitle: "", edescription: "", etag: "" });


  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({id:currentNote._id,etitle : currentNote.title,edescription:currentNote.description, etag:currentNote.tag })
  };
  
  const handle = async (e) => {
    
    console.log("updated", notes)
    editNote(notes.id, notes.etitle , notes.edescription, notes.etag )
    refClose.current.click();
  };


  const onChange = (e) => {
    setNote({
      ...notes,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <AddNote />
      <button
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        ref={ref}
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    onChange={onChange}
                    className="form-control"
                    id="etitle"
                    name="etitle"
                    value={notes.etitle}
                    minLength={5} required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    onChange={onChange}
                    className="form-control"
                    id="edescription"
                    name="edescription"
                    value={notes.edescription}
                    minLength={5} required

                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">
                    Tag
                  </label>
                  <input
                    type="text"
                    onChange={onChange}
                    className="form-control"
                    id="etag"
                    name="etag"
                    value={notes.etag}
                    minLength={5} required

                  
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                ref={refClose}
              >
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={handle}>
                Update Changes
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row ">
          <h3>Your Notes</h3>
          {note.length===0 && 'No note to display'}
          {note.map((note) => {
            return (
              <NoteItem key={note._id} updateNote={updateNote} note={note} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Note;
