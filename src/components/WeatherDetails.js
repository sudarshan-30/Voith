import React from "react"

export const WeatherDetails = (props) => {
    const { weatherDetails } = props;
    const { wind, weather, sys, main } = weatherDetails;
    return <React.Fragment>
        <div className="d-flex">
        <WindInfo wind={wind} />
        <WeatherInfo weather={weather} />
        <SunDetails sys={sys} />
        <TemperatureDetails main={main} />
        </div>
    </React.Fragment>
}

const WindInfo = ({ wind }) => {
    const { deg, gust, speed } = wind;
    return (<div className="detailsCard">
        <h3>Wind Info</h3>
        <p>Deg : {deg}</p>
        <p>Gust : {gust}</p>
        <p>Speed : {speed}</p>
    </div>)
}

const WeatherInfo = ({ weather }) => {
    return (<div className="detailsCard">
        <h3>Weather Info</h3>
        {weather.map(({ description, main , id}) => (<div key={id}>
            <p>{main}</p>
            <p>{description}</p>
        </div>))}
    </div>)
}

const SunDetails = ({ sys }) => {
    const { country, sunrise, sunset } = sys
    return (<div className="detailsCard">
        <h3>County Info</h3>
        <p>Country : {country}</p>
        <p>Sunrise : {new Date(sunrise).toDateString()}</p>
        <p>Sunset : {new Date(sunset).toDateString()}</p>
    </div>)
}

const TemperatureDetails = ({ main }) => {
    const { temp, temp_max, temp_min, humidity, pressure } = main
    return (<div className="detailsCard">
        <h3>Temperature Details</h3>
        <p>Temperature : {temp}</p>
        <p>Temperature Max : {temp_max}</p>
        <p>Temperature Min : {temp_min}</p>
        <p>Pressure Min : {pressure}</p>
        <p>Humidity : {humidity}</p>
    </div>)
}