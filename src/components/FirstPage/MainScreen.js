import Logo from "../Logo";
import Movie from "./Movie";
import styled from 'styled-components';
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function MainScreen() {

const {idFilme} = useParams()
const [movies, setMovies] = useState(undefined)

useEffect(() => {
    const URL = "https://mock-api.driven.com.br/api/v8/cineflex/movies"
    const promise = axios.get(URL)
    promise.then(res => setMovies(res.data))     

    promise.catch(err => console.log(err.response.data)) 
}, [])

if (movies === undefined) {
    return <div>Carregando...</div>
  }



    return (
        <>
            <Logo />
            <Container>
                <p>Selecione o filme</p>
                <MoviesContainer>
                    {movies.map((m) => (
                        
                        
                        <Link to={`/sessoes/${m.id}`}>  
                        <Movie key={m.posterURL}
                        image={m.posterURL} description={m.title}/>
                        </Link>
                
                    ))}
            
                </MoviesContainer>
            </Container>
        </>
    )
}

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
margin: auto;
    p{
        margin-top: 43px;
        margin-bottom: 43px;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;  
    }
`

const MoviesContainer = styled.div`
width: 375px;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
img{
    width: 129px;
height: 193px;
margin-bottom: 27px;
}
`