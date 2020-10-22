import {ChangeEvent} from "react";

export interface countriesProps {
    selectCountry: (e: ChangeEvent<HTMLSelectElement>) => void
}

export interface countriesState {
    countries: Array<string>
}