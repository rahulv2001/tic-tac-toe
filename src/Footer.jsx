import React from "react";

function Footer(props) {
    
    return (
        <div className="footer">
            {props.winner && <p>Player { props.winner } wins</p>}
            <button onClick={props.restart}>Play Again</button>
        </div>
    );
}

export default Footer;