import React from 'react';
import './SingleList.css';

const SingleList = ({sendData}) => {
    return(
        <li className="list" id={sendData.id}>
            <div className="content">{sendData.content}</div>
            <div className="date">{sendData.date}</div>
        </li>
    )
}

export default SingleList;