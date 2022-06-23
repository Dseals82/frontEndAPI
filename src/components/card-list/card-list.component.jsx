import React from 'react';
import './card-list.styles.css';
import Card from '../card/card.component';

const CardList = ({ filteredMonsters }) => (  
  <div className='card-list'>
      {
        filteredMonsters.map((monster) => {    
            const {name, email, id} = monster;
            return (
              <Card name={name} email={email} id={id} key={id} />
            )
        })
      }
  </div>
)

export default CardList
