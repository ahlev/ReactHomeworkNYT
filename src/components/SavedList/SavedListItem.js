import React from 'react';


export const SavedListItem = props => (
    <li className="list-group-item card">
        <div className ="row">
            <h4>{props.title}</h4> <br />
            <h7>{props.snippet}</h7>
            <a href={props.href}>{props.href}</a>
            {/* <br /> */}
            {/* <button onClick={props.save}>Save</button> add function onClick to add this.stuff to an array as an object, then setState update that array */}
        </div>
    </li>
)

