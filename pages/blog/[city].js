import moment from "moment-timezone";



export async function getServerSideProps(context) {
    const city = getCity(context.params.city);

    if (!city) {
        return {
          notFound: true,
        };
      }

      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${city.coord.lat}&lon=${city.coord.lon}&appid=${process.env.API_KEY}&exclude=minutely&units=imperial`
        );
    
      const data = await res.json();
      console.log(data);
      
      


      if (!data) {
        return {
          notFound: true,
        };
      }

      

    const slug = (context.params.city);


    



    return {
        props: {
            slug: slug,
            data: data,
        },
        
    };
}

const getCity = param => {
    const cityParam = param.trim();
    // get the id of the city
    const splitCity = cityParam.split("-");
    const id = splitCity[splitCity.length - 1];

  
    if (!id) {
      return null;
    }
  
    const city = cities.find((city) => city.id.toString() == id);
  
    if (city) {
      return city;
    } else {
      return null;
    }
};



const City = ({ slug, data }) => {
    console.log(data);
    const icon = data.weather[0].icon

  return (
      
    <div className="bg-blue-500 bg-opacity-80 shadow-lg p-8 pb-12 md:mr-20 mb-16">
        <img src={"http://openweathermap.org/img/wn/" + icon + "@2x.png"} alt="weather icon"/>
        <h1>{data.name}</h1>
        <p>Temp: {data.main.temp} F°</p>
        <p>Max: {data.main.temp_max} F°</p>
        <p>Min: {data.main.temp_min} F°</p>
        <p>Pressure: {data.main.pressure} hPa</p>
        <p>Humidity: {data.main.humidity} %</p>
        <p>Wind speed: {data.wind.speed} mph</p>
        <p>Wind direction: {data.wind.deg} degrees</p>
        
        

    </div>

  )
}

export default City;