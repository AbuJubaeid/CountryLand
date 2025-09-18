import { use } from "react";
import Country from "../Country/country";

const Countries = ({countriesPromise}) => {
    const countriesData = use(countriesPromise)
    const countries = countriesData.countries
    

    return (
        <div>
            <h3>All Countries are here</h3>
            {
            countries.map(country => <Country country={country}></Country>)
            }
            
        </div>
    );
};

export default Countries;