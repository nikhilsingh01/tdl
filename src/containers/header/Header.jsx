import React from 'react'
import './header.css'
import sliderImages1 from '../../assets/images/digital-marketing-removebg-preview.png';
import sliderImages2 from '../../assets/images/api-collaboration-removebg-preview.png';
import sliderImages3 from '../../assets/images/WordPress-removebg-preview.png';
import sliderImages4 from '../../assets/images/managed-it-services-580x580-removebg-preview.png';
import sliderImages5 from '../../assets/images/shopify-removebg-preview.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Header = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    fade: true,
  };

  return (

    <div className='gk__header'>

      <div className='gk__header-container section__padding'>
        <Slider {...settings}>
          <div>
            <div className='gk_header-text '>
              <h2 className='header-h2'>Digital Marketing Service</h2>
              <p className='color-subtext'>Digital Marketing Service Take your business online today and get more amazing leads.</p>
            </div>
            <div className='header-img'>
              <img src={sliderImages1} alt="slider-images" />
            </div>
          </div>
          <div>
            <div className='gk_header-text '>
              <h2 className='header-h2'>IT Professional Services</h2>
              <p className='color-subtext'>We specialise in niche IT skills staff augmentation in Cloud Technologies and Full Stack Development.</p>
            </div>
            <div className='header-img'>
              <img src={sliderImages4} alt="slider-images" />
            </div>
          </div>
          <div>
            <div className='gk_header-text '>
              <h2 className='header-h2'>WordPress Services</h2>
              <p className='color-subtext'>Leverage our team expertise in WordPress plugin development, migrations, customizations and high quality support.</p>
            </div>
            <div className='header-img'>
              <img src={sliderImages3} alt="slider-images" />
            </div>
          </div>
          
          <div>
            <div className='gk_header-text '>
              <h2 className='header-h2'>Shopify App Development</h2>
              <p className='color-subtext'>Rely on our experts in Shopify App Development, customizations, integrations and high quality support.</p>
            </div>
            <div className='header-img'>
              <img src={sliderImages5} alt="slider-images" />
            </div>
          </div>
        </Slider>


      </div>
    </div>


  )
}

export default Header
