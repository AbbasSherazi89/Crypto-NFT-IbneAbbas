import React from 'react'
import Dashboard from './Dashboard'
import Footer from './Footer'
import Header from './Header'

const Base = (props) => {
  return (
    <div>
      <Header/>
      <Dashboard/>
        {props.children}
      <Footer/>
    </div>
  )
}

export default Base
