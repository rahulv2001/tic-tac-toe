import React from "react";

function Card(props) {

    let idx = props.num;

    return (
        <div
            className={props.name}
            onClick={() => { if(props.win == null)props.playClick(idx); }}>
            <p>{ props.value }</p>
        </div>
    );

}

export default Card;