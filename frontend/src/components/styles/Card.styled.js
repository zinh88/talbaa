import styled from "styled-components";

export const StyledCard = styled.div`
    width: 388px;
    height: 530px;
    background-color: white;
    border-radius: 20px;
    border: 1px solid #D7D7D7;
    overflow: hidden;
`

export const CardPic = styled.img`
    display: flex;
    height: 50%;
`
export const CardFooter = styled.div`
    display: flex;
    padding: 10px;
    flex-direction:column;
    justify-content: space-between;
    height: 45%;
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
`

export const Title = styled.div`
    display: flex;
    font-size: 20px;
`

export const Author = styled.div`
    width:100%;
    display: flex;
    flex-direction: row-reverse;
    font-size: 15px;
`

export const Description = styled.div`
    display: flex;
    font-size: 12px;
    padding-top: 10px;
    text-align: left;
    letter-spacing: 0.2px;
    line-height: 20px;
`

export const Tags = styled.div`
    display: flex;
    height: 20px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

export const Bottom = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
`

export const Tag = styled.div`
    display: flex;
    color: white;
    background-color: #007E8E ;
    height: 100%;
    width: 110px;
    text-align: center;
    border-radius: 5px;
    font-size: 12px;
    align-items: center;
    justify-content: center;
`

export const Rating = styled.div`
    display: flex;
    justify-content: right;
    height: 30px;
`

export const Stars = styled.div`
    display: flex;
    font-size: 20px;
    color: orange;
`
