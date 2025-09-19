import { use } from "react";
import Country from "../Country/country";
import './countries.css';

const Countries = ({countriesPromise}) => {
    const countriesData = use(countriesPromise)
    const countries = countriesData.countries
    

    return (
        <div>
            <h3>All Countries are here</h3>
            <div className="countries">
                {
                countries.map(country => <Country country={country}></Country>)
                }
            </div>
            
        </div>
    );
};

export default Countries;