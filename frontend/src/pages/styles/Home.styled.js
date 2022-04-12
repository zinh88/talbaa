import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomePage = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    padding-bottom: 150px;
    min-height: 700px;
`

export const Title = styled.div`
display:flex;
font-size: 40px;
background-color: white;
align-items: center;
justify-content: center;
padding-top: 20px;
padding-bottom: 40px;
color: #656565;
`

export const BigCircBox = styled.div`
display:flex;
background-color: white;
height: 600px;
justify-content: space-around;
align: center;
`

export const Box = styled.div`
display:flex;
background-color: white;
flex-direction: column;
width: 415px;
height: 100%;
justify-content: center;
align: center;
`
export const HorBox = styled.div`
display:flex;
background-color: white;
flex-direction: column;
width: 415px;
height: 100px;
justify-content: center;
align: center;
padding-top: 70px;
`
export const Box2 = styled.div`
display:flex;
background-color: white;
flex-direction: row
height: 57px;
width: 100%;
align-items:center;
justify-content:center;

`
export const BigCirc = styled.div`
display:flex;
background-color: #E7F6F8;
border-radius: 50%;
height: 415px;
width: 415px;
background-image: url(${({pic}) => pic});
background-size: contain;
background-repeat: no-repeat;


`

export const Btn = styled.div`
display:flex;
background-color: #007E8E;
border-radius: 15px;
height: 57px;
width: 263px;
color: white;
:hover {
    border: 1px solid #007E8E;
    color: #007E8E;
    background-color: white;
}
align-items: center;
justify-content: center;
font-size: 25px;
font-weight: 600;
`
export const Text = styled.div`
display: flex;
font-size: 20px;
background-color: white;
align items:center;
text-align:center;
justify-content:center;
padding-top:20px;
height: 20px;

`