import React, {useEffect} from "react";
import style from "./chart.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {api} from "../../api/api";
import {setDailyData} from "../../redux/chart-reducer";
import {Line} from "react-chartjs-2";

export const Chart = () => {

    const dispatch = useDispatch()
    const dailyData = useSelector(state => state.chart.dailyData)

    useEffect(() => {
            api.fetchDailyData().then(res => dispatch(setDailyData(res)))
        }, [dispatch]
    )

    const lineChart = (
        dailyData && dailyData.length &&
        <Line data={{
            labels: dailyData.map(({date}) => date),
            datasets: [
                {
                    data: dailyData.map(({confirmed}) => confirmed),
                    label: "Infected",
                    borderColor: "#3333ff",
                    fill: true
                },
                {
                    data: dailyData.map(({deaths}) => deaths),
                    label: "Deaths",
                    borderColor: "red",
                    backgroundColor: "rgba(255, 0, 0, 0.5)",
                    fill: true
                }
            ]
        }}/>
    )

    return <div className={style.container}>{lineChart}</div>
}
