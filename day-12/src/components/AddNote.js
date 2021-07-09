import { useState } from "react";
const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const characterLimit = 200;
  const handleChage = (event) => {
    if (characterLimit - event.target.value.length >= 0)
      setNoteText(event.target.value);
  };

  const handleSaveClick = (event) => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    }
  };
  return (
    <div>
      <div className="note new">
        <textarea
          placeholder="Type to add a note..."
          cols="10"
          rows="8"
          value={noteText}
          onChange={handleChage}
        ></textarea>

        <div className="note-footer">
          <small>{characterLimit - noteText.length} Remaining</small>
          <button className="save" onClick={handleSaveClick}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNote;
