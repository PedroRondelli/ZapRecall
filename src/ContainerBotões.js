import styled from "styled-components"

const característicaBotões =[
    {texto:"Não Lembrei",cor:"#ff3030"},
    {texto:"Quase não lembrei",cor:"#ff922e"},
    {texto:"Zap",cor:"#2fbe34"}
]

export default function ContainerBotões() {
    

    return (
        <CaixaBotões>
            {característicaBotões.map((botao)=><Botao cor={botao.cor} >{botao.texto}</Botao>)}
        </CaixaBotões>
    )
}

const CaixaBotões = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-between;
    margin: 20px;
`

const Botao=styled.button`
    width: 90px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #FFFFFF;
    background: ${(props)=>props.cor};
    border-radius: 5px;
    border: 1px solid ${(props)=>props.cor};
    padding:5px;
    cursor:pointer;
`