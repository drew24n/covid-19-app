import React from "react";
import style from "./cards.module.scss";
import CountUp from "react-countup";
import {Preloader} from "../common/Preloader/Preloader";

export const Cards = ({confirmed, recovered, deaths, lastUpdate}) => {

    if (!lastUpdate) return <Preloader/>

    return (
        <div className={style.container}>
            <div>
                <h5>Infected</h5>
                <h4>
                    <CountUp start={0} end={confirmed.value} duration={1.5} separator=","/>
                    <p>{new Date(lastUpdate).toDateString()}</p>
                    <p>Number of active cases of Covid-19</p>
                </h4>
            </div>
            <div>
                <h5>Recovered</h5>
                <h4>
                    <CountUp start={0} end={recovered.value} duration={1.5} separator=","/>
                    <div>{new Date(lastUpdate).toDateString()}</div>
                    <p>Number of recoveries from Covid-19</p>
                </h4>
            </div>
            <div>
                <h5>Deaths</h5>
                <h4>
                    <CountUp start={0} end={deaths.value} duration={1.5} separator=","/>
                    <div>{new Date(lastUpdate).toDateString()}</div>
                    <p>Number of deaths caused by Covid-19</p>
                </h4>
            </div>
        </div>
    )
}
