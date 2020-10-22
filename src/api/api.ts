import axios from "axios";
import {fetchCountryData, fetchCountries, fetchGlobalData} from "../intefaces/api";

const instance = axios.create({
    baseURL: 'https://covid19.mathdro.id/api/'
})

export const api = {
    async fetchCountryData(country: string) {
        let newUrl = instance.defaults.baseURL
        if (country) {
            newUrl = `${instance.defaults.baseURL}countries/${country}`
        }
        try {
            const {data: {confirmed, recovered, deaths, lastUpdate}} =
                await instance.get<fetchCountryData>(`${newUrl}`)
            return {confirmed, recovered, deaths, lastUpdate}
        } catch (e) {
            alert(e)
        }
    },

    async fetchGlobalData() {
        try {
            const {data} = await instance.get<Array<fetchGlobalData>>('daily')
            return data.map(daily => ({
                confirmed: daily.confirmed.total,
                deaths: daily.deaths.total,
                reportDate: daily.reportDate
            }))
        } catch (e) {
            alert(e)
        }
    },

    async fetchCountries() {
        try {
            const {data: {countries}} = await instance.get<fetchCountries>('countries')
            return countries.map(country => country.name)
        } catch (e) {
            alert(e)
        }
    }
}
