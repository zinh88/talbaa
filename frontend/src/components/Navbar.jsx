import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Dropdown, Dropitem } from "./styles/Dropdown.styled";
import axios from "axios";

const Navbar = ({setAuth}) => {
    const [drop, setDrop] = useState(false);
    const [username, setUsername] = useState('');

    const Logout = () => {
        localStorage.removeItem("authorization"); 
        setAuth(false); 
        setUsername('');
    }
    const getName = async () => {
        axios.get('/api/users/get_user', {
            headers: {
                'authorization': localStorage.authorization
            }
        })
        .then((resp) => {
            setUsername(resp.data.username);
            console.log(resp);
        })
        .catch((err) => {
            console.log(err);
            setAuth(false);
        })
    }

    useEffect(()=>{
        getName();
    },[])

    return (
    <div>
    <div className="header">
        <a href="/">
            <img src="/owlimage.png" height="60vw" alt="logo"></img>
        </a>
        <a href="/home">Home</a>
        <a href="/courseCatalogue">Course Catalogue</a>
        <a href="/myCourses">My Courses</a>
        <div onClick={() => setDrop(!drop)}>
            <img src="/girlicon.png" height="60vw" alt="logo"></img>
        </div>
        
    </div>
    {
        drop 
        && 
        <Dropdown>
            <Dropitem>Hello, {username}</Dropitem>
            <Dropitem onClick={Logout}>Logout</Dropitem>
        </Dropdown>
    }
    </div>
  );
}

export default Navbar;
