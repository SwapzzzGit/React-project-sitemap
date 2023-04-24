import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    html{
        @media (max-width: 1500px) {
            font-size: 85%;
        }
    }
    body{
        background: wheat;
        font-family: 'Inter', sans-serif;
        
  }
       
    
    button{
        font-family: 'Inter', sans-serif;
        font-weight: bold;
        font-size: 1.1rem;
        cursor: pointer;
        padding: 1rem 2rem;
        border: 3px solid #23d997;
        background: transparent;
        color: white;
        transition: all 0.5s ease;
        background: #9747FF;
        color: white;
        &:hover {
        background: #9747FF;
        color: white;
        }
    }
    h2{
        font-weight: lighter;
        font-size: 4rem;
        color: black;
    }
    h3{
        color:black;
    }
    p{
        padding: 1rem 0rem;
        color: black;
        font-size: 22px;
        line-height: 150%;
    }
    h4{
        font-size: 2.5rem;
    }
    a{
        font-size: 1.1.rem;
    }
`;
export default GlobalStyle;
