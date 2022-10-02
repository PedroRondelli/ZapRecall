import styled from 'styled-components';
import logo from "./img/logo.png";

export default function TituloELogo() {
    return(
        <DivTitulo>
            <img src={logo}/>
            <h1>ZapRecall</h1>
        </DivTitulo>
    )
}

const DivTitulo=styled.div`
    display: flex;
    align-items: center;
    margin: 40px 0 20px 0;
    

    img{
        width:52px;
    }

    h1{
        font-family: 'Righteous', cursive;
        font-family: Righteous;
        font-size: 36px;
        font-weight: 400;
        color: white;
        margin-left:20px; 
    }
`
