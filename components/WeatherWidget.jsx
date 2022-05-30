import React from 'react'
import Link from "next/link";
import Router from "next/router";

const WeatherWidget = ({ placeholder }) => {
  const [query, setQuery] = React.useState("");
  const [results, setResults] = React.useState([]);

  React.useEffect(() => {
    const clearQuery = () => setQuery("");
    Router.events.on("routeChangeComplete", clearQuery);

    return () => {
      Router.events.off("routeChangeComplete", clearQuery);
    };
  }, []);

  const onChange = (e) => {
    const { value } = e.target;
    setQuery(value);

    let matchingCities = [];

    if (value.length > 3) {
      for (let city of cities) {
        if (matchingCities.length >= 3) {
          break;
        }

        const match = city.name.toLowerCase().startsWith(value.toLowerCase());

        if (match) {
          const cityData = {
            ...city,
            slug: `${city.name.toLowerCase().replace(/ /g, "-")}-${city.id}`,
          };

          matchingCities.push(cityData);
          continue;
        }
      }
    }

    return setResults(matchingCities);


  };


  return (
    <div>
       <div className="bg-blue-500 bg-opacity-80 shadow-lg p-8 pb-12 md:mr-20 mb-16">
       <h3 className="font-playfair text-xl mb-8 font-semibold border-b pb-4">Weather Forecast</h3>
       <label className="leading-7 text-lg text-gray-200">City:</label>
        <input type="text" 
        id="full-name" 
        name="full-name" 
        className="w-full bg-white  border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        value={query}
        onChange={onChange}
        placeholder={placeholder ? placeholder : ""}
        />
         {query.length > 3 && (
        <ul>
          {results.length > 0 ? (
            results.map((city) => {
              return (
                <li key={city.slug}>
                  <Link href={`/blog/${city.slug}`}>
                    <a>
                      {city.name}
                      {city.state ? `, ${city.state}` : ""}{" "}
                      <span>({city.country})</span>
                    </a>
                  </Link>
                </li>
              );
            })
          ) : (
            <li className="search__no-results">No results found</li>
          )}
        </ul>
      )}
       </div>
    </div>
  )
}

export default WeatherWidget