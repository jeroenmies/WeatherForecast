import React, {Component} from "react";
import {connect} from "react-redux";
import Chart from "../components/chart";
import * as _ from "lodash";
import GoogleMap from "../components/google_map";

class WeatherList extends Component {
    render() {
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature<br/>(C)</th>
                    <th>Pressure<br/>(hPa)</th>
                    <th>Humidity<br/>(%)</th>
                </tr>
                </thead>
                <tbody>
                {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }

    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp - 273);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        const pressures = cityData.list.map(weather => weather.main.pressure);

        const {lon, lat} = cityData.city.coord;

        return (
            <tr key={name}>
                <td><GoogleMap lon={lon} lat={lat}/></td>
                <td>
                    <Chart data={temps} color="orange" unit="C"/>
                </td>
                <td>
                    <Chart data={pressures} color="green" unit="hPa"/>
                </td>
                <td>
                    <Chart data={humidities} color="black" unit="%"/>
                </td>
            </tr>
        )
    }
}

function mapStateToProps({weather}) {
    return {weather}; // { weather: weather }
}

export default connect(mapStateToProps)(WeatherList);

