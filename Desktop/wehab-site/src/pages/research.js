import React from "react"
import {Link} from 'gatsby'
import Layout from '../components/layout'
import ResearchStyles from '../styles/research.scss'

const ResearchPage = () => {
    return (
        <Layout>
            <h1>Research</h1>
            <div class="grid container">
                <div class="box">
                    <img src="https://hips.hearstapps.com/hmg-prod/images/delish-how-to-make-a-smoothie-horizontal-1542310071.png" alt="Berry smoothie"></img>
                    <h4>Article 1</h4>
                </div>
                <div class="box">
                    <img src="https://hips.hearstapps.com/hmg-prod/images/delish-how-to-make-a-smoothie-horizontal-1542310071.png" alt="Berry smoothie"></img>
                    <h4>Article 2</h4>
                </div>
                <div class="box">
                    <img src="https://hips.hearstapps.com/hmg-prod/images/delish-how-to-make-a-smoothie-horizontal-1542310071.png" alt="Berry smoothie"></img>
                    <h4>Article 3</h4>
                </div>
                <div class="box">Article 4</div>
                <div class="box">Article 5</div>
                <div class="box">Article 6</div>
                <div class="box">Article 7</div>
  </div>
        </Layout>
    )
}

export default ResearchPage