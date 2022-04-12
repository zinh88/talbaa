import styled from "styled-components";
import { Link } from "react-router-dom";


export const HomePage = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  min-height: 700px;
`;

export const Title = styled.div`
  display: flex;
  font-size: 100%;
  background-color: white;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 20px;
`;


// export const Title2 = styled.div`
//   display: flex;
//   font-size: 40px;
//   background-color: white;
//   align-items: center;
//   justify-content: center;
//   padding-top: 20px;
//   padding-bottom: 20px;
//   color: #007E8E;
// `;

export const Box = styled.div`
display:flex;
background-color: white;
flex-direction: row
width: 100%;

`
export const Imag = styled.div`
background-image: "url(${({pic}) => pic});
background-size: contain;
background-repeat: no-repeat`

export const Box2 = styled.div`
display:flex;
width: 100%;
background-color: white;
flex-direction: column;
`

// export const Box4 = styled.div`
// display:flex;
// background-color: white;
// flex-direction: row
// height: 57px;
// width: 100%;
// justify-content:space-around;
// padding-left: 50px;
// padding-right: 50px
// `

export const Btn = styled.div`
display:flex;
background-color: #007E8E;
color: white;
:hover {
    border: 1px solid #007E8E;
    color: #007E8E;
    background-color: white;
}
`
export const Btn2 = styled.div`
display:flex;
justify-content: center;
flex-direction: row;
background-color: white;
color: #007E8E;
font-size:20px;
font-weight:500;
:hover {
    text-decoration: underline;
    color: #007E8E;
    background-color: white;
}

`

export const Text = styled.div`
display: flex;
font-size: 25px;
background-color: white;
align-items:center;
text-align:left;
justify-content:center;
padding-top:15px;
color: #000000
`
// export const Text2 = styled.div`
// display: flex;
// font-size: 20px;
// font-weight: 400;
// background-color: white;
// align items:center;
// text-align:left;
// justify-content:left;
// padding-top:20px;
// color: #000000
// letter-spacing: 0.2px;
// line-height: 40px;
// `
