import React from "react";
import {api} from "../../api/api";
import {Bar, Line} from "react-chartjs-2";
import style from './Chart.module.scss';
import {chartProps, chartState} from "../../intefaces/chart";

export default class Chart extends React.PureComponent<chartProps, chartState> {
    state = {
        globalData: []
    }

    componentDidMount() {
        api.fetchGlobalData().then(res => {
            if (res) this.setState({
                globalData: res
            })
        })
    }

    lineChart() {
        return this.state.globalData.length ?
            <Line data={{
                labels: this.state.globalData.map(({reportDate}) => reportDate),
                datasets: [
                    {
                        data: this.state.globalData.map(({confirmed}) => confirmed),
                        label: "Infected",
                        borderColor: "blue",
                        fill: true
                    },
                    {
                        data: this.state.globalData.map(({deaths}) => deaths),
                        label: "Deaths",
                        borderColor: "red",
                        fill: true
                    }
                ]
            }}/>
            : null
    }

    barChart() {
        return this.props.countryData.confirmed ? (
                <Bar
                    data={{
                        labels: ["Infected", "Recovered", "Deaths"],
                        datasets: [{
                            label: "People",
                            backgroundColor: [
                                "rgba(0, 0, 255, 0.5",
                                "rgba(0, 255, 0, 0.5",
                                "rgba(255, 0, 0, 0.5",
                            ],
                            hoverBackgroundColor: [
                                "rgba(0, 0, 255, 0.6",
                                "rgba(0, 255, 0, 0.6",
                                "rgba(255, 0, 0, 0.6",
                            ],
                            data: [this.props.countryData.confirmed.value, this.props.countryData.recovered.value,
                                this.props.countryData.deaths.value]
                        }]
                    }}
                    options={{
                        legend: {display: false},
                        title: {display: true, text: `Current situation on ${this.props.country}`}
                    }}
                />
            )
            : null
    }

    render() {
        return <section className={style.container}>{this.props.country ? this.barChart() : this.lineChart()}</section>
    }
}
