import { use, useState } from "react";
import Country from "../Country/country";
import './countries.css';

const Countries = ({countriesPromise}) => {

    const [countriyVisited, setCountryVisited] = useState([])

    const handleCountryVisited = (country) =>{
        const newCountryVisited = [...countriyVisited, country]
        setCountryVisited(newCountryVisited)
    }
    const countriesData = use(countriesPromise)
    const countries = countriesData.countries
    

    return (
        <div>
            <h3>All Countries are here</h3>
            <h4>Countries visited recently: {countriyVisited.length}</h4>
            <ol>
                {
                    countriyVisited.map(country => <li>{country.name.common}</li>)
                }
            </ol>
            <div className="countries">
                {
                countries.map(country => <Country country={country} handleCountryVisited={handleCountryVisited}></Country>)
                }
            </div>
            
        </div>
    );
};

export default Countries;