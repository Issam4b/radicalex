import styled from 'styled-components';

export const LoginForm = styled.form`

display: flex;
  align-items: center;
  flex-direction: column;
  margin-left: 50%;
  margin-top: 20%;
  background-size: 50% auto;
  @media (max-width: 600px) {
    margin-left: 0;
    margin-top: 0;
  }

`;

export const PurpleGrid = styled.div`
::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background-color: purple;
  z-index: -1;
}



  
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

`;

export const Logos = styled.img`
  width: 25em;
  height: 5em;
  margin-bottom: 7em;


`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1em;
  width : 100%;

  
`;

export const LoginInput = styled.input`
  padding: 0.5em;
  font-size: 2em;
  border-radius: 0.5em;
  border: none;
  flex-grow: 1;
  margin-left: 0.2em;

 
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-left: 10px;


`;

export const SubmitButton = styled.button`
  background-color: purple;
  color: white;
  padding: 0.5em 10em;
  border-radius: 0.75em;

  font-size: 2em;
  margin-top: 20px;
  &:hover {
    background-color: blue;
  }

 
`;