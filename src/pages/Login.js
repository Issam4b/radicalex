

// for the js
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebApp'
import { useNavigate } from 'react-router-dom';

// for the html
import { LoginForm, PurpleGrid, LoginContainer, Logos, IconContainer, Icon, LoginInput,SubmitButton } from "./LoginPage"
import Logo from '../assets/RadicallX-Black-Logo 1.svg';
import Email from '../assets/email.png';
import Lock from '../assets/lock.png';
import Eye from '../assets/eye.png';



const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setshowPassword] = useState(false);
  const [error, setError] = useState('');
     //react router dom
  const navigate = useNavigate();

  const handleSubmit = async(event) => {
    setError('Something went wrong, Try again...')
    event.preventDefault();
    console.debug("Ten Hours Later ...")
    try{
       const res = await signInWithEmailAndPassword(auth, email, password);
       console.debug(res);
        // Redirect the user to a protected page
       navigate('/dashboard')
      
    }
      catch(error) {
        console.debug(error.message)
        setError(error.message);
      };
  };

  return (
    <LoginForm>
        <PurpleGrid/>
        <LoginContainer>
          
            <Logos src={Logo} alt="Logo"/>
            <h2 style={{fontSize: "2em", paddingRight:"20em", paddingBottom:"1em"}}>Login</h2>
            <div>
                <IconContainer>
                    <Icon src={Email} alt="Email Icon" />
                    <LoginInput type= "text"  name= "Email" placeholder='Email' onChange= {(event) => {setEmail(event.target.value) }} required />
                </IconContainer>
                <IconContainer>
                    <Icon src={Lock} alt="Lock Icon" />
                    <LoginInput type={showPassword ? "text" : "password"} name= "Password" placeholder='Password' onChange= {(event) => {setPassword(event.target.value) }} required />
                    <Icon src={Eye} alt="Eye Icon" onClick={() => setshowPassword(!showPassword)} />
                </IconContainer>
                <SubmitButton onClick={handleSubmit} type="submit">Login</SubmitButton>
                {error && <p style={{maxWidth: '300px'}}> Error: {error} </p>}
            </div>
          
        </LoginContainer>
        
    </LoginForm>
  );
}

export default Login;
