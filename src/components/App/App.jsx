import React, {useEffect} from "react";
import style from "./app.module.scss";
import {Cards} from "../Cards/Cards";
import {Chart} from "../Chart/Chart";
import {CountryPicker} from "../CountryPicker/CountryPicker";
import {useDispatch, useSelector} from "react-redux";
import {api} from "../../api/api";
import {setData} from "../../redux/app-reducer";

export const App = () => {

    const dispatch = useDispatch()
    const data = useSelector(state => state.app.data)

    useEffect(() => {
            api.fetchData().then(res => dispatch(setData(res)))
        }, [dispatch]
    )

    return (
        <main className={style.container}>
            <Cards data={data}/>
            <Chart/>
            <CountryPicker/>
        </main>
    )
}
