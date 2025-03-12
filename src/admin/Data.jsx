import React from 'react'

const Data = ({ title, description, thumbnail, price }) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <img src={`https://bigburgerbackend-1.onrender.com${thumbnail}`} alt="" />
            <p>{price}</p>
        </div>
    )
}

export default Data