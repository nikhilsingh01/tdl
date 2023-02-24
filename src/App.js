import React from 'react'
import './App.css'
import './index.css'

import { Navbar, Articles, Services, Features } from './components';
import { Header, Footer, Contact, Service, Feature, About, Blog, Choose, Testimonial } from './containers';

const App = () => {
  return (
    <div className='App'>
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>

      <About />
      <Service />
      <Feature />
      <Choose />
      <Blog />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;
