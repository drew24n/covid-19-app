import React from "react";
import style from "./app.module.scss";
import {Cards} from "../Cards/Cards";
import {Chart} from "../Chart/Chart";
import {CountryPicker} from "../CountryPicker/CountryPicker";
import {useSelector} from "react-redux";

export const App = () => {

    let country = useSelector(state => state.app.country)
    let oneCountryChart = useSelector(state => state.cards.cardsData)

    return (
        <main className={style.container}>
            <Cards country={country}/>
            <CountryPicker/>
            <Chart oneCountryChart={oneCountryChart} country={country}/>
        </main>
    )
}
