import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

const NoteApp = () => {
    const [notes, setNotes] = useState([])
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const addNote = (event) => {
        event.preventDefault()
        setNotes([
            ...notes,
            { title, body }
        ])
        setTitle('') // Clear the input value
        setBody('') // Clear the textarea value
    }

    const removeNote = (title) => {
        setNotes(notes.filter((note) => note.title !== title))
    }

    useEffect(() => {
        const notesData = JSON.parse(localStorage.getItem('notes'))
        if (notesData) {
            setNotes(notesData)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])

    return (
        <div>
            <h1>Notes</h1>
            {notes.map((note) => (
                <Note
                    key={note.title}
                    note={note}
                    removeNote={removeNote}
                />
            ))}
            <p>Add note</p>
            <form onSubmit={addNote}>
                <input
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
                <textarea
                    value={body}
                    onChange={(event) => setBody(event.target.value)}
                ></textarea>
                <button>add note</button>
            </form>
        </div>
    )
}

const Note = ({ note, removeNote }) => {
    useEffect(() => {
        console.log('Setting up effect!')

        // Specify how to clean up after this effect:
        return () => {
            console.log('Cleaning up effect!')
        }
    }, [])
    return (
        <div>
            <h3>{note.title}</h3>
            <p>{note.body}</p>
            <button onClick={() => removeNote(note.title)}>x</button>
        </div>
    )
}

ReactDOM.render(<NoteApp/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
