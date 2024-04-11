import React, { ChangeEvent, useState } from "react";
import './style.css';

import SignInBackground from "assets/image/sign-in-background.png";
import SignUpBackground from "assets/image/sign-up-background.png";
import InputBox from "components/Inputbox";

type AuthPage = 'sign-in' | 'sign-up'

interface Props {
    // onLinkClickHandler의 함수가 매개변수는 비어있어서 (), 반환값이 없으므로 void.
    onLinkClickHandler: () => void
}

// 1.
function SignIn( {onLinkClickHandler}: Props ) {

    const [id, setId] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const onIdChangeHandler = (event:ChangeEvent<HTMLInputElement> ) => {
        setId(event.target.value);
    };

    const onPasswordChangeHandler = (event:ChangeEvent<HTMLInputElement> ) => {
        setPassword(event.target.value);
    };

    const onSignInButtonClickHandler = () => {
        alert(`아이디: ${id} / 비밀번호: ${password}`);
        setId('');
        setPassword('');
        alert(`아이디: ${id} / 비밀번호: ${password}`);
    };

    return (
        <div className="authentication-contents">
            <div className="authentication-input-container">
                <InputBox label="아이디" type="text" placeholder="아이디를 입력해 주세요." onChangeHandler={onIdChangeHandler} value={id} />
                <InputBox label="비밀번호" type="password" placeholder="비밀번호를 입력해 주세요." onChangeHandler={onPasswordChangeHandler} value={password} />
            </div>
            <div className="authentication-button-container">
                <div className="primary-button full-width" onClick={onSignInButtonClickHandler}>로그인</div>
                <div className="text-link" onClick={onLinkClickHandler}>회원가입</div>
            </div>
            <div className="short-divider"></div>
            <div className="authentication-sns-container"></div>
        </div>
    );
}

// 2.
function SignUp ({onLinkClickHandler}: Props ) {
    
    const onSignUpButtonClickHandler = () => {

    }
    
    return (
        <div className="authentication-contents">
            <div className="authentication-sns-container"></div>
            <div className="short-divider"></div>
        <div className="authentication-input-container"></div>
        <div className="authentication-button-container">
            <div className="primary-button full-width" onClick={onLinkClickHandler}>회원가입</div>
            <div className="text-link" onClick={onLinkClickHandler}>로그인</div>
        </div>
    </div> 
    );
}

// 3.
export default function Authentication() {

    const [page, setPage] = useState<AuthPage>('sign-in');

    const onLinkClickHandler = () => {
        if (page === 'sign-in') setPage('sign-up');
        else setPage('sign-in');   
    };


    const AuthenticationContents = 
    page === 'sign-in' ?
    <SignIn onLinkClickHandler = {onLinkClickHandler} /> : 
    <SignUp onLinkClickHandler={onLinkClickHandler} />;

    const imageBoxStyle = { backgroundImage: `url(${ page ==='sign-in'? SignInBackground: SignInBackground})` }

    return( 
    <div id="authentication-wrapper">
        <div className="authentication-image-box" style={ { backgroundImage: `url(${ page ==='sign-in'? SignInBackground: SignInBackground})` } }></div>
        <div className="authentication-box">
            <div className="authentication-container">
                <div className="authentication-title h1">{'임대 주택 가격서비스'}</div>
                { AuthenticationContents }
                
            </div>
        </div>
    </div>
    );
}