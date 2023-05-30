import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Results.css';

export const Results = ({ results }) => {


    return (
        <div>
            <ul className="ps-0">

                {results?.map((res, i) => {
                    return (
                        <div key={i} className='text-start ps-0'>

                            <Link to={`/${res.name}`} className='text-decoration-none repo--link'
                                style={{ color: "black" }}>

                                {res?.name}
                            </Link>
                            <br />
                        </div>
                    )
                })
                }

            </ul>
        </div>
    )
}