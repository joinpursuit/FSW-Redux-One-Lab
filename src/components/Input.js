import React from 'react';


const Input = ({value, onChange}) => {
    return (
        <form>
            <input value={value} placeholder='fruit' type='text' onChange={(e) => (e.target.value)}></input>
        </form>
    )
}

export default Input;