import React from 'react'
import Hero from './Hero';
import MyCard from '../components/MyCard';
import {cards} from '../data'

function Home() {
    return (
        <>
        <div style={{display: 'flex', }}>
        <Hero />
        </div>


             <div className="d-flex flex-row-reverse justify-content-around align-items-center flex-wrap pb-5 mb-5">
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
