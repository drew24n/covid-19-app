import React, {useEffect} from "react";
import style from "./country-picker.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {api} from "../../api/api";
import {setCountriesData} from "../../redux/countries-reducer";
import {setCountry} from "../../redux/app-reducer";

export const CountryPicker = () => {

    let dispatch = useDispatch()
    let countriesData = useSelector(state => state.countries.countriesData)

    useEffect(() => {
            api.fetchCountriesData().then(res => dispatch(setCountriesData(res)))
        }, [dispatch]
    )

    return (
        <div className={style.container}>
            <select defaultValue={"global"} onChange={(event) => dispatch(setCountry(event.target.value))}>
                <option>global</option>
                {countriesData.map((country) => <option key={country} value={country}>{country}</option>)}
            </select>
        </div>
    )
}
