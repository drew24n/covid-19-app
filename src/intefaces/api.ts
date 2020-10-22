export interface fetchCountryData {
    confirmed: {
        value: number
    }
    recovered: {
        value: number
    }
    deaths: {
        value: number
    }
    lastUpdate: string
}

export interface fetchGlobalData {
    confirmed: {
        total: number
    }
    deaths: {
        total: number
    }
    reportDate: string
}

export interface fetchCountries {
    countries: {
        name: string
    }[]
}