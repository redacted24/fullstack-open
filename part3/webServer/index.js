// Import Node's built-in web server module.


// To Enable Nodemon running, do PowerShell -ExecutionPolicy Bypass
// To install Nodemon, npm install --save-dev nodemon (make sure it is saved under DevDependencies)
// Nodemon allows "Live Server" edits by restarting the server whenever a file change is made.

const express = require('express')
const app = express()

// Notes Content
let notes = [
  {
    id: 1,
    content: "HTML is easy",
    important: true
  },
  {
    id: 2,
    content: "Browser can execute only JavaScript",
    important: false
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true
  }
]

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/api/notes/:id', (request, response) => {
  const id = request.params.id
  console.log(id)
  const note = notes.find(note => note.id === id)
  console.log(note)
  response.json(note)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
