import React from "react";
import style from "./cards.module.scss";

export const Cards = (props) => {
    return (
        <div className={style.container}>
            {props.data.lastUpdate}
        </div>
    )
}
