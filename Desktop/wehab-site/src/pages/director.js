import React from "react"
import {Link} from 'gatsby'
import Layout from '../components/layout'
import DirectStyles from '../styles/director.scss'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const DirectorPage = () => {
    return (
        <Layout>
            <Container>
                <Row>
                    <Col md={8}>
                        <h2>
                            Hi, I'm Paris.
                        </h2>
                    
                        <p>
                            I am the director of Wehab lab and a postdoctoral fellow at Stanford University, working at the intersection of human computer interaction and affective science. I am also a member of the <a href="https://hci.stanford.edu/">Stanford HCI group</a> as well as the  <a href="https://spl.stanford.edu/">Stanford Psychophysiology Lab (SPL)</a>, directed by Professor James Gross, whose research underlies much of what we now know about emotion regulation.
                        </p>
                        <p>
                            I am also the principal investigator of a large multi-disciplinary project to design, build, and evaluate a wearable system tailored to the needs of children diagnosed with autism spectrum disorder. This system aims to empower them to manage their problem behaviors in a more adaptive way. This project involves collaborations between the departments of Computer Science, Psychology, and the School of Medicine at Stanford University. We are building an end-to-end scalable and evolvable platform, from scratch, with the support of many bright students and faculty members.
                        </p>
                        <p>
                            At Wehab lab I leads a multidisciplinary research team (WEHAB team) aimed at the design, engineering, and evaluation of technologies to help people to successfully manage their emotions, moods, and stress responses.  I am  interested in both neurotypical and neurodiverse populations.
                        </p>
                        <p>
                            Specifically, my work focuses on using theoretically-grounded and data-driven approaches to engineer end-to-end systems that empower people to regulate their unwanted affective experiences and behaviors in their everyday lives. Then, by running carefully-designed clinical experiments, I examine both the average effect (whether the system was effective in changing affect) and the heterogeneous effect (for whom the system was effective) of my systems. The results of this research will inform practice about what types of interventions are more useful for what type of trait and state individual differences, and will reduce the use of drugs in personalized mental healthcare.
                        </p>
                        <p>
                            My research is supported by funding both from the National Science Foundation and from the Stanford Wearable Electronics (eWear) Initiative (the project for which she is the lead Principal Investigator). With this funding, I have managed a large set of undergraduate and graduate student researchers, overseeing their work in the development of the technology and experiments, conducting the necessary literature reviews and experimental evaluations, and in writing up and publishing the results as well as in preparing and making presentations to stakeholders and professional organizations.
                        </p>

                        
                    </Col>
                    <Col md={4}>
                        <img class="reframe" src="https://github.com/jacquelinennguyen/wehab_new_site/blob/master/Desktop/wehab-site/src/team-imgs/PardisMiri.jpg?raw=true" alt="Pardis Miri"></img>
                        <div>
                            <ul class="dir-links">
                                <li>
                                    <a class="dir-nav-link" target="_blank" href="/publications">Publications</a>
                                </li>
                                
                                <li>
                                    <a class="dir-nav-link" target="_blank" href="/cv">CV</a>
                                </li>
                                
                                <li>
                                    <a class="dir-nav-link" target="_blank" href="https://scholar.google.com/citations?user=wqIG4Q4AAAAJ&hl=en#">Google Scholar</a>
                                </li>
                                
                                <li>
                                    <a class="dir-nav-link" target="_blank" href="https://www.linkedin.com/in/pardis-paris-miri-b5531216/">LinkedIn</a>
                                </li>
                            </ul>
                        </div>
                        
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default DirectorPage