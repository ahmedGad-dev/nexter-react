import React from 'react'
import './_homes.scss'
import HomeCard from '../home-card/HomeCard'
import { HOMES } from '../../homes-data'

function HomesList() {
  return (
    <div className='homes'>
       {HOMES.map((home, i )=> {
          const {name, location, price, space, rooms, image, flag} = home
          return <HomeCard key={i} name={name} location={location} price={price} space={space} rooms={rooms} image={image} flag={flag}/>
       })}
    </div>
  )
}

export default HomesList