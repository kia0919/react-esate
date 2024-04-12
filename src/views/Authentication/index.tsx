
import React, { ChangeEvent, useState } from "react";
import "./style.css";

import SignInBackground from 'assets/image/sign-in-background.png';
import SignUpBackground from 'assets/image/sign-up-background.png';
import InputBox from "components/Inputbox";

//                    type                    //
// 페이지 타입을 로그인, 회원가입을 두 페이지를 나타냄.
type AuthPage = 'sign-in' | 'sign-up';

//                    interface                    //
// SnsContainerProps인터페이스에 전달되는 속성이 title: string
interface SnsContainerProps {
    title: string;
}

//                    component                    //
// SnsContainer함수에 title속성을 받아오고, 위에서 정의한 SnsContainerProps을 가져옴
function SnsContainer({ title }: SnsContainerProps) {

    //                    event handler                    //
    // onSnsButtonClickHandler함수 정의에서 type매개변수를 받고, kakao, naver 두가지 문자열 값 중 하나를 가져야하고,
    // 클릭시 선택한 버튼 타입이 무엇인지 alert로 알려준다.
    const onSnsButtonClickHandler = (type: 'kakao' | 'naver') => {
        alert(type);
    };

    //                    render                    //
    // SnsContainer컴포넌트가 화면에 어케표시되는지 정의(렌더링), 
    return (
    // return반환으로, authentication-sns-container 클래스를 가진 컨테이너
        <div className="authentication-sns-container">
            {/* sns-container-title label 클래스에서 {title} 인터페이스 props에서 전달된 문자열 */}
            <div className="sns-container-title label">{title}</div>
            {/* 소셜 버튼 컨테이너 */}
            <div className="sns-button-container">
                {/* kakao 버튼을 클릭하면, onSnsButtonClickHandler함수를 호출하여 'kakao'가 전달됨  */}
                <div className="sns-button kakao-button" onClick={() => onSnsButtonClickHandler('kakao')}></div>
                {/* naver 버튼을 클릭하면, onSnsButtonClickHandler함수를 호출하여 'naver'가 전달됨 */}
                <div className="sns-button naver-button" onClick={() => onSnsButtonClickHandler('naver')}></div>
            </div>
        </div>
    );
}

//                    interface                    //
// Props에 전달되는 속성을 onLinkClickHandler함수로 받고,
// 매개변수를 받지 않음, 반환을 비어있는 void로 반환
interface Props {
    onLinkClickHandler: () => void
}

//                    component                    //
// 부모 컴포넌트로부터 Props의 onLinkClickHandler함수를 받아온다.
function SignIn({ onLinkClickHandler }: Props) {

    //                    state                    //
    // 상태함수(id), 상태변경함수(setId)를 useState사용하여 타입과, 초기값을 설정
    const [id, setId] = useState<string>('');
    // 상태함수(password), 상태변경함수(setPassword)를 useState사용하여 타입과, 초기값을 설정
    const [password, setPassword] = useState<string>('');

    //                    event handler                    //
    // onIdChangeHandler함수: Id입력란을 변경 처리하고 입력란에 입력된 값을 id상태에 설정
    const onIdChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        // id입력값이 변경할 때마다 해당 값을 상태로 리렌더링 한다.
        setId(event.target.value);
    };

    // onPasswordChangeHandler함수: 비밀번호 입력란을 변경 처리, 비밀번호 입력란에 입력된 값을 비밀번호 상태에 설정
    const onPasswordChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        // setPassword는 상태변경함수 이므로, 비밀번호 입력란이 변경될 때마다 해당 값을 상태로 리렌더링 한다.
        setPassword(event.target.value);
    };

    // onSignInButtonClickHandler함수: 로그인 버튼이 클릭 되었을 때 호출하는 함수
    const onSignInButtonClickHandler = () => {
        // alert로 입력된 id, password를 알림창으로 표시해줌
        alert(`아이디 : ${id} / 비밀번호 : ${password}`);
        // Id, Password 입력 후 로그인 버튼 클릭 시 빈문자열로 초기화 됨
        setId('');
        setPassword('');
    };

    //                    render                    //
    return (
        <div className="authentication-contents">
            <div className="authentication-input-container">
                <InputBox label="아이디" type="text" value={id} placeholder="아이디를 입력해주세요" onChangeHandler={onIdChangeHandler} />
                <InputBox label="비밀번호" type="password" value={password} placeholder="비밀번호를 입력해주세요" onChangeHandler={onPasswordChangeHandler} />
            </div>
            <div className="authentication-button-container">
                <div className="primary-button full-width" onClick={onSignInButtonClickHandler}>로그인</div>
                <div className="text-link" onClick={onLinkClickHandler}>회원가입</div>
            </div>
            <div className="short-divider"></div>
            <SnsContainer title="SNS 로그인" />
        </div>
    );
}

