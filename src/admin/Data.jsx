import React from 'react'

const Data = ({ title, description, thumbnail, price }) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <img src={`https://bigburgerbackend.onrender.com/api/products${thumbnail}`} alt="" />
            <p>{price}</p>
        </div>
    )
}

export default Data