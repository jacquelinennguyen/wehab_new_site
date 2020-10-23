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
                        <h4>
                            I am the principal investigator of a large multi-disciplinary project
                        </h4>
                        <p>
                             to design, build, and evaluate a wearable system tailored to the needs of children diagnosed with autism spectrum disorder. This system aims to empower them to manage their problem behaviors in a more adaptive way. This project involves collaborations between the departments of Computer Science, Psychology, and the School of Medicine at Stanford University. We are building an end-to-end scalable and evolvable platform, from scratch, with the support of many bright students and faculty members.
                        </p>
                        <p>
                            I am always looking for motivated research assistants. Email me at parism@stanford.edu, if you are interested. 
                        </p>

                        <ul class="dir-links">
                            <li>
                                <a class="link" target="_blank" href="/publications">Publications</a>
                            </li>
                            <li>
                                <a class="link" target="_blank" href="/cv">CV</a>
                            </li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <img class="reframe" src="https://media-exp1.licdn.com/dms/image/C5603AQHJzCp8P19Qeg/profile-displayphoto-shrink_200_200/0?e=1608768000&v=beta&t=cHoiB3ybgcahWBEOdVLq1Z4Xq9Lg-AmuPUhi4aZou_4" alt="Pardis Miri"></img>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default DirectorPage