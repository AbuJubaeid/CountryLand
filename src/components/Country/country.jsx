
const Country = ({country}) => {

    console.log(country)
    return (
        <div>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <p>CountryName: {country.name.common}</p>
        </div>
    );
};

export default Country;