import { useContext, useEffect, useState } from "react";
import { LocationContext } from "../context";

const useWeather = () => {
    const {selectedLocation} = useContext(LocationContext);
    const [weatherData, setWeatherData] = useState({
        location: "",
        climate: "",
        temperature: "",
        maxTemperature: "",
        minTemperature: "",
        humidity: "",
        cloudPercentage: "",
        wind: "",
        time: "",
        longitude: "",
        latitude: "",
    });
    const [error, setError] = useState();
    const [loading, setLoading] = useState({
        status: false,
        message: ""
    });

    const fetchWeather = async (latitude, longitude) => {
        setLoading({
            ...loading,
            state: true,
            message: "Fetching Data",
        });
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=3e129e13875de16dcdf57bcfeb055504&units=metric`);
            if(!response.ok) {
                const errorMessage = `Fetching weather data failed: ${response.status}`;
                throw new Error(errorMessage);
            }
            const data = await response.json();

            const updateWeatherData = {
                ...weatherData,
                location: data?.name,
                climate: data?.weather[0]?.main,
                temperature: data?.main?.temp,
                maxTemperature: data?.main?.temp_max,
                minTemperature: data?.main?.temp_min,
                humidity: data?.main?.humidity,
                cloudPercentage: data?.clouds?.all,
                wind: data?.wind?.speed,
                time: data?.dt,
                longitude: longitude,
                latitude: latitude,
            };
            setWeatherData(updateWeatherData);
        } catch (error) {
            setError(error);
        } finally {
            setLoading({
                ...loading,
                state: false,
                message: "",
            });
        }
    };

    useEffect(() => {
        setLoading({
            ...loading,
            state: true,
            message: "Getting location...",
        });

        if(selectedLocation.latitude && selectedLocation.longitude) {
            const {latitude, longitude} = selectedLocation;
            fetchWeather(latitude, longitude);
        } else {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;
                fetchWeather(latitude, longitude);
            });
        }

    }, [selectedLocation.latitude, selectedLocation.longitude]);

    return {
        weatherData,
        loading, error
    }
};

export default useWeather;