import Logo from "../Logo";
import styled from 'styled-components';

export default function SucessScreen(){
    return(
        <>
        <Logo/>
        <Container>
                <p>Pedido feito</p>
                <p>com sucesso!</p>
        <ContainerInfos>
        <FinalInfos>
            <h1>Filme e Sessão</h1>
            <h2>Enola Holmes</h2>
            <h2>24/06/2021  15:00</h2>
        </FinalInfos>

        <FinalInfos>
            <h1>Ingressos</h1>
            <h2>Enola Holmes</h2>
            <h2>24/06/2021  15:00</h2>
        </FinalInfos>

        <FinalInfos>
            <h1>Comprador</h1>
            <h2>Nome: João da Silva Sauro</h2>
            <h2>CPF: 123.456.789-10</h2>
        </FinalInfos>
        </ContainerInfos>

        <ButtonChoice>
                Voltar para Home
            </ButtonChoice>
                </Container>
        </>
      

    )
}


const Container = styled.div`
display: flex;
width: 375px;
flex-direction: column;
display: flex;
align-items: center;
margin: auto;
margin-top: 30px;
    p{
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.04em;
        color: #247A6B; 
        
    }
`
const ContainerInfos = styled.div`
display:flex;
flex-direction: column;
align-items: flex-start;
justify-content:flex-start;


`
const FinalInfos = styled.div`
display:flex;
flex-direction: column;
align-items: flex-start;
justify-content:flex-start;
margin-top:40px;
h1{
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.04em;
    color: #293845;
    margin-bottom: 6px;
}
h2{
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
    letter-spacing: 0.04em;
    color: #293845;
}
`
const ButtonChoice = styled.button`
    width: 225px;
    height: 42px;
    background-color: #E8833A;
    border-radius: 3px;
    border: none;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;
    color: #FFFFFF;
    justify-content:center;
    margin:auto;
    margin-top:90px;
`