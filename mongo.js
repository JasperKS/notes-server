const mongoose = require('mongoose')

if (process.argv.length<3) {
    console.log('give password as argument')
    process.exit(1)
}

const url = process.env.MONGODB_URI;
console.log(url)

mongoose.set('strictQuery', false)

// mongoose.connect(url)

const noteSchema = new mongoose.Schema({
    content: String,
    important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

// const note = new Note({
//     content: 'HTML is easy',
//     important: true,
// })

// note.save().then(result => {
//     console.log('note saved!')
//     console.log('results: ', result)
//     mongoose.connection.close()
// })


app.get('/api/notes', (request, response) => {
    Note.find({}).then(notes => {
        response.json(notes)
    })
})

Note.find({}).then(result => {
    result.forEach(note => {
        console.log(note)
    })
    mongoose.connection.close()
})