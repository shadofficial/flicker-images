import { Button, TextField } from '@material-ui/core'
import React, { useState } from 'react'

function SearchBar(props) {
    const { onSearch } = props;
    const [text, setText] = useState('');

    const onTextUpdate = (e) => {
        const data = e.target.value;
        setText(data);
        localStorage.setItem("suggest",data);
    }

    const handleClick = () => {
        onSearch(text);
    }

    return (
        <div>
            <TextField id="outlined-basic" label="Type to search Images" variant="outlined" onChange={onTextUpdate}/>
            <Button variant="contained" onClick={handleClick}>Search</Button>
            <p> Recent search</p><button>{localStorage.getItem("suggest")}</button>
        </div>
    )
}

export default SearchBar
