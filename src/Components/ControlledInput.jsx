import { useState, useRef } from 'react';
import '../styles/ControlledInput.css'

const ControlledInput = ({valueSubmitted}) => {
    const [value, setValue] = useState('');
    const inputRef = useRef();

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        valueSubmitted(inputRef.current.value);
        setValue('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="" placeholder='Location, please...' value={value} onChange={handleChange} ref={inputRef}/>
            <button type="submit">Search</button>
        </form>
    )
}

export default ControlledInput