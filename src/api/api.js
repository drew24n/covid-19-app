import axios from "axios";

const baseURL = "https://covid19.mathdro.id/api"

export const api = {
    async fetchCardsData(country) {
        let newUrl = baseURL
        if (country) {
            newUrl = `${baseURL}/countries/${country}`
        }
        try {
            let {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(newUrl)
            return {confirmed, recovered, deaths, lastUpdate}
        } catch (e) {
            alert(e)
        }
    },

    async fetchChartData() {
        try {
            let {data} = await axios.get(`${baseURL}/daily`)
            return data.map((dailyData) => ({
                confirmed: dailyData.confirmed.total,
                deaths: dailyData.deaths.total,
                date: dailyData.reportDate
            }))
        } catch (e) {
            alert(e)
        }
    },

    async fetchCountriesData() {
        try {
            let {data: {countries}} = await axios.get(`${baseURL}/countries`)
            return countries.map((countries) => countries.name)
        } catch (e) {
            alert(e)
        }
    }
}
