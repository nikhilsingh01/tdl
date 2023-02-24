import React from 'react'
import './about.css'

const About = () => {
  return (
    <><div id="about-us" class="gk__section">
      <div class="gk__container ">
        <div class="gk__title">
          <h2>About Us</h2>
        </div>
        <div class="gk__content-section">
          <h3>Providing Innovative IT Solutions</h3>
          <p>Our founding team has worked previously with Oracle, Infosys, Fidelity Investments, TIbco, Google & various startups in enterprise applications development & support as part of global delivery model across USA and India.
            We focus on our Talent that is our Strength to Deliver High Quality Software Solutions for our Clients.</p>
          <ul className='gk_content-list'>
            <li><span className=''><img src="../../assets/images/check.png" /></span> WordPress Plugins, Development, Site Migrations & Support.</li>
            <li><span className=''><img src="../../assets/images/check.png" /></span>Shopify App Development, Customization & Support.</li>
            <li><span className=''><img src="../../assets/images/check.png" /></span>SaaS Solutions: be-spoke custom development for increased business efficiency.</li>
            <li><span className=''><img src="../../assets/images/check.png" /></span>Cloud Technologies: SRE, DevOps, Apigee Development, Migrations to Cloud.</li>
            <li><span className=''><img src="../../assets/images/check.png" /></span>Niche IT Skills Staffing Globally.</li>
            <li><span className=''><img src="../../assets/images/check.png" /></span>Cloud Technologies, SRE, DevOps, Full Stack Developers to augment your existing team.</li>
            <li><span className=''><img src="../../assets/images/check.png" /></span>Expertise in Shopify App Development to maximize your E-Commerce conversions.</li>
          </ul>
        </div>
        <div class="gk__image-section">
          <img src="../../assets/images/about.jpg" />
        </div>
      </div>
    </div></>
  )
}

export default About
