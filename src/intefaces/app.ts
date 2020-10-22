export interface appState {
    countryData: {
        confirmed: {
            value: number
        },
        recovered: {
            value: number
        },
        deaths: {
            value: number
        },
        lastUpdate: string
    },
    country: string
}