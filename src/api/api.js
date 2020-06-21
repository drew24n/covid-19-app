import axios from "axios";

export const instance = axios.create({
    baseURL: "https://covid19.mathdro.id/api",
})

export const api = {
    async fetchData() {
        try {
            const {data: {confirmed, recovered, deaths, lastUpdate}} = await instance.get("")
            return {confirmed, recovered, deaths, lastUpdate}
        } catch (e) {
            alert("some error occurred")
        }
    }
}
