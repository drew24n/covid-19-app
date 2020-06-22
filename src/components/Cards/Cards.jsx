import React, {useEffect} from "react";
import style from "./cards.module.scss";
import CountUp from "react-countup";
import {Preloader} from "../common/Preloader/Preloader";
import {useDispatch, useSelector} from "react-redux";
import {api} from "../../api/api";
import {setCardsData} from "../../redux/cards-reducer";

export const Cards = ({country}) => {

    let dispatch = useDispatch()
    let cardsData = useSelector(state => state.cards.cardsData)

    useEffect(() => {
            api.fetchCardsData(country).then(res => dispatch(setCardsData(res)))
        }, [dispatch, country]
    )

    if (!cardsData.lastUpdate) return <Preloader/>

    return (
        <div className={style.container}>
            <div className={style.card}>
                <h5>Infected</h5>
                <div>
                    <CountUp start={0} end={cardsData.confirmed.value} duration={1.5} separator=","/>
                    <p>{new Date(cardsData.lastUpdate).toDateString()}</p>
                    <p>Number of active cases of Covid-19</p>
                </div>
            </div>
            <div className={style.card}>
                <h5>Recovered</h5>
                <div>
                    <CountUp start={0} end={cardsData.recovered.value} duration={1.5} separator=","/>
                    <div>{new Date(cardsData.lastUpdate).toDateString()}</div>
                    <p>Number of recoveries from Covid-19</p>
                </div>
            </div>
            <div className={style.card}>
                <h5>Deaths</h5>
                <div>
                    <CountUp start={0} end={cardsData.deaths.value} duration={1.5} separator=","/>
                    <div>{new Date(cardsData.lastUpdate).toDateString()}</div>
                    <p>Number of deaths caused by Covid-19</p>
                </div>
            </div>
        </div>
    )
}
