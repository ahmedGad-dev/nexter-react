import React from 'react'
import "./_footer.scss"
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <div className="footer">
       <ul className="nav">
          <li className="nav__item"><Link className='nav__link'>Find your dream home</Link>    </li>
          <li className="nav__item"><Link className='nav__link'>Request proposal</Link></li>
          <li className="nav__item"><Link className='nav__link'>Download home planner</Link></li>
          <li className="nav__item"><Link className='nav__link'>Contact us</Link></li>
          <li className="nav__item"><Link className='nav__link'>Submit your property</Link></li>
          <li className="nav__item"><Link className='nav__link'>Come work with us!</Link></li>
       </ul>
       <p class="copyright">
          copyrights &copy; nexter 2022
       </p>
    </div>
  )
}

export default Footer