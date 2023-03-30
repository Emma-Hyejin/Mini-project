import React from 'react';
import '../App.css';
import './Journey.css';
import {Icon } from 'react-icons-kit';
import {plus} from 'react-icons-kit/metrize/plus';


const Journey = () => {
    return(
        <section className="journey__main">
            <div className="journey__container">
                <div className="journey__wrapper">
                    <div className="journey__Cities">
                        <h3>Japan</h3>
                        <div className="journey__City tokyo">
                            <div className="city_name ">Tokyo</div>
                        </div>
                        <div className="journey__City nagano">
                            <div className="city_name ">Nagano</div>
                        </div>
                    </div>
                    <div className="journey__Lists">
                        <span className="journey__Title">total 1 Day Journey <span className="icon" ><Icon size={24} Icon icon={plus}/></span> </span>
                        <div className="Lists__container">
                            <h2> Day 1 <span> in Tokyo</span></h2>
                            <div className="lists">
                                <div className="list">
                                    <div className="list__time">Morning</div>
                                    <div className="list__plan">신주쿠에서 밥 먹습니다.</div>
                                </div>
                                {/*Component */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Journey;