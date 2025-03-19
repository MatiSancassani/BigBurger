import React from 'react'

const Prueba = () => {
    <style>
        .checkmark {
            display: block;
        width: 30px;
        height: 30px;
        background-color: #ddd;
        border-radius: 10px;
        position: relative;
        transition: background-color 0.4s;
        overflow: hidden;
        cursor: pointer;
}

        #feature-{a._id}:checked ~ .checkmark {
            background - color: #08bb68;
}

        .checkmark::after {
            content: "";
        position: absolute;
        width: 5px;
        height: 10px;
        border-right: 3px solid #fff;
        border-bottom: 3px solid #fff;
        top: 44%;
        left: 50%;
        transform: translate(-50%, -50%) rotateZ(40deg) scale(10);
        opacity: 0;
        transition: all 0.4s;
}

        #feature-{a._id}:checked ~ .checkmark::after {
            opacity: 1;
        transform: translate(-50%, -50%) rotateZ(40deg) scale(1);
}
    </style>

    return (
        <>
            <label className="checkbox-wrapper">
                <input
                    type="checkbox"
                    id=feature-{a._id}
                    name="features"
                    checked={selectedFeature === a._id}
                    onChange={() => setSelectedFeature(a._id)}
                    hidden
                />
                <label htmlFor=`feature-{a._id}` className="checkmark"></label>
            <label htmlFor={feature - { a._id }}>
                <div>
                    <p>{a.title}</p>
                    <small>+ $ {a.price}</small>
                </div>
            </label>
        </label >
    </>
  )
}

export default Prueba