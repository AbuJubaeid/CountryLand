import { useState } from 'react';
import './country.css';


const Country = ({country, handleCountryVisited}) => {

    const [visited, setVisited] = useState(false)

    const handleVisitedBtn = () =>{
        // => First way
        // if(visited){
        //             setVisited(false)
        //         }
        //         else{
        //             setVisited(true)
        //         }  
        
        // =>Second way
        // setVisited(visited ? false : true)

        // =>Third way
        setVisited(!visited)
        handleCountryVisited(country)
        }
        

    console.log(country)
    return (
        <div className={`country ${visited && "country-visited"}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <p>CountryName: {country.name.common}</p>
            <p>CountryArea: {country.area.area} {country.area.area > 300000 ? "Biggg Country" : "Small Country"}</p>
            <button onClick={handleVisitedBtn}>{visited ? "visited" : "not visited"}</button>
        </div>
    );
};

export default Country;