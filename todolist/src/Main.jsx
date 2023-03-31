import React from 'react';
import './Main.css';
import './App.css';
import './Component/Contents.css';
import Footer from './Footer';
import Sidebar from './Side/Sidebar';
import Contents from './Component/Contents';
import {useState} from 'react';

const Main = () => {
    const parseDate = new Date().toLocaleDateString('ko-kr');
    const [showPopup, setShowpopup] = useState(false);

    const togglePopup = () => {
        if( showPopup === false){
            setShowpopup(true);
        }else{
            setShowpopup(false);
        }
    }


    return (
        <div className="main__container">
            <div className="main__left">
                <div className="main__content">
                    <div className="content__title">
                        <h3>Today List</h3>
                        <div className="content__under">
                            <div className="under__date"> 2023 / 03 / 29</div>
                            <div className="under__btn">
                                <button className="open" onClick={togglePopup}>+ New Task</button>
                                {showPopup ? (
                                    <div className="popup">
                                        <div className="popup_inner">
                                            <h2>To Do List</h2>
                                            <div className="popup_inputs">
                                                <div className="input_date">{parseDate}</div>
                                                <input typs="text" className="text_list" placeholder='write what will you do'></input>
                                                <button className="add_list close" onClick={togglePopup}>Add List</button>
                                            </div>
                                        </div>
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    </div>
                    <div className="content__lists">
                        <Contents/>
                    </div>
                </div>
                <Footer/>
            </div>
            <div className="main__right">
                <Sidebar/>
            </div>
        </div>
    )
}

export default Main;