import React from "react";
import CountUp from "react-countup";
import style from './Cards.module.scss';
import {cardsProps} from "../../intefaces/cards";

export default class Cards extends React.PureComponent<cardsProps> {
    render() {
        return (
            <section className={style.container}>
                <div className={style.card}>
                    <div>
                        <p>Infected:</p>
                        <CountUp start={0} end={this.props.countryData.confirmed.value} duration={1.5} separator=","/>
                        <p>Date: {new Date(this.props.countryData.lastUpdate)
                            .toLocaleString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</p>
                        <p>Number of active cases of Covid-19</p>
                        <span className={style.infected}/>
                    </div>
                </div>
                <div className={style.card}>
                    <div>
                        <p>Recovered:</p>
                        <CountUp start={0} end={this.props.countryData.recovered.value} duration={1.5} separator=","/>
                        <p>Date: {new Date(this.props.countryData.lastUpdate)
                            .toLocaleString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</p>
                        <p>Number of recoveries from Covid-19</p>
                        <span className={style.recovered}/>
                    </div>
                </div>
                <div className={style.card}>
                    <div>
                        <p>Deaths:</p>
                        <CountUp start={0} end={this.props.countryData.deaths.value} duration={1.5} separator=","/>
                        <p>Date: {new Date(this.props.countryData.lastUpdate)
                            .toLocaleString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</p>
                        <p>Number of deaths caused by Covid-19</p>
                        <span className={style.deaths}/>
                    </div>
                </div>
            </section>
        )
    }
}
