import React from "react";
import style from "./app.module.scss";
import {Cards} from "../Cards/Cards";
import {Chart} from "../Chart/Chart";
import {CountryPicker} from "../CountryPicker/CountryPicker";
import {api} from "../../api/api";

export class App extends React.Component {

    async componentDidMount() {
        await api.fetchData()
    }

    render() {
        return (
            <main className={style.container}>
                <Cards/>
                <Chart/>
                <CountryPicker/>
            </main>
        )
    }
}
