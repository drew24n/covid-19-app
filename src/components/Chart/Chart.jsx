import React, {useEffect} from "react";
import style from "./chart.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {api} from "../../api/api";
import {setChartData} from "../../redux/chart-reducer";
import {Bar, Line} from "react-chartjs-2";
import {Preloader} from "../common/Preloader/Preloader";

export const Chart = ({country, oneCountryChart}) => {

    let dispatch = useDispatch()
    let chartData = useSelector(state => state.chart.chartData)

    useEffect(() => {
            api.fetchChartData().then(res => dispatch(setChartData(res)))
        }, [dispatch]
    )

    if (!chartData) return <Preloader/>

    const lineChart = (
        chartData && chartData.length &&
        <Line data={{
            labels: chartData.map(({date}) => date),
            datasets: [
                {
                    data: chartData.map(({confirmed}) => confirmed),
                    label: "Infected",
                    borderColor: "#3333ff",
                    fill: true
                },
                {
                    data: chartData.map(({deaths}) => deaths),
                    label: "Deaths",
                    borderColor: "red",
                    backgroundColor: "rgba(255, 0, 0, 0.5)",
                    fill: true
                }
            ]
        }}/>
    )

    const barChart = (
        oneCountryChart.confirmed && (
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
                        data: [oneCountryChart.confirmed.value, oneCountryChart.recovered.value, oneCountryChart.deaths.value,]
                    }]
                }}
                options={{
                    legend: {display: false},
                    title: {display: true, text: `Current situation on ${country}`}
                }}
            />
        )
    )

    return <div className={style.container}>{country ? barChart : lineChart}</div>
}
