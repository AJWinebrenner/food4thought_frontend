import { useState } from 'react';

const ChefCard = ({chef}) => {

    return(
        <article className='card'>
            <h3>{chef.name}</h3>
            <h4>{chef.location}</h4>
            <h4>{chef.price}</h4>
            <h6>{chef.email}</h6>
        </article>
    );
}

export default ChefCard;