import React, {useState, useEffect} from 'react';
// import axios from 'axios';
import './Weather.css';

// 밖에서 전역 선언: 추후 사용을 위해 앞 부분 과 key 미리 선언
const api = {
    key: "4981efb6e5d5b6673d48207e0bce6dd9",
    base: "https://api.openweathermap.org/data/2.5/" ,
}


const Weather = () => {
    //날짜 불러오기
    const dateBuilder = (d) =>{
        let months = [
            "1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월",
        ];
        //일요일 먼저 시작. 
        let days = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"]

        let day = days[d.getDay()];
        let month = months[d.getMonth()];
        let year = d.getFullYear();
        let date = d.getDate();
        return `${year}년 ${month} ${date}일 ${day}`;
    }


    //selction으로 추가 코드 04/13
    // let cities = [ 'Seoul', 'Busan' , 'Tokyo', 'Kyoto', 'Nagoya'];
    const [ci, setCi] = useState([ 'Seoul'])

    const changeCity = (e) =>{
        // let cities = ['Busan' , 'Tokyo', 'Kyoto', 'Nagoya']
        setCi(e.target.value)
    }
    
    //..

    //날씨 API 불러오기 axios 
    // let city = "Seoul"; 
    // const [city, setCity] = useState("Seoul");
    const url = `${api.base}weather?q=${ci}&appid=${api.key}`;
    const [weather, setWeather] = useState([]);

    // [1] axios 사용법 
    //axios.get(url).then((res) =>{
    //     const data = res.data;
    //     setWeather({
    //         id: data.weather[0].id, // icon 생성할 때 -img
    //         temperature:data.main.temp, //화씨 온도
    //         main: data.weather[0].main,// 날씨 표현 Clear
    //         loading:false,
    //     });
    //     // console.log(data);
    // });

    //[2] fetch 사용법
    useEffect(()=>{
        fetch ( url )
            .then(res =>{
            return res.json();
            })
            .then(data => {
                // console.log(data);
                setWeather({
                    icon: data.weather[0].icon,
                    temperature:data.main.temp, //화씨 온도
                    main: data.weather[0].main,// 날씨 표현 Clear
                    loading:false,
                })
        })
    }, [] ); //단 한번 실행하기


    const iconURL = `https://openweathermap.org/img/wn/${weather.icon}@2x.png`;  
    let cities = ['Seoul','Busan' , 'Tokyo', 'Kyoto', 'Nagoya']



    return(
        <div className="wth__container">
            
            <div className="wth__wrapper">
            <h2> 오늘 떠나고 싶은 {ci}</h2>
                <div className="wth__show">
                    <p>{dateBuilder(new Date())}</p>
                    <img className="icon" src={iconURL} alt="new"/>
                    <div className="wth__txt">{(weather.temperature-273.15).toFixed(2)}℃</div>
                    <div className="wth__txt">{weather.main}</div>
                    <select  className="wth__input" onChange={changeCity}>
                        {cities.map((e)=> {
                            // city=e;
                            return(
                                <option value={e} >{e}</option>
                            )
                        })}
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Weather;