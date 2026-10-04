const noteForm = document.querySelector("#note-form");
const noteInput = document.querySelector("#note-input");
const noteCategory = document.querySelector("#note-category");
const notesList = document.querySelector("#notes-list");
const noteCount = document.querySelector("#note-count");
const errorMessage = document.querySelector("#error-message");
const searchInput = document.querySelector("#search-input");

let notes = [];

function render() {
  notesList.textContent = "";

  const searchTerm = searchInput.value.trim().toLowerCase();
  const filteredNotes = notes.filter((note) =>
    note.text.toLowerCase().includes(searchTerm),
  );

  if (filteredNotes.length === 0 && searchTerm !== "") {
    const li = document.createElement("li");
    li.textContent = "No notes match your search.";
    notesList.appendChild(li);
  } else {
    filteredNotes.forEach((note) => {
      const li = document.createElement("li");
      li.className = `note-card category-${note.category}`;

      const textEl = document.createElement("p");
      textEl.textContent = note.text;

      const categoryEl = document.createElement("span");
      categoryEl.className = "note-category-label";
      categoryEl.textContent = note.category;

      const dateEl = document.createElement("p");
      dateEl.className = "note-date";
      dateEl.textContent = note.createdAt;

      const deleteBtn = document.createElement("button");
      deleteBtn.className = "delete-btn";
      deleteBtn.textContent = "Delete";
      deleteBtn.addEventListener("click", () => deleteNote(note.id));

      li.appendChild(categoryEl);
      li.appendChild(textEl);
      li.appendChild(dateEl);
      li.appendChild(deleteBtn);
      notesList.appendChild(li);
    });
  }

  updateCount();
}

function updateCount() {
  const total = notes.length;
  if (total === 0) {
    noteCount.textContent = "You have no notes yet.";
  } else if (total === 1) {
    noteCount.textContent = "You have 1 note.";
  } else {
    noteCount.textContent = `You have ${total} notes.`;
  }
}

function deleteNote(id) {
  notes = notes.filter((note) => note.id !== id);
  render();
}

noteForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const text = noteInput.value;
  const category = noteCategory.value;

  const note = {
    id: Date.now(),
    text: text.trim(),
    category: category,
    createdAt: new Date().toLocaleString(),
  };

  notes.push(note);
  render();
  noteInput.value = "";
});
