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
          We are an interdisciplinary lab that aims to bridge the fields of computer science, psychology, and psychiatry. Under the direction of Dr. Pardis Miri, we investigate how to design, engineer, and evaluate technologies to facilitate affect regulation.
        </p>
        <p>
          We apply theoretically-grounded and data-driven approaches to engineer end-to-end systems that empower people to regulate their unwanted affective experiences and behaviors in their everyday lives. Then, we run carefully-designed clinical experiments to measure both the average effect (whether the system was effective in changing affect) and the heterogeneous effect (for whom the system was effective). Our research informs practice about what types of interventions are more useful for what type of trait and state individual differences, and will reduce the use of drugs in personalized mental healthcare.
        </p>
        <img class="reframe" src="https://github.com/jacquelinennguyen/wehab_new_site/blob/master/Desktop/wehab-site/src/imgs/Wehab%20Banner.png?raw=true"></img>
        
      </body>
    </Layout>
  )
}

export default HomePage