import React from "react"
import {Link} from 'gatsby'
import Layout from '../components/layout'

// creates HomePage React component
const HomePage = () => {
  return (
    <Layout>
      <body>
        <h1>Welcome to Wehab Lab.</h1>
        <p>
          We are an interdisciplinary lab that aims to bridge the fields of haptics, emotion regulation, wearable technology, and biofeedback. Under the direction of Dr. Pardis Miri, we investigate the use of technology for affect regulation.
        </p>
        <img class="reframe" src="https://i.imgur.com/t0Ebd8p.png"></img>
        
      </body>
    </Layout>
  )
}

export default HomePage