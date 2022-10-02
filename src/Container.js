import styled from 'styled-components';
import ParDeCards from './ParDeCards';
import Rodapé from './Rodapé';
import TituloELogo from './TituloELogo';


const deckDoVasco=[
    {pergunta:"Qual o nome do maior ídolo do Vasco?",resposta:"Roberto Dinamite"},
    {pergunta:"Quem é o atual tecnico do Vasco?",resposta:"Jorginho"},
    {pergunta:"O Vasco sobe?",resposta:"Claro!"},
    {pergunta:"Sou Vascaino lá da ____",resposta:"barreira"},
    {pergunta:"Quem fez o gol do Bicampeonato Brasileiro??",resposta:"Sorato"},
    {pergunta:"Qual era o apelido do Edmundo?",resposta:"Animal"},
    {pergunta:"Quem é o maior batedor de falta de todos os tempos?",resposta:"Juninho Pernambucano"},
    {pergunta:"Qual era o time de coração do Pelé?",resposta:"Vasco da Gama"},

]

export default function Container() {
    return (
        <EstandeDeCards>
            <TituloELogo />
            {deckDoVasco.map((card)=><ParDeCards pergunta={card.pergunta} resposta={card.resposta}/>)}
            <Rodapé/>
        </EstandeDeCards>
    )
}

const EstandeDeCards = styled.div`
    background-color: #FB6B6B;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    padding: 0px;
    padding-bottom: 200px;
`
