import React from "react"
import {Link} from 'gatsby'
import Layout from '../components/layout'
import TeamStyles from '../styles/team.scss'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const TeamPage = () => {
    return (
        <Layout>
            <h1>Team</h1>
                <Container>
                    <Row>
                        <Col md={3} sm={6} xs={12}>
                            <img class="reframe" src="https://wehab.stanford.edu/wp-content/uploads/2018/10/pardis_miri-640x640.png" alt=""></img>
                            <h3 className="team-name">Pardis "Paris" Miri</h3>
                            <h4 className="team-title">
                                Postdoctoral Fellow
                            </h4>
                            <p className= "team-desc">
                                <a href="/">LinkedIn</a>
                                <a href="/">GitHub</a>
                                <a href="/cv">CV</a>
                            </p>
                        </Col>
                        <Col md={3} sm={6} xs={12}>
                            <img class="reframe" src="https://wehab.stanford.edu/wp-content/uploads/2018/10/pardis_miri-640x640.png" alt=""></img>
                            <h3 className="team-name">Pardis "Paris" Miri</h3>
                            <h4 className="team-title">
                                Postdoctoral Fellow
                            </h4>
                            <p className="team-desc">
                                <a href="/">LinkedIn</a>
                                <a href="/">GitHub</a>
                            </p>                        
                        </Col>
                        <Col md={3} sm={6} xs={12}>
                            <img class="reframe" src="https://wehab.stanford.edu/wp-content/uploads/2018/10/pardis_miri-640x640.png" alt=""></img>
                            <h3 className="team-name">Pardis "Paris" Miri</h3>
                            <h4 className="team-title">
                                Postdoctoral Fellow
                            </h4>
                            <p className="team-desc">
                                <a href="/">LinkedIn</a>
                                <a href="/">GitHub</a>
                            </p>                        
                        </Col>
                        <Col md={3} sm={6} xs={12}>
                            <img class="reframe" src="https://wehab.stanford.edu/wp-content/uploads/2018/10/pardis_miri-640x640.png" alt=""></img>
                            <h3 className="team-name">Pardis "Paris" Miri</h3>
                            <h4 className="team-title">
                                Postdoctoral Fellow
                            </h4>
                            <p className="team-desc">
                                <a href="/">LinkedIn</a>
                                <a href="/">GitHub</a>
                            </p>                        
                        </Col>
                    </Row>
                    <Row>
                        <Col md={3} sm={6} xs={12}>
                            <img class="reframe" src="https://wehab.stanford.edu/wp-content/uploads/2018/10/pardis_miri-640x640.png" alt=""></img>
                            <h3 className="team-name">Pardis "Paris" Miri</h3>
                            <h4 className="team-title">
                                Postdoctoral Fellow
                            </h4>
                            <p className="team-desc">
                                <a href="/">LinkedIn</a>
                                <a href="/">GitHub</a>
                            </p> 
                        </Col>
                        <Col md={3} sm={6} xs={12}>
                            <img class="reframe" src="https://wehab.stanford.edu/wp-content/uploads/2018/10/pardis_miri-640x640.png" alt=""></img>
                            <h3 className="team-name">Pardis "Paris" Miri</h3>
                            <h4 className="team-title">
                                Postdoctoral Fellow
                            </h4>
                            <p className="team-desc">
                                <a href="/">LinkedIn</a>
                                <a href="/">GitHub</a>
                            </p>                         
                        </Col>
                        <Col md={3} sm={6} xs={12}>
                            <img class="reframe" src="https://wehab.stanford.edu/wp-content/uploads/2018/10/pardis_miri-640x640.png" alt=""></img>
                            <h3 className="team-name">Pardis "Paris" Miri</h3>
                            <h4 className="team-title">
                                Postdoctoral Fellow
                            </h4>
                            <p className="team-desc">
                                <a href="/">LinkedIn</a>
                                <a href="/">GitHub</a>
                            </p>                         
                        </Col>
                        <Col md={3} sm={6} xs={12}>
                            <img class="reframe" src="https://wehab.stanford.edu/wp-content/uploads/2018/10/pardis_miri-640x640.png" alt=""></img>
                            <h3 className="team-name">Pardis "Paris" Miri</h3>
                            <h4 className="team-title">
                                Postdoctoral Fellow
                            </h4>
                            <p className="team-desc">
                                <a href="/">LinkedIn</a>
                                <a href="/">GitHub</a>
                            </p>                         
                        </Col>
                    </Row>
                </Container>
        </Layout>
    )
}

export default TeamPage