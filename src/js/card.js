import * as React from "react";

function Card(){
    return (
        <div className="card">
            <div className="card_body">
                <img src={props.img} alt="" />
                <h1 className="title"></h1>
            </div>
            <div className="primaryAudience">
            </div>
            <div className="intendedPurpose">
            </div>
            <input type="button" value="Score this entry" />
        </div>
    )
}

export default Card;