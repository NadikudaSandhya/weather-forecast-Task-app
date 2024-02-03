import React, { useState } from 'react';
import './WeatherForm.css';

const WeatherForm = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [unit, setUnit] = useState('metric'); 
    const weatherIcons = {
        'clear': 'bi bi-sun',
        'hazy': 'bi bi-cloud',
        'partly cloudy': 'bi bi-cloud',
        'showers': 'bi bi-cloud-rain',
        'thunderstorm': 'bi bi-lightning',
        'rainy': 'bi bi-cloud-rain',
        'snow showers': 'bi bi-snow',
    };

    // Used Mock data for Reference,checked public Apis but asking for subcription
    const mockData = {
        mumbai: {
            current: { temperature: 32, humidity: 80, description: 'Hazy', wind: { speed: 5, direction: 'W' } },
            forecast: [
                { date: '2022-02-01', avgTemperature: 30, description: 'Sunny' },
                { date: '2022-02-02', avgTemperature: 28, description: 'Partly Cloudy' },
                { date: '2022-02-03', avgTemperature: 31, description: 'Showers' },
                { date: '2022-02-04', avgTemperature: 29, description: 'Thunderstorm' },
                { date: '2022-02-05', avgTemperature: 32, description: 'Clear' },
            ],
        },
        delhi: {
            current: { temperature: 30, humidity: 65, description: 'Partly Cloudy', wind: { speed: 8, direction: 'SW' } },
            forecast: [
                { date: '2022-02-01', avgTemperature: 28, description: 'Clear' },
                { date: '2022-02-02', avgTemperature: 29, description: 'Partly Cloudy' },
                { date: '2022-02-03', avgTemperature: 30, description: 'Sunny' },
                { date: '2022-02-04', avgTemperature: 27, description: 'Showers' },
                { date: '2022-02-05', avgTemperature: 28, description: 'Hazy' },
            ],
        },
        bangalore: {
            current: { temperature: 25, humidity: 55, description: 'Showers', wind: { speed: 12, direction: 'NW' } },
            forecast: [
                { date: '2022-02-01', avgTemperature: 23, description: 'Rainy' },
                { date: '2022-02-02', avgTemperature: 24, description: 'Thunderstorm' },
                { date: '2022-02-03', avgTemperature: 25, description: 'Clear' },
                { date: '2022-02-04', avgTemperature: 22, description: 'Partly Cloudy' },
                { date: '2022-02-05', avgTemperature: 23, description: 'Showers' },
            ],
        },
        chennai: {
            current: { temperature: 28, humidity: 70, description: 'Thunderstorm', wind: { speed: 15, direction: 'E' } },
            forecast: [
                { date: '2022-02-01', avgTemperature: 27, description: 'Hazy' },
                { date: '2022-02-02', avgTemperature: 28, description: 'Clear' },
                { date: '2022-02-03', avgTemperature: 29, description: 'Partly Cloudy' },
                { date: '2022-02-04', avgTemperature: 26, description: 'Showers' },
                { date: '2022-02-05', avgTemperature: 27, description: 'Sunny' },
            ],
        },
        kolkata: {
            current: { temperature: 22, humidity: 60, description: 'Clear', wind: { speed: 10, direction: 'NE' } },
            forecast: [
                { date: '2022-02-01', avgTemperature: 20, description: 'Snow Showers' },
                { date: '2022-02-02', avgTemperature: 21, description: 'Hazy' },
                { date: '2022-02-03', avgTemperature: 22, description: 'Thunderstorm' },
                { date: '2022-02-04', avgTemperature: 19, description: 'Clear' },
                { date: '2022-02-05', avgTemperature: 20, description: 'Partly Cloudy' },
            ],
        },
        hyderabad: {
            current: { temperature: 25, humidity: 50, description: 'Sunny', wind: { speed: 14, direction: 'SE' } },
            forecast: [
                { date: '2022-02-01', avgTemperature: 23, description: 'Thunderstorm' },
                { date: '2022-02-02', avgTemperature: 24, description: 'Clear' },
                { date: '2022-02-03', avgTemperature: 25, description: 'Hazy' },
                { date: '2022-02-04', avgTemperature: 22, description: 'Showers' },
                { date: '2022-02-05', avgTemperature: 23, description: 'Partly Cloudy' },
            ],
        },
        ahmedabad: {
            current: { temperature: 18, humidity: 75, description: 'Foggy', wind: { speed: 20, direction: 'N' } },
            forecast: [
                { date: '2022-02-01', avgTemperature: 16, description: 'Rainy' },
                { date: '2022-02-02', avgTemperature: 17, description: 'Hazy' },
                { date: '2022-02-03', avgTemperature: 18, description: 'Snow Showers' },
                { date: '2022-02-04', avgTemperature: 15, description: 'Partly Cloudy' },
                { date: '2022-02-05', avgTemperature: 16, description: 'Clear' },
            ],
        },
        pune: {
            current: { temperature: 26, humidity: 45, description: 'Snow Showers', wind: { speed: 18, direction: 'NW' } },
            forecast: [
                { date: '2022-02-01', avgTemperature: 24, description: 'Thunderstorm' },
                { date: '2022-02-02', avgTemperature: 25, description: 'Clear' },
                { date: '2022-02-03', avgTemperature: 26, description: 'Hazy' },
                { date: '2022-02-04', avgTemperature: 23, description: 'Showers' },
                { date: '2022-02-05', avgTemperature: 24, description: 'Partly Cloudy' },
            ],
        },
        jaipur: {
            current: { temperature: 29, humidity: 55, description: 'Clear', wind: { speed: 10, direction: 'S' } },
            forecast: [
                { date: '2022-02-01', avgTemperature: 27, description: 'Hazy' },
                { date: '2022-02-02', avgTemperature: 28, description: 'Thunderstorm' },
                { date: '2022-02-03', avgTemperature: 29, description: 'Clear' },
                { date: '2022-02-04', avgTemperature: 26, description: 'Partly Cloudy' },
                { date: '2022-02-05', avgTemperature: 27, description: 'Sunny' },
            ],
        },
        lucknow: {
            current: { temperature: 35, humidity: 40, description: 'Partly Cloudy', wind: { speed: 25, direction: 'SE' } },
            forecast: [
                { date: '2022-02-01', avgTemperature: 33, description: 'Sunny' },
                { date: '2022-02-02', avgTemperature: 34, description: 'Hazy' },
                { date: '2022-02-03', avgTemperature: 35, description: 'Thunderstorm' },
                { date: '2022-02-04', avgTemperature: 32, description: 'Clear' },
                { date: '2022-02-05', avgTemperature: 33, description: 'Partly Cloudy' },
            ],
        },
    };

    const getWeather = () => {
        const cityName = city.toLowerCase();

        const cityData = mockData[cityName];

        if (cityData) {
            setWeatherData(cityData);
        } else {
            alert('City not found in mock data. Please try another city.');
        }
    };

    const renderWeatherIcon = (condition) => {
        if (!condition) {
            return <span className="bi bi-sun"></span>; 
        }
        const iconClass = weatherIcons[condition.toLowerCase()] || 'bi bi-question'; 
        console.log(iconClass);
        return <span className={iconClass}></span>;
    };

    const handleUnitToggle = (selectedUnit) => {
        setUnit(selectedUnit);
    };

    return (
        <div className="weather-form-container">
            <div className="weather-form">
                <label htmlFor="cityInput">Enter City:</label>
                <input
                    type="text"
                    id="cityInput"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <button onClick={getWeather}>Get Weather</button>
                <div className="unit-toggle">
                    <label>
                        <input
                            type="radio"
                            value="metric"
                            checked={unit === 'metric'}
                            onChange={() => setUnit('metric')}
                        />
                        Celsius
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="imperial"
                            checked={unit === 'imperial'}
                            onChange={() => setUnit('imperial')}
                        />
                        Fahrenheit
                    </label>
                </div>
            </div>

            {weatherData && (
                <div className="weather-result">
                    <h2>{weatherData.name}</h2>
                    <div className="current-weather">
                        <div className="temperature">
                            {unit === 'metric' && weatherData.current.temperature ? weatherData.current.temperature.toFixed(1) : ''}
                            {unit === 'imperial' && weatherData.current.temperature ? (weatherData.current.temperature * (9 / 5) + 32).toFixed(1) : ''}&deg;
                        </div>
                        <div className="weather-description">
                            {renderWeatherIcon(weatherData.current.description)}
                            <span>{weatherData.current.description}</span>
                        </div>
                    </div>
                    <div className="additional-info">
                        <div>Humidity: {weatherData.current.humidity}%</div>
                        <div>Wind: {weatherData.current.wind.speed} m/s, {weatherData.current.wind.direction}</div>
                    </div>
                    <div className="forecast">
                        <h3>5-Day Forecast</h3>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Avg Temp (&deg;)</th>
                                    <th>Weather</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {weatherData.forecast.map(day => (
                                    <tr key={day.date}>
                                        <td>{day.date}</td>
                                        <td>
                                            {unit === 'metric' && day.avgTemperature ? day.avgTemperature.toFixed(1) : ''}
                                            {unit === 'imperial' && day.avgTemperature ? (day.avgTemperature * (9 / 5) + 32).toFixed(1) : ''}&deg;
                                        </td>
                                        <td>{renderWeatherIcon(day.description)}</td>
                                        <td>{day.description}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

        </div>
    );
};

export default WeatherForm;
