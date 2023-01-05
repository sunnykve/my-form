import axios from "axios";
import { useEffect, useState } from "react";


function Country() {
    const [data, setData] = useState([]);
    const [state, setState] = useState([]);
    const [city, setCity] = useState([]);

    useEffect(() => {
        axios.get("https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json").
            then(res => setData(res.data))
            .catch(err => console.log(err))
    }, [])


    let country = [...new Set(data.map(item => item.country))];
    country.sort();

    const handleCountryChange = (e) => {
        setState("Select State");
        setCity("Select City");

        let Singlecountry = data.filter(item => item.country === e.target.value);

        let states = [...new Set(Singlecountry.map(item => item.subcountry))];

        setState(states);
    }

    const handleStateChange = (e) => {

        let singleCity = data.filter(item => item.subcountry === e.target.value);
        setCity(singleCity);
    }

    return (
        <>

            <label>Country: </label>
            <select onChange={(e) => handleCountryChange(e)}>
                <option>Select Country</option>
                {country?.map((item, index) => (
                    <option key={index} value={item}>{item}</option>

                ))}

            </select>
            <br /><br />


            <label>State: </label>
            <select onChange={(e) => handleStateChange(e)}>
                <option>Select State</option>

                {state !== 'Select State' && state?.map((item, index) =>
                    <option key={index} value={item}>{item}</option>
                )}
            </select>
            <br /> <br />


            <label>City: </label>
            <select>
                <option>Select City</option>

                {city !== 'Select City' && city?.map((item, index) =>
                    <option key={index} value={item?.name}>{item?.name}</option>

                )}
            </select>
        </>
    );
}

export default Country;