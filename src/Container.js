import React from "react"

export default function Container(props){
    return (
        <div className="work">
            <img src={require(`${props.item.url}`)} />
            <div className="layer">
                <h3>{props.item.title}</h3>
                <a href={props.item.gitlink} target="_blank"><i className="fa-sharp fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
        </div>
    )
}