// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
    const inputRef = React.useRef(null)
    const [username, setUsername] = React.useState('')
    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmitUsername(username)
    }
    const handleOnChange = event => {
        const {value} = event.target
        setUsername(value.toLowerCase())
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor={"username"}>Username:</label>
                <input value={username} id={"username"} ref={inputRef} type="text" onChange={handleOnChange}/>
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

function App() {
    const onSubmitUsername = username => alert(`You entered: ${username}`)
    return <UsernameForm onSubmitUsername={onSubmitUsername}/>
}

export default App
