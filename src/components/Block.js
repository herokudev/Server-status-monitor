import React from 'react';
import axios from "axios";
import './Block.css';

export default function Block(props) {
    const { id, info } = props;

    return (
        <div className="content">
        <p className = "block--counter">{id}</p>
        <p className = "block--details">{info}</p>
    </div>
    );    
}
