import React from 'react'
import './service.css'
import BackImage from "../../assets/images/back-services.jpg";
const Service = () => {
  return (
    <div id="services" className='gk__service-section' style={{ backgroundImage: `url(${BackImage})` }}>
      <div className="gk__service-container">
        <div className="gk__service-title">
          <h2>
            Our Services
          </h2>
        </div>
        <div className='gk__service-content'>
          <div className='gk__service-s'>
            <div className='service-img'>
              <img src="../assets/images/digi.jpg" />
            </div>
            <div className='service-content'>
              <h2>Digital Solutions & IT Services</h2>
              <p>Leverage our expertise in Cloud Technologies, SaaS, Open Source and Enterprise Platform Services to propel your Business to next level.</p>
            </div>
          </div>
       
        
          <div className='gk__service-s'>
            <div className='service-img'>
              <img src="../assets/images/api-d.jpg" />
            </div>
            <div className='service-content'>
              <h2>API DEVELOPMENT</h2>
              <p>Develop distributed applications using Microservices & utilize using APIs for enhanced user experience and increased uptime.</p>
            </div>
          </div>
     
        
          <div className='gk__service-s'>
            <div className='service-img'>
              <img src="../assets/images/digital.jpg" />
            </div>
            <div className='service-content'>
              <h2>Digital Marketing Service</h2>
              <p>Digital Marketing Service in Chandigarh Take your business online today and get more amazing leads.</p>
            </div>
         </div>
         
         <div className='gk__service-s'>
            <div className='service-img'>
              <img src="../assets/images/it-services.jpg" />
            </div>
            <div className='service-content'>
              <h2>IT Professional Services</h2>
              <p>We specialise in niche IT skills staff augmentation in Cloud Technologies and Full Stack Development.</p>
            </div>
         </div>
         <div className='gk__service-s'>
            <div className='service-img'>
              <img src="../assets/images/word.jpg" />
            </div>
            <div className='service-content'>
              <h2>WordPress Services</h2>
              <p>Leverage our team expertise in WordPress plugin development, migrations, customizations and high quality support.</p>
            </div>
         </div>
         <div className='gk__service-s'>
            <div className='service-img'>
              <img src="../assets/images/app-d.jpg" />
            </div>
            <div className='service-content'>
              <h2>Shopify App Development</h2>
              <p>Rely on our experts in Shopify App Development, customizations, integrations and high quality support.</p>
            </div>
         </div>
        </div>
      </div>

    </div>
  )
}

export default Service
