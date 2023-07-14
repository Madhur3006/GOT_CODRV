import React, { useState } from 'react';
import { useAsyncDebounce } from 'react-table';

export const GlobalFilter = ({filter, setFilter}) => {
    const [value, setValue] = useState(filter)

    const onChange = useAsyncDebounce((value) => {
        setFilter(value || undefined)
    }, 1000)

    return ( 
        <div style = {{color: 'black', fontSize: '20px', textAlign: 'center', marginTop: '20px'}}>
            Search: {" "}
            <input style = {{border: '2px solid black', borderRadius: '10%'}}value = {value || ''} onChange = {(e) => {
                setValue(e.target.value)
                onChange(e.target.value)
            }} />
        </div>
     );
}