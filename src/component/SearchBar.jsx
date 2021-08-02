import { Button, TextField } from '@material-ui/core'
import React, { useState } from 'react'

function SearchBar(props) {
    const { onSearch } = props;
    const [text, setText] = useState('');

    const onTextUpdate = (e) => {
        const data = e.target.value;
        setText(data);
    }

    const handleClick = () => {
        onSearch(text);
    }

    return (
        <div>
            <TextField id="outlined-basic" label="Type to search Images" variant="outlined" onChange={onTextUpdate}/>
            <Button variant="contained" onClick={handleClick}>Search</Button>
            <p>Recent Search</p>
            {localStorage.getItem("suggest") && JSON.parse(localStorage.getItem("suggest")).map((data,index)=> <><button>{data}</button></>)}
            
        </div>
    )
}

export default SearchBar
