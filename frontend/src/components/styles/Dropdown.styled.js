import styled from "styled-components";

export const Dropdown = styled.div`
    margin-right: 5px;
    position: absolute;
    display: flex;
    min-width: 70px;
    background-color: white;
    flex-direction: column;
    z-index: 2;
    right:0px;
`

export const Dropitem = styled.div`
    padding-left: 10px;
    padding-right: 10px;
    display: flex;
    height: 40px;
    align-items: center;
    justify-content: center;
    border: 1px solid gray;
    cursor: pointer;
    :hover {
        background-color: #F0F8FF;
    }
`