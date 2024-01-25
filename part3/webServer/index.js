// Import Node's built-in web server module.
// Download PostMan, use it to test send http requests (instead of coding a button to make the delete request, for example)


// To Enable Nodemon running, do PowerShell -ExecutionPolicy Bypass
// To install Nodemon, npm install --save-dev nodemon (make sure it is saved under DevDependencies)
// Nodemon allows "Live Server" edits by restarting the server whenever a file change is made.

const express = require('express')
const app = express()


// JSON-parser. Deals with HTTP POST Requests. The actual new note that is attached to the request body will be further down in the app.
app.use(express.json())

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
  // At default location of localhost:3001, the following html is displayed.
  response.send('<h1>Hello World!</h1>')
})

// Manages all HTTP requests to the link there (of form /api/notes/SOMETHING where SOMETHING is a string)
app.get('/api/notes/:id', (request, response) => {
  // The returned object is a request object (only in express)
  console.log(request.params)
  // Making sure that the returned ID number is a number, and not a string, otherwise JavaScript triple comparison operator won't properly work
  // Pulling the id from the params key of the request object.
  const id = Number(request.params.id)
  // Find the appropriate note that is called in the URL address. Use the find array method, where the function passed as an argument must be true (note.id === id)
  // Make sure to make the ID as a number, not as a string, because ID is an integer in the notes object.
  const note = notes.find(note => {
    return note.id === id
  })
  console.log(note)
  // Deal with invalid note IDs and send the note as a JSON (JavaScript Object Notation) type of string. Since all JavaScript objects are truthy:
  if (note) {
    // Converts notes to JSON, and is sent to the body of the express response object.
    response.json(note)
  } else {
    // Use the status method for setting a status (404 is an error status; previously, even if invalid ID was called, an HTTP Status Code 200 was sent.)
    response.send('rip bozo') // Custom Error Message :)
    // Use the end method for responding (sending back) to the request without sending any data out of the server.
    response.status(404).end()
  }
})

const generateId = () => {
  // Find the maxId of all notes, in order to assign a new id to the new note. Not the recommended method, but we will use it for now.
  const maxId = notes.length > 0
    ? Math.max(...notes.map(n => n.id))
    : 0
    // The Math.max can't be passed as a parameter to arrays, so we use the spread syntax to make single numbers
  return maxId + 1
}

app.post('/api/notes', (request, response) => {
  // Access the data from the body property of the request object. Without the json-parser line above, the body property would be undefined
  const body = request.body

  if (!body.content) {
    return response.status(400).json({
      error: 'content missing'
    })
    // Return is called here, so that the rest of the code doesn't run. Otherwise, the malformed note would be saved to the server even if the error message is displayed.
  }

  const note = {
    content: body.content,
    important: body.important || false,
    // If the data saved in the body variable has the important property, then "important" here is evaluated to the content of the important variable. Otherwise, it is false
    id: generateId()
  }
  notes = notes.concat(note)

  response.json(note)
  // This is the JSON data of the request. The json-parser will then transform it into a JavaScript object and attach it to the body property of the request object, which is then sent to the address http://localhost:3001/api/notes
})

// Note deletion - Note that if the notes of the application are only saved to the memory, the list of notes will return to the original state after application restart. If you have Nodemon running, it is probably difficult to see a note deleted.
app.delete('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  notes = notes.filter(note => note.id !== id)
  // Because you are simply deleting from server and not sending it back, you can use the end method.
  // 204 Code is the "No Content" Code.
  response.status(204).end()
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
