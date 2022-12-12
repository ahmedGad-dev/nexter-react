import React from 'react'
import './_story.scss'
import image1 from '../../assets/img/story-1.jpeg'
import image2 from '../../assets/img/story-2.jpeg'


function Stories() {
  return (
  <div className='story'>

    <div className="story__pictures"> 
     <img src={image1} alt="Couple with new house" className="story__img--1"/>
     <img src={image2} alt="New house" className="story__img--2"/>
    </div>

    <div className="story__content">
     <h3 className="heading-3 mb-sm">Happy Customers</h3>
     <h2 className="heading-2 heading-2--dark mb-md">&ldquo;The best decision of our lives&rdquo;</h2>
     <p className="story__text">
       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus. Quidem consequatur harum volupta!
     </p>
     <button className="btn-self-defined ">Find your own home</button>
   </div>
   
  </div>
  )
}

export default Stories