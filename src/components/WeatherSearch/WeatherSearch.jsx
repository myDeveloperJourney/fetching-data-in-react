import { useState } from 'react';

const WeatherSearch = (props) => {
    const [city, setCity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // TODO: call the service "show" function here
        // clear form input
        setCity('');
    };

    return (
        <section>
            <h2>Search</h2>
            <form>
                <label htmlFor="city">Enter a city:</label>
                <input 
                    id="city"
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)} 
                />
                <button type="submit">Search</button>
            </form>
        </section>
    );
}

export default WeatherSearch;