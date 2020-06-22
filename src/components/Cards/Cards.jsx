import React, {useEffect} from "react";
import style from "./cards.module.scss";
import CountUp from "react-countup";
import {Preloader} from "../common/Preloader/Preloader";
import {useDispatch, useSelector} from "react-redux";
import {api} from "../../api/api";
import {setData} from "../../redux/cards-reducer";

export const Cards = () => {

    const dispatch = useDispatch()
    const data = useSelector(state => state.cards.data)

    useEffect(() => {
            api.fetchData().then(res => dispatch(setData(res)))
        }, [dispatch]
    )

    if (!data.lastUpdate) return <Preloader/>

    return (
        <div className={style.container}>
            <div>
                <h5>Infected</h5>
                <div>
                    <CountUp start={0} end={data.confirmed.value} duration={1.5} separator=","/>
                    <p>{new Date(data.lastUpdate).toDateString()}</p>
                    <p>Number of active cases of Covid-19</p>
                </div>
            </div>
            <div>
                <h5>Recovered</h5>
                <div>
                    <CountUp start={0} end={data.recovered.value} duration={1.5} separator=","/>
                    <div>{new Date(data.lastUpdate).toDateString()}</div>
                    <p>Number of recoveries from Covid-19</p>
                </div>
            </div>
            <div>
                <h5>Deaths</h5>
                <div>
                    <CountUp start={0} end={data.deaths.value} duration={1.5} separator=","/>
                    <div>{new Date(data.lastUpdate).toDateString()}</div>
                    <p>Number of deaths caused by Covid-19</p>
                </div>
            </div>
        </div>
    )
}
