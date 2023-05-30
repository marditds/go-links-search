import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Results = ({ results }) => {


    return (
        <div>
            <ul>

                {results?.map((res, i) => {
                    return (
                        <div key={i}>

                            <Link to={`/${res.name}`}>

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