import { useState } from "react";
import styled from "styled-components";
import Search from "../search";

const Container = styled.div`
  color: white;
  padding: 20px;
`;

const WeatherInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const CityName = styled.h2`
  font-size: 24px;
  color: #e0e0e0;
`;

const DateDisplay = styled.span`
  font-size: 18px;
  color: #bdbdbd;
`;

const Temperature = styled.div`
  font-size: 30px;
  margin-top: 10px;
`;

const Description = styled.p`
  font-size: 20px;
  margin: 5px 0;
`;

const InfoBlock = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 26px;
  margin-top: 15px;
`;

const InfoItem = styled.div`
  text-align: center;
`;

const InfoLabel = styled.p`
  font-size: 16px;
  margin: 0;
`;

const NoData = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  color: #ffffff;
  font-size: 20px;
  margin: 20px 0;
`;

const Weather = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  async function fetchWeatherData(param) {
    if (!param) {
      setError("Please enter a search term.");
      return;
    }

    setLoading(true);
    setError("");
    try {
      const apiKey = import.meta.env.VITE_API_KEY;
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=${apiKey}`;
      const response = await fetch(url);

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("City not found.");
        } else {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
      }

      const data = await response.json();
      if (!data || !data.weather) {
        throw new Error("Invalid data received from the API.");
      }

      setWeatherData(data);
    } catch (e) {
      console.error(e.message);
      setError(e.message);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  }

  async function handleSearch() {
    fetchWeatherData(search);
  }
  return (
    <Container>
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <p>Error: {error}</p>
      ) : weatherData ? (
        <div>
          <WeatherInfoWrapper>
            <CityName>
              {weatherData.name}, <span>{weatherData.sys.country}</span>
            </CityName>
            <DateDisplay>
              {new Date().toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric",
                timeZone: "Europe/Oslo",
              })}
            </DateDisplay>
            <Temperature>
              {(weatherData.main.temp - 273.15).toFixed(2)}°C
            </Temperature>
            <Description>
              {weatherData.weather && weatherData.weather.length > 0
                ? weatherData.weather[0].description
                : ""}
            </Description>
            <InfoBlock>
              <InfoItem>
                <p>{weatherData?.wind?.speed}</p>
                <InfoLabel>vind m/s</InfoLabel>
              </InfoItem>
              <InfoItem>
                <p>{weatherData?.main?.humidity}%</p>
                <InfoLabel>Luft fuktighet</InfoLabel>
              </InfoItem>
            </InfoBlock>
          </WeatherInfoWrapper>
        </div>
      ) : (
        <NoData>Ingen data tilgjengelig</NoData>
      )}
    </Container>
  );
};

export default Weather;
