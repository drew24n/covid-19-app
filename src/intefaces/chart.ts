export interface chartProps {
    country: string
    countryData: {
        confirmed: {
            value: number
        }
        recovered: {
            value: number
        }
        deaths: {
            value: number
        },
        lastUpdate: string
    }
}

export interface chartState {
    globalData: {
        confirmed: number,
        deaths: number,
        reportDate: string
    }[]
}