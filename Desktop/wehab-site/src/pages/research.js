import React from "react"
import {Link} from 'gatsby'
import Layout from '../components/layout'
import ResearchStyles from '../styles/research.scss'

const ResearchPage = () => {
    return (
        <Layout>
            <h1>Research</h1>
            <p>Blurb about the research</p>
            <div class="research-grid">
                <div class="research-box">
                    <a href="http://disney.com/" target="_blank">
                        <img className="reframe fade-effect" src="https://s3.amazonaws.com/codecademy-content/courses/learn-css-grid/lesson-ii/image-1.png" alt="Berry smoothie"></img>
                    </a>
                    <div class="desc-post">
                        <h2 class="title-post">
                            <a href="/">
                                FAR: Facilitating Affect Regulation in Youth with Autism Spectrum Disorder
                            </a>
                        </h2>
                    </div>
                </div>
                <div class="research-box">
                    <a href="/">
                        <img className="reframe fade-effect" src="https://hips.hearstapps.com/hmg-prod/images/delish-how-to-make-a-smoothie-horizontal-1542310071.png" alt="Berry smoothie"></img>
                    </a>
                    <div class="desc-post">
                        <h2 class="title-post">
                            <a href="/">
                                PIV++: Efficacy of a Vibrotactile Breathing Pacer in Presence of a Cognitive Stressor
                            </a>
                        </h2>
                    </div>
                </div>
                <div class="research-box">
                    <a href="/">
                        <img className="reframe fade-effect" src="https://s3.amazonaws.com/codecademy-content/courses/learn-css-grid/lesson-ii/image-2.png" alt="Berry smoothie"></img>
                    </a>
                    <div class="desc-post">
                        <h2 class="title-post">
                            <a href="/">
                                PIV: Personalizable Inconspicuous Vibrotactile Breathing Pacer
                            </a>
                        </h2>   
                    </div>
                </div>
                <div class="research-box">
                    <a href="/">
                        <img className="reframe fade-effect" src="https://s3.amazonaws.com/codecademy-content/courses/learn-css-grid/lesson-ii/image-2.png" alt="Berry smoothie"></img>
                    </a>
                    <div class="desc-post">
                        <h2 class="title-post">
                            <a href="/">
                                Hapland: a scalable robust emotion regulation haptic system testbed
                            </a>
                        </h2>   
                    </div>
                </div>
                <div class="research-box">
                    <a href="/">
                        <img className="reframe fade-effect" src="https://s3.amazonaws.com/codecademy-content/courses/learn-css-grid/lesson-ii/image-2.png" alt="Berry smoothie"></img>
                    </a>
                    <div class="desc-post">
                        <h2 class="title-post">
                            <a href="/">
                                Emotion Regulation in the Wild: Introducing WEHAB System Architecture
                            </a>
                        </h2>   
                    </div>
                </div>
  </div>
        </Layout>
    )
}

export default ResearchPage