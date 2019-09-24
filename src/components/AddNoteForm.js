import React, { useState } from 'react'

const AddNoteForm = ({ dispatch }) => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const addNote = (event) => {
        event.preventDefault()
        dispatch({ type: 'ADD_NOTE', title, body })
        setTitle('') // Clear the input value
        setBody('') // Clear the textarea value
    }

    return (
        <div>
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

export { AddNoteForm as default }
