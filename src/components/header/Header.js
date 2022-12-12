import React from 'react'
import './_header.scss'
import logoBBC from '../../assets/img/logo-bbc.png'
import logoBI from '../../assets/img/logo-bi.png'
import logoForbes from '../../assets/img/logo-forbes.png'
import logoTechCrunch from '../../assets/img/logo-techcrunch.png'
import logoImg from '../../assets/img/logo.png'

function Header() {
  return (
      <header className="header">
            <img src={logoImg} alt="Nexter logo" className="header__logo"/>
            <h3 className="heading-3">Your own home:</h3>
            <h1 className="heading-1">The ultimate personal freedom</h1>
            <button className="btn-self-defined header__btn">View our properties</button>
            <h3 className='heading-4'>AhmedGad_Dev</h3>
            <div className="header__seenon-text">Seen on</div>
            <div className="header__seenon-logos">
                <img src={logoBBC} alt="Seen on logo 1"/>
                <img src={logoForbes} alt="Seen on logo 2"/>
                <img src={logoTechCrunch} alt="Seen on logo 3"/>
                <img src={logoBI} alt="Seen on logo 4"/>
            </div>
        </header>  
  )
}

export default Header