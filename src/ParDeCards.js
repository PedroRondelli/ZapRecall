import imgPlay from './img/seta_play.png';
import imgVirar from './img/seta_virar.png';
import styled from 'styled-components';
import { useState } from 'react';


export default function ParDeCards({pergunta,resposta}) {
    const[virada,setVirada]=useState(false)
    const[iniciou,setIniciou]=useState(false)
    function verResposta() {
        setVirada(true)
    }
    function iniciar(){
        setIniciou(true)
    }
    return (
        <>
            <PerguntaFechada iniciou={!iniciou? "flex":"none"} >
                <p>Pergunta 1</p>
                <img onClick={iniciar} src={imgPlay} />
            </PerguntaFechada>
            <PerguntaAberta iniciou={iniciou? "flex":"none"}><p>{(!virada)? pergunta:resposta}</p> <img onClick={verResposta} src={imgVirar} /></PerguntaAberta>
        </>
    )

}

const PerguntaFechada=styled.div`
    width: 300px;
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: ${(props)=> props.iniciou};
    align-items: center;
    justify-content: space-between;
`
const PerguntaAberta=styled.div`
    width: 300px;
    margin: 12px;
    padding: 15px;
    min-height: 100px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    position: relative;
    display: ${(props)=> props.iniciou};
    flex-direction: column;
    justify-content: space-between;
    img{
        position: absolute;
        bottom: 10px;
        right: 10px;
      }
`