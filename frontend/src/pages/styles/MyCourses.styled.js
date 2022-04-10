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
  font-size: 40px;
  background-color: white;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 20px;
  color: #656565;
`;

export const EnrolledBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 40px;
  flex-wrap: wrap;
`;

export const Plus = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #007e8e;
  margin-bottom: 10px;
  margin-left: 10px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  font-weight: 500;
  cursor: pointer;
  /* border: ; */
  :hover {
    background-color: white;
    color: #007e8e;
    border: 1px solid #007e8e;
  }
`;
