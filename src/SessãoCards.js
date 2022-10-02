import styled from 'styled-components';
import TituloELogo from './TituloELogo';

export default function SessãoCards() {
    return (
        <EstandeDeCards>
            <TituloELogo />
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