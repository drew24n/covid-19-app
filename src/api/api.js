import axios from "axios";

const instance = axios.create({
    baseURL: "https://covid19.mathdro.id/api",
})

export const api = {
    async fetchData(country) {
        if (country) {}
        try {
            const {data: {confirmed, recovered, deaths, lastUpdate}} = await instance.get("/")
            return {confirmed, recovered, deaths, lastUpdate}
        } catch (e) {
            alert(e)
        }
    },

    async fetchDailyData() {
        try {
            const {data} = await instance.get("/daily")
            return data.map((dailyData) => ({
                confirmed: dailyData.confirmed.total,
                deaths: dailyData.deaths.total,
                date: dailyData.reportDate
            }))
        } catch (e) {
            alert(e)
        }
    },

    async fetchCountryData() {
        try {
            const {data: {countries}} = await instance.get("/countries")
            return countries.map((countries) => countries.name)
        } catch (e) {
            alert(e)
        }
    }
}
