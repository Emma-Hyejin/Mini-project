import styled from 'styled-components';
import {useState, useContext} from 'react';
import './LoginPage.css';
import { Firebasecontext } from '../context/FirebaseContext';

const Button = styled.button`
    width: ${ (props) => (props.sso ? "70px" : "200px")};
    border-radius: ${(props) => (props.sso ? "20px" : "")};
    height: 40px;
    background-color: black;
    color: #ffff;
    font-size: ${(props) => (props.sso ? "0.8rem" : "")};
    text-align:center;
    margin: 5px;
    border:none;
    
   &:hover{
    background-color:#5dc75a;
   }
`;

const LoginPage = () => {

    const [isLoginInfo, setIsLoginInfo] = useState({
        id: "",
        pw: "",
    });

    const {firebase} = useContext(Firebasecontext);

    const writeId = (e) => {
        setIsLoginInfo({
            ...isLoginInfo,
            id:e.target.value,
        })
    }

    const writePw = (e) => {
        setIsLoginInfo({
            ...isLoginInfo,
            pw: e.target.value,
        })
    }


    return (
        <div className="loginPage"> 
            <div className="login-container">
                <h2>Login</h2>
                <form className="login-input"
                    onSubmit={() => alert(isLoginInfo)}
                    >
                    <input type="text" 
                        placeholder= "Write your ID"
                        value={isLoginInfo.id}
                        onChange={writeId}>s
                    </input>
                    <input type="password" 
                        placeholder="write your Pw"
                        value={isLoginInfo.pw}
                        onChange={writePw}>
                    </input>
                </form>
                <Button type="submit">Login</Button>
                <div className="login-sso">
                    <Button sso>Spotify</Button>
                    <Button sso>kakao</Button>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;