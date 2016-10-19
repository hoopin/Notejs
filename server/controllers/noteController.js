const noteController = {}

// Creates new note
noteController.POST = (req, res) => {
  console.log('POST /notes')
  res.status(200).json({
    message: '/notes POST'
  })
}

// gets specific note  --> return array of updates for the sidebar
// Each update will be stored with the note, and returned in one request
noteController.GET_NOTEID = (req, res) => {
  console.log('GET /notes/:noteId')
  res.status(200).json({
    message: '/notes/:noteId GET'
  })
}

// Save a note
noteController.POST_NOTEID = (req, res) => {
  console.log('POST /notes/:noteId')
  res.status(200).json({
    message: '/notes/:noteId POST'
  })
}

module.exports = noteController
