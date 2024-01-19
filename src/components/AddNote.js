import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";

const AddNote = () => {
  const context = useContext(noteContext);
  const { addNote } = context;
  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  const handle = async (e) => {
    e.preventDefault();

    try {
      // Call your addNote function here with the 'note' state
      await addNote(note.title, note.description, note.tag);
      // Optionally, provide user feedback (e.g., clear form fields or display a success message)
      setNote({ title: "", description: "", tag: "" });
      alert("Note added successfully!");
    } catch (error) {
      // Handle the error, and optionally provide feedback to the user
      console.error("Error adding note:", error.message);
      alert("Failed to add note. Please try again.");
    }
  };

  const onChange = (e) => {
    setNote({
      ...note,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          onChange={onChange}
          className="form-control"
          id="title"
          name="title"
          value={note.title}
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
          id="description"
          name="description"
          value={note.description}
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
          id="tag"
          name="tag"
          value={note.tag}
          minLength={5} required

        />
      </div>
      <button disabled={note.title.length<5 || note.description.length<5} type="button"  onClick={handle} className="btn btn-primary">
        Add Note
      </button>
    </form>
  );
};

export default AddNote;
