export interface cardsProps {
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