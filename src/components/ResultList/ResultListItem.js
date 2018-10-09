import React from 'react';
import './resultlistitem.css';

export const ResultListItem = props => (
    <li className="list-group-item card">
        <div className ="row">
            <h4>{props.title}</h4>
            <a href={props.href}>{props.href}</a>
            <br />
            <button onClick={props.save}>Save</button> {/* add function onClick to add this.stuff to an array as an object, then setState update that array */}
        </div>
    </li>
)

