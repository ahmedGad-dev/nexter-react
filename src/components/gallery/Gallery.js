import React from 'react'
import './_gallery.scss'
import gallery1 from '../../assets/img/gal-1.jpeg'
import gallery2 from '../../assets/img/gal-2.jpeg'
import gallery3 from '../../assets/img/gal-3.jpeg'
import gallery4 from '../../assets/img/gal-4.jpeg'
import gallery5 from '../../assets/img/gal-5.jpeg'
import gallery6 from '../../assets/img/gal-6.jpeg'
import gallery7 from '../../assets/img/gal-7.jpeg'
import gallery8 from '../../assets/img/gal-8.jpeg'
import gallery9 from '../../assets/img/gal-9.jpeg'
import gallery10 from '../../assets/img/gal-10.jpeg'
import gallery11 from '../../assets/img/gal-11.jpeg'
import gallery12 from '../../assets/img/gal-12.jpeg'
import gallery13 from '../../assets/img/gal-13.jpeg'
import gallery14 from '../../assets/img/gal-14.jpeg'


const Gallery = () => {
  return (
      <section className="gallery">
            <figure className="gallery__item gallery__item--1"><img src={gallery1} alt="Gallery" className="gallery__img"/></figure>
            <figure className="gallery__item gallery__item--2"><img src={gallery2} alt="Gallery" className="gallery__img"/></figure>
            <figure className="gallery__item gallery__item--3"><img src={gallery3} alt="Gallery" className="gallery__img"/></figure>
            <figure className="gallery__item gallery__item--4"><img src={gallery4} alt="Gallery" className="gallery__img"/></figure>
            <figure className="gallery__item gallery__item--5"><img src={gallery5} alt="Gallery" className="gallery__img"/></figure>
            <figure className="gallery__item gallery__item--6"><img src={gallery6} alt="Gallery" className="gallery__img"/></figure>
            <figure className="gallery__item gallery__item--7"><img src={gallery7} alt="Gallery" className="gallery__img"/></figure>
            <figure className="gallery__item gallery__item--8"><img src={gallery8} alt="Gallery" className="gallery__img"/></figure>
            <figure className="gallery__item gallery__item--9"><img src={gallery9} alt="Gallery" className="gallery__img"/></figure>
            <figure className="gallery__item gallery__item--10"><img src={gallery10} alt="Gallery" className="gallery__img"/></figure>
            <figure className="gallery__item gallery__item--11"><img src={gallery11} alt="Gallery" className="gallery__img"/></figure>
            <figure className="gallery__item gallery__item--12"><img src={gallery12} alt="Gallery" className="gallery__img"/></figure>
            <figure className="gallery__item gallery__item--13"><img src={gallery13} alt="Gallery" className="gallery__img"/></figure>
            <figure className="gallery__item gallery__item--14"><img src={gallery14} alt="Gallery" className="gallery__img"/></figure>
        </section>
  )
}

export default Gallery