import React, {useEffect} from "react";
import style from "./country-picker.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {api} from "../../api/api";
import {setCountriesData} from "../../redux/countries-reducer";

export const CountryPicker = () => {

    const dispatch = useDispatch()
    const data = useSelector(state => state.countries.data)

    useEffect(() => {
            api.fetchCountryData().then(res => dispatch(setCountriesData(res)))
        }, [dispatch]
    )
debugger
    return (
        <div className={style.container}>
            <select>
                {data.map((country) => <option key={country} value={country}>{country}</option>)}
            </select>
        </div>
    )
}
