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
            <h2>Professors</h2>
                <Container>
                    <Row>
                        <Col md={3} sm={6} xs={12}>
                            <img class="reframe" src="https://raw.githubusercontent.com/jacquelinennguyen/wehab_new_site/master/Desktop/wehab-site/src/team-imgs/heather-culbertson.jpg" alt="Heather Culbertson"></img>
                            <h3 className="team-name">Heather Culbertson</h3>
                            <h4 className="team-title">
                                Assistant Professor of Computer Science at USC
                            </h4>
                            <p id="team-desc" className="team-desc">
                                hculbert@usc.edu
                            </p>
                            <p className= "team-nav">
                                <a href="https://sites.usc.edu/culbertson/">Website</a>
                            </p>
                        </Col>
                        <Col md={3} sm={6} xs={12}>
                            <img class="reframe" src="https://raw.githubusercontent.com/jacquelinennguyen/wehab_new_site/master/Desktop/wehab-site/src/team-imgs/lawrence-fung.jpg" alt="Lawrence Fung"></img>
                            <h3 className="team-name">Lawrence Fung</h3>
                            <h4 className="team-title">
                                Assistant Professor of Psychiatry and Behavioral Sciences
                            </h4>
                            <p className="team-desc" id="team-desc">
                                lkfung@stanford.edu
                            </p>
                            <p className="team-nav">
                                <a href="http://med.stanford.edu/funglab.html">Website</a>
                            </p>                        
                        </Col>
                        <Col md={3} sm={6} xs={12}>
                            <img class="reframe" src="https://raw.githubusercontent.com/jacquelinennguyen/wehab_new_site/master/Desktop/wehab-site/src/team-imgs/james-gross.jpg" alt="James Gross"></img>
                            <h3 className="team-name">James Gross</h3>
                            <h4 className="team-title">
                                Professor of Psychology
                            </h4>
                            <p className="team-desc" id="team-desc">
                                gross@stanford.edu
                            </p>
                            <p className="team-nav">
                                <a href="https://spl.stanford.edu/">Website</a>
                                
                            </p>                        
                        </Col>
                        <Col md={3} sm={6} xs={12}>
                            <img class="reframe" src="/" alt="Antonio Hardan"></img>
                            <h3 className="team-name">Antonio Hardan</h3>
                            <h4 className="team-title">
                                Professor of Psychiatry and Behavioral Sciences
                            </h4>
                            <div className="team-desc" id="team-desc">
                                Administrative Contact:
                                earchiba@stanford.edu
                            </div>
                            <p className="team-nav">
                                <a href="/">LinkedIn</a>
                                <a href="/">GitHub</a>
                            </p>                        
                        </Col>
                    </Row>
                    <Row>
                        <Col md={3} sm={6} xs={12}>
                            <img class="reframe" src="/" alt="Richard Harvey"></img>
                            <h3 className="team-name">Richard Harvey</h3>
                            <h4 className="team-title">
                                Postdoctoral Fellow
                            </h4>
                            
                            <p className="team-desc">
                                <a href="https://spl.stanford.edu/">Website</a>
                            </p> 
                        </Col>
                        <Col md={3} sm={6} xs={12}>
                            <img class="reframe" src="https://wehab.stanford.edu/wp-content/uploads/2018/10/pardis_miri-640x640.png" alt=""></img>
                            <h3 className="team-name">Katherine Isbister</h3>
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
                            <h3 className="team-name">Keith Marzullo</h3>
                            <h4 className="team-title">
                                Postdoctoral Fellow
                            </h4>
                            <p className="team-desc">
                                <a href="/">LinkedIn</a>
                                <a href="/">GitHub</a>
                            </p>                         
                        </Col>
                        <Col md={3} sm={6} xs={12}>
                            <img class="reframe" src="https://media-exp1.licdn.com/dms/image/C5603AQHJzCp8P19Qeg/profile-displayphoto-shrink_800_800/0?e=1608768000&v=beta&t=zjWkW91gY0-Qm6DvQGd26jizbGuxKNUnlHD7-bbnDHo" alt=""></img>
                            <h3 className="team-name">Erik Peper</h3>
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