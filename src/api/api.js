import axios from "axios";

export const instance = axios.create({
    baseURL: "https://covid19.mathdro.id/api",
})

export const api = {
    async fetchData() {
        try {
            return await instance.get("/")
        } catch (e) {
            alert("some error occurred")
        }
    }
}
