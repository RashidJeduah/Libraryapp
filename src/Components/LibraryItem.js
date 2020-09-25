import React from 'react';

function LibraryItem (title, author){
    return (
        <div>
            <h2> {title} </h2>
            <h3> {author} </h3>
        </div>
    )
}

export default LibraryItem