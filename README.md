# QuickNotes

QuickNotes is a simple note-taking web app that lets you quickly capture, categorize, and search short notes. Notes are saved in your browser so they persist across page refreshes, making it easy to jot things down and pick up where you left off.

## Features

- Add notes with a category (Personal, Work, Study)
- Delete individual notes
- Live search that filters notes as you type
- Input validation (empty notes and notes over 200 characters are rejected)
- Notes persist across page refreshes using localStorage
- Responsive layout that adapts to small screens
- Color-coded note cards by category

## How to run locally

1. Clone this repository: git clone https://github.com/cyn4sh/quicknotes-app.git

2. Open `index.html` in your browser, or use the "Live Server" extension in Antigravity (or VS Code) for live reloading.

## What I learned

- How to build and update a dynamic list using `createElement` and `textContent` instead of `innerHTML`, to avoid security risks with user input.
- How to persist application state across page reloads using `localStorage` with `JSON.stringify` and `JSON.parse`.
- How to structure form validation so errors are clear and reset correctly once the input becomes valid.
