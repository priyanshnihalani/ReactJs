import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
    const mystyle = {
        display: 'flex',
    };
    const list = {
        margin: "20px"
    }
    return (
        <div>
            <ul  style={mystyle}>
                <li style={list} >
                <Link to={"/"}>Home</Link>
                </li>
                <li  style={list}>
                <Link to={"/about"}>About</Link>
                </li>
                <li  style={list}>
                <Link to={"/contact"}>Contact</Link>
                </li>
            </ul>
        </div>
    );
}
