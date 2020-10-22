import React from "react";
import style from './Countries.module.scss';
import {api} from "../../api/api";
import {countriesProps, countriesState} from "../../intefaces/counties";

export default class Countries extends React.PureComponent<countriesProps, countriesState> {
    state = {
        countries: []
    }

    componentDidMount() {
        api.fetchCountries().then(res => {
            if (res) this.setState({
                countries: res
            })
        })
    }

    render() {
        return (
            <section className={style.container}>
                <h4>Select country</h4>
                <select defaultValue={''} onChange={this.props.selectCountry}>
                    <option value={''}>Global</option>
                    {this.state.countries.map(country => <option key={country} value={country}>{country}</option>)}
                </select>
            </section>
        )
    }
}