import React from 'react';
import './Contents.css';
import SingleList from './SingleList';




const Contents = ({data}) => {
    return(
        <div className="lists_container">
            <ul className="lists">
                {data.map((e)=>{
                    return(
                        <SingleList sendData = {e}/>
                    )
                })}
            </ul>
        </div>
    )
}

export default Contents;