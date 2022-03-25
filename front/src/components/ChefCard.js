import { useState } from 'react';

const ChefCard = ({chef}) => {

    return(
        <article className='bubble card'>
            <div className="lineFlex marginBelow">
                <h3 className="card__title" >{chef.name}</h3>
            </div>
            <div className="innerBubble">
                <h4>Location: {chef.location}</h4>
                <h5>Cost per meal: £{chef.price}</h5>
                <h6>Contact: {chef.email}</h6>
            </div>
        </article>
    );
}

export default ChefCard;