import React from 'react'
import './Card.css'
import a from './images/c1.jpeg'
import b from './images/c2.jpg'
import c from './images/c3.jpeg'
import d from './images/c4.jpeg'
export default function Card(props) {
    let bg = a;
    if (props.id === "b") bg = b;
    if (props.id === "c") bg = c;
    if (props.id === "d") bg = d;
    return (
        <div className="card" style={{
            backgroundImage: `url(${bg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }}>
                <h2>{props.title}</h2>
                <h3>{props.num}</h3>
        </div>
    )
}
