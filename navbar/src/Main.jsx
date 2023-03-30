import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

const Main = () => {
    return(
        <div className="main_container">
            <div className="main__introduce">
                <div className="main__ Title">Welcome,<br/>Let's start the Travel</div>
                <p className="title__explain">Aren't you tired to research every single information <br/>
                for yoiur travel? <br/>come and just select your journey</p>
                <Link to="/journey"><button className="title__btn">Start Journey</button></Link>
            </div>
        </div>
    )
}

export default Main;