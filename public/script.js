// getting elements from html
const submitButton = document.getElementById('submit-button');
const list = document.getElementById('list');
const note = document.getElementById('note');

// initialize buttons
submitButton.onclick = submiteNote;

// add event listener for delete button since I have multiple and they are added dynamically.
// queryselectorall returns a nodelist so cant do .onclick on the list. have to get each element from the list and onclick on each ind. button
// but queryselector and then a for each would only work on hardcoded delete buttons, not dynamically added ones
// document.addEventListener('click',) for dynamic buttons
document.addEventListener('click', (event)=> {
    if (event.target.classList.contains("delete-button")) {
        deleteNote(event); // parenthsis to call the function rather than pass a reference to it
    }
})

function submiteNote() {
    // when I click submit, uses what user types in input field to create a note with a delete button in the list container below
    const newNote = document.createElement('li');
    const newDelete = document.createElement('button');
    newDelete.classList.add('delete-button');
    newNote.textContent = note.value;
    newDelete.textContent = "delete";
    newNote.appendChild(newDelete);
    list.appendChild(newNote);
    //list.appendChild(newDelete);
}

function deleteNote(event) {
    // trick here is to append button as a child to li then use .closest to remove the li
    // doesnt delete anything if delete isnt appended to li tho for some reason 
    const liToDelete = event.target.closest("li");
    if (liToDelete) {
        list.removeChild(liToDelete);
    }
}