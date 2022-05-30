import React, { useState, useEffect } from "react";
import moment from "moment";

const Weather = () => {
    const [data, setData] = useState({});
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                fetchWeather(position.coords.latitude, position.coords.longitude);
            });
            const fetchWeather = async (latitude, longitude) => {
                console.log(latitude)
                console.log(longitude)
                try{
                    // const res = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=40ab3944e9ad212f5d8ddddda8e68f06&exclude=minutely&units=imperial")
                    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=40ab3944e9ad212f5d8ddddda8e68f06&units=imperial`)
                    const data = await res.json();
                    console.log(data);
                    console.log(process.env.API_KEY);
                    setData(
                        {temperature: data.main.temp,
                         pressure: data.main.pressure,
                         icon: data.weather[0].icon,
                         cityname: data.name,
                         country: data.sys.country,
                         description: data.weather[0].description,
                         windspeed: data.wind.speed,
                         humidity: data.main.humidity,
                         pressure: data.main.pressure,
                         date: data.dt
                        }
                        // {
                        
                        // icon: 
                        //     <Image src={"https:" + weatherData.current.condition.icon} 
                        //     alt={`It is ${weatherData.current.temp_c} in your city`} 
                        //     width={80} 
                        //     height={80} />, 
                        // temperature: 
                        // data.main.temp + "º F"}
                        );
                }
                catch{
                    console.log("xWthErr");
                }
            };
        }
    }, []);


  return (
      <div>
          <div className="flex flex-col bg-gradient-to-r from-cyan-300 to-indigo-300  rounded shadow-lg p-4 md:mr-20 mb-2">
						<div className="font-bold text-xl text-center">{data.cityname}, {data.country}</div>
						<div className=" text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400">
                        <img classname="" src={"http://openweathermap.org/img/wn/" + data.icon + "@2x.png"} alt="weather icon"/>
						</div>
						<div className="flex flex-row items-center justify-center">
							<div className="font-medium text-white text-5xl">{data.temperature}°F</div>
							<div className="flex flex-col items-center ml-6">
								<div>{data.description}</div>
							</div>
						</div>
						<div className="flex flex-row justify-between mt-6">
							<div className="flex flex-col items-center">
								<div className="font-medium text-sm">Wind</div>
								<div className="text-sm text-gray-500">{data.windspeed}mph</div>
							</div>
							<div className="flex flex-col items-center">
								<div className="font-medium text-sm">Humidity</div>
								<div className="text-sm text-gray-500">{data.humidity}%</div>
							</div>
							<div className="flex flex-col items-center">
								<div className="font-medium text-sm">Pressure</div>
								<div className="text-sm text-gray-500">{data.pressure}hPa</div>
							</div>
						</div>
					</div>
    </div>

  )
}

export default Weather