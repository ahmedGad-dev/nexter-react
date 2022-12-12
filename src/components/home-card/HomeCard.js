import React from 'react'
import icons from '../../assets/img/sprite.svg'
import './home.scss'

function HomeCard({name, location, price, space, rooms, image, flag}) {
  return (
         <div className="home">
             <img src={image} alt="House 1" className="home__img"/>
                <svg className="home__like">
                    <use xlinkHref= {`${icons}#icon-heart-full`}></use>
                </svg>
                <h5 className="home__name">{name}</h5>
                <div className="home__location">
                    <svg >
                      <use xlinkHref= {`${icons}#icon-map-pin`}></use>
                    </svg>
                    <p>{location} {flag}</p>
                </div>
                <div className="home__rooms">
                    <svg>
                      <use xlinkHref= {`${icons}#icon-profile-male`}></use>
                    </svg>
                    <p>{`${rooms} rooms`}</p>
                </div>
                <div className="home__area">
                    <svg>
                      <use xlinkHref= {`${icons}#icon-expand`}></use>
                    </svg>
                    <p>{`${space} m`}<sup>2</sup></p>
                </div>
                <div className="home__price">
                    <svg>
                      <use xlinkHref= {`${icons}#icon-key`}></use>
                    </svg>
                    <p>{`$${price}`}</p>
                </div>
                <button className="btn-self-defined home__btn">Contact realtor</button>
            </div>
    )
}

export default HomeCard