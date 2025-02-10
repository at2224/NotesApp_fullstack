const submitButton = document.getElementById('submit-button');
const list = document.getElementById('list');
const note = document.getElementById('note');

// initialize buttons
submitButton.onclick = submiteNote;

function submiteNote() {
    const newNote = document.createElement('li');
    const newDelete = document.createElement('button');
    newNote.textContent = note.value;
    newDelete.textContent = "delete";
    console.log(newNote);
    list.appendChild(newNote);
    list.appendChild(newDelete);
}