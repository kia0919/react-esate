import React, { useState } from "react";
import './style.css';

type AuthPage = 'sign-in' | 'sign-up'

interface Props {
    // onLinkClickHandler의 함수가 매개변수는 비어있어서 (), 반환값이 없으므로 void.
    onLinkClickHandler: () => void
}

// 1.
function SignIn( {onLinkClickHandler}: Props ) {

    const onSignInButtonClickHandler = () => {

    };

    return (
        <div className="authentication-contents">
            <div className="authentication-input-container"></div>
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

    return( 
    <div id="authentication-wrapper">
        <div className="authentication-image-box"></div>
        <div className="authentication-box">
            <div className="authentication-container">
                <div className="authentication-title h1">{'임대 주택 가격서비스'}</div>
                { AuthenticationContents }
                
            </div>
        </div>
    </div>
    );
}