import React from 'react';
import './Aboutus.css';
import '../App.css';
import {Link} from 'react-router-dom';


const Aboutus = () => {
    return(
        <div className="about__container">
            <div className=" inner wrapper">
                <div className="about__ Title">
                    We're your AI guide<br/>Just Click and start your Journey
                </div>
                <p className="ab title__explain">You want to go Japan? but you can't read or speak Japanese Language.<br/>
                chatGPT's brother will serve your plan.</p>
                <Link to="/journey"><button className="about__btn">Let's Start</button></Link>
                <div className="about__count">
                    <div className="count_box">
                        <span className="count">2000 +</span>
                        <span className="count_ex">Suceess Journey</span>
                    </div>
                    <div className="count_box">
                        <span className="count">1</span>
                        <span className="count_ex">Country</span>
                    </div>
                    <div className="count_box">
                        <span className="count">100,000 +</span>
                        <span className="count_ex">Happy Customer</span>
                    </div>
                </div>
            </div>
            <div className="inner">
                <h1> section 01 </h1>
            </div>
            <div className="inner"><h1> section 02 </h1></div>
            <div className="inner"><h1> section 03 </h1></div>
        </div>
    )
}

export default Aboutus;