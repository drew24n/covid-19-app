import React from "react";
import style from "./app.module.scss";
import {Cards} from "../Cards/Cards";
import {Chart} from "../Chart/Chart";
import {CountryPicker} from "../CountryPicker/CountryPicker";

export const App = () => {
    return (
        <main className={style.container}>
            <Cards/>
            <CountryPicker/>
            <Chart/>
        </main>
    )
}
