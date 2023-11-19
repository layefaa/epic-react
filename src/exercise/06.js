// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
    const inputRef = React.useRef(null)
    const [error, setError] = React.useState(null)
    const handleSubmit = (event) => {
        event.preventDefault();
        const username = inputRef.current.value;
        onSubmitUsername(username)
    }
    const handleOnChange = event => {
        const {value} = event.target
        const isLowerCase = value === value.toLowerCase()
        setError(isLowerCase ? null : "Must be lowercase")
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor={"username"}>Username:</label>
                <input id={"username"} ref={inputRef} type="text" onChange={handleOnChange}/>
            </div>
            <button disabled={Boolean(error)} type="submit">Submit</button>
        </form>
    )
}

function App() {
    const onSubmitUsername = username => alert(`You entered: ${username}`)
    return <UsernameForm onSubmitUsername={onSubmitUsername}/>
}

export default App
