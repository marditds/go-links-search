import React, { useState } from 'react';
import { Container, Image } from 'react-bootstrap';
import { Results } from './Results';
import netflixLogo from '../assets/netflix.png'
import { Link } from 'react-router-dom';
import './Homes.css'

export const Home = () => {

    const [name, setName] = useState(' ');
    const [results, setResults] = useState([]);

    const hanldeNameChange = (e) => {
        setName((preVal) => e.target.value);
    }

    const handleSearch = (e) => {

        e.preventDefault();

        fetch(`https://api.github.com/search/repositories?q=${name}`)
            .then((data) => data.json())
            .then((data) => setResults((preVal) => data?.items))


    }


    return (
        <Container className="mt-5">
            <form id='search-form'>
                <div className="form-group">
                    <input
                        value={name}
                        type='text'
                        id='search'
                        className='form-control'
                        onChange={hanldeNameChange}
                        placeholder='Repo Name'
                        required />
                </div>
                <div className="form-group  ">
                    <button onClick={handleSearch} className='ms-auto me-0 srch'>Search</button>
                </div>
            </form>



            <Results results={results} />

            {results?.length < 1 ?
                <Link to='/netflix'><Image src={netflixLogo} fluid className='mt-5' /></Link>
                : null}

        </Container>
    )
}
