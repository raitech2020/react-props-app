import React from "react";

const Card = (props) => {
    return (
        <div>
            <h3>{props.type}</h3>
            {props.children}
        </div>
    )
}

export default Card
