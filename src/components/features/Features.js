import React from 'react';
import './_features.scss';
import '../../sass/_typography.scss';
//import {ReactComponent as Icon} from '../../assets/img/sprite.svg'
import Icons from '../../assets/img/sprite.svg';

const Features = ()  => {
  return (  
   <div className="features">
    <div className="feature">
        <svg className='feature__icon'>
          <use xlinkHref= {`${Icons}#icon-presentation`} />
        </svg>    
        <h4 className="heading-4 heading-4--dark">World's best luxury homes</h4>
        <p className="feature__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.</p>
    </div>

    <div className="feature">
        <svg className='feature__icon'>
          <use xlinkHref= {`${Icons}#icon-trophy`} />
        </svg>
        <h4 className="heading-4 heading-4--dark">Only the best properties</h4>
        <p className="feature__text">Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus rerum sed a eligendi aut quia.</p>
    </div>

    <div className="feature">
        <svg className='feature__icon'>
          <use xlinkHref= {`${Icons}#icon-expand`} />
        </svg>
        <h4 className="heading-4 heading-4--dark">All homes in in top locations</h4>
        <p className="feature__text">Tenetur distinctio necessitatibus pariatur voluptatibus quidem consequatur harum.</p>
    </div>

    <div className="feature">
        <svg className='feature__icon'>
          <use xlinkHref= {`${Icons}#icon-lock`} />
        </svg>
        <h4 className="heading-4 heading-4--dark">New home in one week</h4>
        <p className="feature__text">Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>

    <div className="feature">
        <svg className='feature__icon'>
          <use xlinkHref= {`${Icons}#icon-heart`} />
        </svg>
        <h4 className="heading-4 heading-4--dark">Top 1% realtors</h4>
        <p className="feature__text">Quidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio necessitatibus pariatur voluptatibus.</p>
    </div>

    <div className="feature">
        <svg className='feature__icon'>
          <use xlinkHref= {`${Icons}#icon-key`} />
        </svg>
        <h4 className="heading-4 heading-4--dark">Secure payments on nexter</h4>
        <p className="feature__text">Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia quae.</p>
    </div>
  </div>
  )
}

export default Features