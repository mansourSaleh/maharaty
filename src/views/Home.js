import React from 'react'
import Hero from './Hero';
import MyCard from '../components/MyCard';
import {cards} from '../data'

function Home() {
    return (
        <>
        <Hero />
             <div className="d-flex flex-row-reverse justify-content-around align-items-center flex-wrap">
        {cards.map((card, i) => {
          return(
            <MyCard key={i} icon={card.icon} title={card.title} description={card.description} buttonTitle={card.buttonTitle} />
          )
        })}
      </div>
        </>
    )
}

export default Home
