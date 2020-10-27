import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import ResearchStyles from '../styles/research.scss'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const ResearchPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    return (
        <Layout>
                <Container>
                    <Row>
                        <Col md={4} sm={6} xs={12}>
                            <figure>
                                <div className="img-wrapper">
                                    <img className="reframe" src="https://raw.githubusercontent.com/jacquelinennguyen/wehab_new_site/2943deb258c86dd97872bb70dd781afdbd37ef80/Desktop/wehab-site/src/imgs/far-icon.svg" alt="FAR: Facilitating Affect Regulation in Youth with Autism Spectrum Disorder"></img>
                                    <div className="img-overlay">
                                        <div class="buttons">
                                            <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=8sheoGMsy3Q">Video</a>
                                            <a target="_blank" rel="noreferrer" href="/research/far">Details</a>
                                        </div>
                                    </div> 
                                </div>
                                
                                <figcaption>
                                    
                                    <h2 class="title-post">
                                        <Link to='/research/far'>
                                            FAR: Facilitating Affect Regulation in Youth with Autism Spectrum Disorder
                                        </Link>
                                    </h2>
                                </figcaption>
                            </figure>
                        </Col>
                    

                        <Col md={4} sm={6} xs={12}>
                            <figure>
                                <div class="img-wrapper">
                                    <img className="reframe" src="https://wehab.stanford.edu/wp-content/uploads/2019/08/Research-Project-Image-Slides.jpg" alt="PIV++: Efficacy of a Vibrotactile Breathing Pacer in Presence of a Cognitive Stressor"></img>
                                    <div className="img-overlay">
                                        <div class="buttons">
                                            <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=8sheoGMsy3Q">Video</a>
                                            <a target="_blank" rel="noreferrer" href="/research/pivplusplus">Details</a>                                        
                                        </div>
                                    </div> 
                                </div>
                            
                            <figcaption>
                                <h2 class="title-post">
                                    <a href="/research/pivplusplus">
                                        PIV++: Efficacy of a Vibrotactile Breathing Pacer in Presence of a Cognitive Stressor
                                    </a>
                                </h2>
                            </figcaption>
                            </figure>
                            
                        </Col>
                    
                    <Col md={4} sm={6} xs={12}>
                        <figure>
                            <div className="img-wrapper">
                                <img className="reframe" src="https://wehab.stanford.edu/wp-content/uploads/2019/01/PIV.png" alt="PIV: Personalizable Inconspicuous Vibrotactile Breathing Pacer"></img>
                                <div class="img-overlay">
                                    <div class="buttons">
                                        <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=8sheoGMsy3Q">Video</a>
                                        <a target="_blank" rel="noreferrer" href="/research/piv">Details</a>                                        
                                    </div>
                                </div>
                            </div>

                            <figcaption>
                                <div class="desc-post">
                                    <h2 class="title-post">
                                        <a href="/research/piv">
                                            PIV: Personalizable Inconspicuous Vibrotactile Breathing Pacer
                                        </a>
                                    </h2>   
                                </div>
                            </figcaption>
                        </figure>
                    
                        
                    </Col>
                </Row>

                <Row>
                    <Col md={4} sm={6} xs={12}>
                        <figure>
                            <div class="img-wrapper">
                                <img className="reframe" src="https://wehab.stanford.edu/wp-content/uploads/2018/10/Intel-Aug03-17-1.png" alt="Hapland: a scalable robust emotion regulation haptic system testbed"></img>
                                <div class="img-overlay">
                                    <div class="buttons">
                                        <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=8sheoGMsy3Q">Video</a>
                                        <a target="_blank" rel="noreferrer" href="/research/hapland">Details</a>                                        
                                    </div>
                                </div>
                            </div>
                            <figcaption>
                                <div class="desc-post">
                                    <h2 class="title-post">
                                        <a href="/research/hapland">
                                            Hapland: a scalable robust emotion regulation haptic system testbed
                                        </a>
                                    </h2>   
                                </div>
                            </figcaption>
                        </figure>                       
                    </Col>

                    <Col md={4} sm={6} xs={12}>
                        <figure>
                            <div class="img-wrapper">
                                <img className="reframe" src="https://wehab.stanford.edu/wp-content/uploads/2018/10/WEHAb.png" alt="Emotion Regulation in the Wild: Introducing WEHAB System Architecture"></img>
                                <div class="img-overlay">
                                    <div class="buttons">
                                        <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=8sheoGMsy3Q">Video</a>
                                        <a target="_blank" rel="noreferrer" href="/research/wehab">Details</a>                                        
                                    </div>
                                </div>
                            </div>
                            <figcaption>
                                <div class="desc-post">
                                    <h2 class="title-post">
                                        <a href="/research/wehab">
                                            Emotion Regulation in the Wild: Introducing WEHAB System Architecture
                                        </a>
                                    </h2>   
                                </div>
                            </figcaption>
                        </figure>   
                    </Col>

                    <Col md={4} sm={6} xs={12}>
                        <figure>
                            <div class="img-wrapper">
                                <img className="reframe" src="https://wehab.stanford.edu/wp-content/uploads/2018/10/WEHAb.png" alt="Emotion Regulation in the Wild: Introducing WEHAB System Architecture"></img>
                                <div class="img-overlay">
                                    <div class="buttons">
                                        <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=8sheoGMsy3Q">Video</a>
                                        <a target="_blank" rel="noreferrer" href="/research/vibroaffect">Details</a>                                        
                                    </div>
                                </div>
                            </div>
                            <figcaption>
                                <div class="desc-post">
                                    <h2 class="title-post">
                                        <a href="/research/vibroaffect">
                                            VibroAffect
                                        </a>
                                    </h2>
                                </div>
                            </figcaption>
                        </figure>
                    </Col>
                </Row>      
            </Container>
        </Layout>
    )
}

export default ResearchPage

/*    <Layout>
            <h1>Research</h1>
            <Grid container>
              <Grid item xs={4}> 
                <Far />          
              </Grid>

              <Grid item xs={4}>
                <PIVplus />
              </Grid>

              <Grid item xs={4}>
                <PIV />
              </Grid>            
            </Grid>
            
            <Grid container className="bottom-grid"> 
              <Grid item xs={4}>
                <Hapland />
              </Grid>

              <Grid item xs={4}>
                <Wehab />
              </Grid>

            </Grid>

*/