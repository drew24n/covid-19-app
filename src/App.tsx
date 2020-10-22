import React, {ChangeEvent} from "react";
import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import Countries from "./components/Countries/Countries";
import style from './App.module.scss';
import {api} from "./api/api";
import {appState} from "./intefaces/app";

export default class App extends React.PureComponent<{}, appState> {
    state = {
        countryData: {
            confirmed: {
                value: 0
            },
            recovered: {
                value: 0
            },
            deaths: {
                value: 0
            },
            lastUpdate: ''
        },
        country: ''
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        alert(error)
    }

    componentDidMount() {
        api.fetchCountryData(this.state.country).then(res => {
            if (res) this.setState({
                countryData: {
                    confirmed: {value: res.confirmed.value},
                    recovered: {value: res.recovered.value},
                    deaths: {value: res.deaths.value},
                    lastUpdate: res.lastUpdate
                }
            })
        })
    }

    componentDidUpdate(prevProps: {}, prevState: appState) {
        if (prevState.country !== this.state.country) {
            api.fetchCountryData(this.state.country).then(res => {
                if (res) this.setState({
                    countryData: {
                        confirmed: {value: res.confirmed.value},
                        recovered: {value: res.recovered.value},
                        deaths: {value: res.deaths.value},
                        lastUpdate: res.lastUpdate
                    }
                })
            })
        }
    }

    selectCountry = (e: ChangeEvent<HTMLSelectElement>) => {
        this.setState({
            country: e.target.value
        })
    }

    render() {
        return (
            <div className={style.container}>
                <header/>
                <Cards country={this.state.country} countryData={this.state.countryData}/>
                <Countries selectCountry={this.selectCountry}/>
                <Chart country={this.state.country} countryData={this.state.countryData}/>
            </div>
        )
    }
}