//                    component                    //
function SignUp({ onLinkClickHandler }: Props) {

    //                    state                    //
    const [id, setId] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordCheck, setPasswordCheck] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [authNumber, setAuthNumber] = useState<string>('');

    const [idButtonStatus, setIdButtonStatus] = useState<boolean>(false);
    const [emailButtonStatus, setEmailButtonStatus] = useState<boolean>(false);
    const [authNumberButtonStatus, setAuthNumberButtonStatus] = useState<boolean>(false);

    const [isIdCheck, setIdCheck] = useState<boolean>(false);
    const [isEmailCheck, setEmailCheck] = useState<boolean>(false);
    const [isAuthNumberCheck, setAuthNumberCheck] = useState<boolean>(false);

    const [idMessage, setIdMessage] = useState<string>('');
    const [passwordMessage, setPasswordMessage] = useState<string>('');
    const [passwordCheckMessage, setPasswordCheckMessage] = useState<string>('');
    const [emailMessage, setEmailMessage] = useState<string>('');
    const [authNumberMessage, setAuthNumberMessage] = useState<string>('');

    const [isIdError, setIdError] = useState<boolean>(false);
    const [isEmailError, setEmailError] = useState<boolean>(false);
    const [isAuthNumberError, setAuthNumberError] = useState<boolean>(false);

    const isSignUpActive = isIdCheck && isEmailCheck && isAuthNumberCheck && password && passwordCheck;
    const signUpButtonClass = `${isSignUpActive ? 'primary' : 'disable'}-button full-width`;

    //                    event handler                    //
    const onIdChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setId(value);
        setIdButtonStatus(value !== '');
        setIdCheck(false);
        setIdMessage('');
    };

    const onPasswordChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setPassword(value);

        const passwordPattern = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,13}$/;
        const isPasswordPattern = passwordPattern.test(value);
        const passwordMessage = 
            isPasswordPattern ? '' : 
            value ? '영문, 숫자를 혼용하여 8 ~ 13자 입력해주세요.' : '';
        setPasswordMessage(passwordMessage);
        
        const isEqualPassword = passwordCheck === value;
        const passwordCheckMessage = 
            isEqualPassword ? '' : 
            passwordCheck ? '비밀번호가 일치하지 않습니다.' : '';
        setPasswordCheckMessage(passwordCheckMessage);
    };

    const onPasswordCheckChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setPasswordCheck(value);
        const isEqualPassword = password === value;
        const passwordCheckMessage = 
            isEqualPassword ? '' : 
            value ? '비밀번호가 일치하지 않습니다.' : '';
        setPasswordCheckMessage(passwordCheckMessage);
    };

    const onEmailChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setEmail(value);
        setEmailButtonStatus(value !== '');
        setEmailCheck(false);
        setAuthNumberCheck(false);
        setEmailMessage('');
    };

    const onAuthNumberChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setAuthNumber(value);
        setAuthNumberButtonStatus(value !== '');
        setAuthNumberCheck(false);
        setAuthNumberMessage('');
    };

    const onIdButtonClickHandler = () => {
        if(!idButtonStatus) return;

        const idCheck = id !== 'admin';
        setIdCheck(idCheck);
        setIdError(!idCheck);

        const idMessage = idCheck ? '사용 가능한 아이디입니다.' : '이미 사용중인 아이디입니다.';
        setIdMessage(idMessage);
    };

    const onEmailButtonClickHandler = () => {
        if(!emailButtonStatus) return;

        const emailPattern = /^[a-zA-Z0-9]*@([-.]?[a-zA-Z0-9])*\.[a-zA-Z]{2,4}$/;
        const isEmailPattern = emailPattern.test(email);
        setEmailCheck(isEmailPattern);
        setEmailError(!isEmailPattern);

        const emailMessage = isEmailPattern ? '인증번호가 전송되었습니다.' : '이메일 형식이 아닙니다.';
        setEmailMessage(emailMessage);
    };

    const onAuthNumberButtonClickHandler = () => {
        if(!authNumberButtonStatus) return;

        const authNumberCheck = authNumber === '1234';
        setAuthNumberCheck(authNumberCheck);
        setAuthNumberError(!authNumberCheck);

        const authNumberMessage = authNumberCheck ? '인증번호가 확인되었습니다.' : '인증번호가 일치하지 않습니다.';
        setAuthNumberMessage(authNumberMessage);
    };

    const onSignUpButtonClickHandler = () => {
        if(!isSignUpActive) return;
        alert('회원가입');
    };

    //                    render                    //
    return (
        <div className="authentication-contents">
            <SnsContainer title="SNS 회원가입" />
            <div className="short-divider"></div>
            <div className="authentication-input-container">

                <InputBox label="아이디" type="text" value={id} placeholder="아이디를 입력해주세요" onChangeHandler={onIdChangeHandler} buttonTitle="중복 확인" buttonStatus={idButtonStatus} onButtonClickHandler={onIdButtonClickHandler} message={idMessage} error={isIdError} />

                <InputBox label="비밀번호" type="password" value={password} placeholder="비밀번호를 입력해주세요" onChangeHandler={onPasswordChangeHandler} message={passwordMessage} error />

                <InputBox label="비밀번호 확인" type="password" value={passwordCheck} placeholder="비밀번호를 입력해주세요" onChangeHandler={onPasswordCheckChangeHandler} message={passwordCheckMessage} error />

                <InputBox label="이메일" type="text" value={email} placeholder="이메일을 입력해주세요" onChangeHandler={onEmailChangeHandler} buttonTitle="이메일 인증" buttonStatus={emailButtonStatus} onButtonClickHandler={onEmailButtonClickHandler} message={emailMessage} error={isEmailError} />

                {isEmailCheck && 
                <InputBox label="인증번호" type="text" value={authNumber} placeholder="인증번호 4자리를 입력해주세요" onChangeHandler={onAuthNumberChangeHandler} buttonTitle="인증 확인" buttonStatus={authNumberButtonStatus} onButtonClickHandler={onAuthNumberButtonClickHandler} message={authNumberMessage} error={isAuthNumberError} />}

            </div>
            <div className="authentication-button-container">
                <div className={signUpButtonClass} onClick={onSignUpButtonClickHandler}>회원가입</div>
                <div className="text-link" onClick={onLinkClickHandler}>로그인</div>
            </div>  
        </div>
    );
}

//                    component                    //
export default function Authentication() {

    //                    state                    //
    const [page, setPage] = useState<AuthPage>('sign-in');

    //                    event handler                    //
    const onLinkClickHandler = () => {
        if (page === 'sign-in') setPage('sign-up');
        else setPage('sign-in');
    };

    //                    constant                    //
    const AuthenticationContents = 
        page === 'sign-in' ? 
            <SignIn onLinkClickHandler={onLinkClickHandler} /> : 
            <SignUp onLinkClickHandler={onLinkClickHandler} />;
    
    const imageBoxStyle = { backgroundImage: `url(${page === 'sign-in' ? SignInBackground : SignUpBackground})` };

    //                    render                    //
    return (
        <div id="authentication-wrapper">
            <div className="authentication-image-box" style={imageBoxStyle}></div>
            <div className="authentication-box">
                <div className="authentication-container">
                    <div className="authentication-title h1">
                        {"임대 주택 가격서비스"}
                    </div>
                    { AuthenticationContents }
                </div>
            </div>
        </div>
    );
}
