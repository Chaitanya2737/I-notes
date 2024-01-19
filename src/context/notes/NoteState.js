import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host= "http://localhost:5000"
  const notes = [];
  const [note, setNote] = useState(notes);

  
  const getNote =async () => {
    const response = await fetch(`${host}/api/note/fetchallnotes`, {
      method: "GET", 
      mode: "cors", 
      cache: "no-cache", 
      credentials: "same-origin", 
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token')
      },
    });
    const json= await response.json()
    // console.log(json)
    setNote(json)

  };


  const addNote =async (title , description , tag) => {
    const response = await fetch(`${host}/api/note/addnote`, {
      method: "POST", 
      mode: "cors", 
      cache: "no-cache", 
      credentials: "same-origin", 
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token')
      },
   
      body: JSON.stringify({title , description , tag}),
    });
    ;
    const note = await response.json();

    // Use the spread operator to create a new array with the added note
    setNote(notes.concat(note));
  };

  const deleteNote = async (id) => {

    const response = await fetch(`${host}/api/note/deletenote/${id}`, {
      method: "DELETE", 
      mode: "cors", 
      cache: "no-cache", 
      credentials: "same-origin", 
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token')
      },
    });
    const json= await response.json();
    console.log(json)


  const newNote = note.filter((note)=>{return note._id!==id})
  setNote(newNote)
  };

  const editNote = async(id , title ,  description , tag) => {
    const response = await fetch(`${host}/api/note/updatenote/${id}`, {
      method: "put", 
      mode: "cors", 
      cache: "no-cache", 
      credentials: "same-origin", 
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token')
      },
   
      body: JSON.stringify({title , description , tag}),
    });
    const json= await response.json();
    console.log(json)

    let newNotes= JSON.parse(JSON.stringify(note))
    // Implement the editNote logic
    for (let index = 0; index < newNotes.length; index++) {
      const element = note[index];
      if (element._id===id) {
        newNotes[index].title=title
        newNotes[index].description=description
        newNotes[index].tag=tag
        break;
      }
      
    }
    setNote(newNotes)
  };

  return (
    <NoteContext.Provider
      value={{ note, setNote, addNote, deleteNote, editNote , getNote}}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
