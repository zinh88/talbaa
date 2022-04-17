import styled from "styled-components";
import { Link } from "react-router-dom";
import {} from "../CreateCourse";

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

// export function SearchBox({name, style, placeholderType, padding}){
//   return(
//         <div style = {style}>
//           <input placeholder="Search..." class={placeholderType}></input>
//           {/* <Tag name="" style={textBox} option = {option1} setOption={setOption1}></Tag> */}
//         </div>
//   )
// }

