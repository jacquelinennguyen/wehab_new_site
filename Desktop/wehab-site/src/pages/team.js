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
                                Assistant Professor of Computer Science, USC
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
                            <img class="reframe" src="https://github.com/jacquelinennguyen/wehab_new_site/blob/master/Desktop/wehab-site/src/team-imgs/antonio-hardan.jpg?raw=true" alt="Antonio Hardan"></img>
                            <h3 className="team-name">Antonio Hardan</h3>
                            <h4 className="team-title">
                                Professor of Psychiatry and Behavioral Sciences
                            </h4>
                            <div className="team-desc" id="team-desc">
                                Administrative Contact:
                                earchiba@stanford.edu
                            </div>                        
                        </Col>
                    </Row>
                    <Row>
                        <Col md={3} sm={6} xs={12}>
                            <img class="reframe" src="https://github.com/jacquelinennguyen/wehab_new_site/blob/master/Desktop/wehab-site/src/team-imgs/richard-harvey.jpg?raw=true" alt="Richard Harvey"></img>
                            <h3 className="team-name">Richard Harvey</h3>
                            <h4 className="team-title">
                                Associate Professor, SFSU
                            </h4>
                            <div className="team-desc" id="team-desc">
                                rharvey@sfsu.edu
                            </div>
                            <div className="team-nav">
                               
                            </div> 
                        </Col>
                        <Col md={3} sm={6} xs={12}>
                            <img class="reframe" src="https://github.com/jacquelinennguyen/wehab_new_site/blob/master/Desktop/wehab-site/src/team-imgs/katherine-isbister.jpg?raw=true" alt="Katherine Isbister"></img>
                            <h3 className="team-name">Katherine Isbister</h3>
                            <h4 className="team-title">
                                Professor of Computational Media, UCSC
                            </h4>
                            <div className="team-desc" id="team-desc">
                                kisbiste@ucsc.edu
                            </div>
                            <p className="team-nav">
                                <a href="https://www.katherineinterface.com/">Website</a>
                            </p>                         
                        </Col>
                        <Col md={3} sm={6} xs={12}>
                            <img class="reframe" src="https://github.com/jacquelinennguyen/wehab_new_site/blob/master/Desktop/wehab-site/src/team-imgs/keith-marzullo.jpg?raw=true" alt=""></img>
                            <h3 className="team-name">Keith Marzullo</h3>
                            <h4 className="team-title">
                                Dean, UMD College of Information Studies
                            </h4>
                            <div className="team-desc" id="team-desc">
                                marzullo@umd.edu
                            </div>
                            <p className="team-nav">

                            </p>                         
                        </Col>
                        <Col md={3} sm={6} xs={12}>
                            <img class="reframe" src="https://github.com/jacquelinennguyen/wehab_new_site/blob/master/Desktop/wehab-site/src/team-imgs/erik-peper.jpg?raw=true" alt="Erik Peper"></img>
                            <h3 className="team-name">Erik Peper</h3>
                            <h4 className="team-title">
                                Professor of Holistic Health, SFSU
                            </h4>
                            <div className="team-desc" id="team-desc">
                                erik.peper@gmail.com
                            </div>
                            <p className="team-nav">
                                <a href="https://biofeedbackhealth.org/">Website</a>
                                <a href="https://peperperspective.com/">Blog</a>
                            </p>                         
                        </Col>
                    </Row>
                    <Row>
                        <Col md={3} sm={6} xs={12}>
                            <img class="reframe" src="https://github.com/jacquelinennguyen/wehab_new_site/blob/master/Desktop/wehab-site/src/team-imgs/jennifer-phillips.jpg?raw=true" alt="Jennifer Phillips"></img>
                            <h3 className="team-name">Jennifer Phillips</h3>
                            <h4 className="team-title">
                                Clinical Professor of Psychiatry and Behavioral Sciences
                            </h4>
                            <div className="team-desc" id="team-desc">
                                jenphil@stanford.edu
                            </div>
                            <p className="team-nav">
                                <a href="https://med.stanford.edu/profiles/jennifer-phillips">Website</a>
                                
                            </p>                         
                        </Col>
                    </Row>
                </Container>
                <h2>Senior Lab Members</h2>
                <Container>
                    <Row>
                    <Col md={3} sm={6} xs={12}>
                            <img class="reframe" src="https://media-exp1.licdn.com/dms/image/C5603AQHJzCp8P19Qeg/profile-displayphoto-shrink_800_800/0?e=1608768000&v=beta&t=zjWkW91gY0-Qm6DvQGd26jizbGuxKNUnlHD7-bbnDHo" alt="Pardis Miri"></img>
                            <h3 className="team-name">Pardis "Paris" Miri</h3>
                            <h4 className="team-title">
                                Postdoctoral Research Fellow, Lab Director
                            </h4>
                            <div className="team-desc" id="team-desc">
                                parism@stanford.edu
                            </div>
                            <p className="team-nav">
                                <a href="https://paris.sites.ucsc.edu/">Website</a>
                                <a href="https://www.linkedin.com/in/pardis-paris-miri-b5531216/">Linkedin</a>
                                <a href="https://github.com/paris007">GitHub</a>
                            </p>                         
                        </Col>
                        <Col md={3} sm={6} xs={12}>
                            <img class="reframe" src="https://github.com/jacquelinennguyen/wehab_new_site/blob/master/Desktop/wehab-site/src/team-imgs/john-hegarty.png?raw=true" alt="John Hegarty"></img>
                            <h3 className="team-name">John Hegarty</h3>
                            <h4 className="team-title">
                                Postdoctoral Research Fellow
                            </h4>
                            <div className="team-desc" id="team-desc">
                                hegartyj@stanford.edu
                            </div>
                            <p className="team-nav">
                                
                                
                            </p>                         
                        </Col>
                        <Col md={3} sm={6} xs={12}>
                            <img class="reframe" src="https://github.com/jacquelinennguyen/wehab_new_site/blob/master/Desktop/wehab-site/src/team-imgs/andero-uusberg.jpg?raw=true" alt="Andero Uusberg"></img>
                            <h3 className="team-name">Andero Uusberg</h3>
                            <h4 className="team-title">
                                Postdoctoral Research Fellow
                            </h4>
                            <div className="team-desc" id="team-desc">
                                andero@stanford.edu
                            </div>
                            <p className="team-nav">
                                
                                
                            </p>                         
                        </Col>
                        <Col md={3} sm={6} xs={12}>
                            <img class="reframe" src="https://github.com/jacquelinennguyen/wehab_new_site/blob/master/Desktop/wehab-site/src/team-imgs/horia-margarit.jpg?raw=true" alt="Horia Margarit"></img>
                            <h3 className="team-name">Horia Margarit</h3>
                            <h4 className="team-title">
                                Postgraduate Researcher
                            </h4>
                            <div className="team-desc" id="team-desc">
                                
                            </div>
                            <p className="team-nav">
                                
                                
                            </p>                         
                        </Col>
                    </Row>
                    <Row>
                        <Col md={3} sm={6} xs={12}>
                            <img class="reframe" src="https://github.com/jacquelinennguyen/wehab_new_site/blob/master/Desktop/wehab-site/src/team-imgs/robert-flory.jpg?raw=true" alt="Robert Floy"></img>
                            <h3 className="team-name">Robert Floy</h3>
                            <h4 className="team-title">
                                Researcher
                            </h4>
                            <div className="team-desc" id="team-desc">
                                
                            </div>
                            <p className="team-nav">
                                
                            </p>                         
                        </Col>                        
                    </Row>
                </Container>
                <h2>Current Research Assistants</h2>
                <Container>
                    <Row>
                        <Col md={3} sm={6} xs={12}>
                            <img class="reframe" src="https://github.com/jacquelinennguyen/wehab_new_site/blob/master/Desktop/wehab-site/src/team-imgs/aman-malhotra.jpeg?raw=true" alt="Aman Malhotra"></img>
                            <h3 className="team-name">Aman Malhotra</h3>
                            <h4 className="team-title">
                                Undergraduate Researcher
                            </h4>
                            <div className="team-desc" id="team-desc">
                                
                            </div>
                            <p className="team-nav">
                                <a href="https://www.linkedin.com/in/aman-malhotra-024417153/">LinkedIn</a>
                                
                            </p>                         
                        </Col>
                        <Col md={3} sm={6} xs={12}>
                            <img class="reframe" src="/" alt="Name"></img>
                            <h3 className="team-name">Name</h3>
                            <h4 className="team-title">
                                Title
                            </h4>
                            <div className="team-desc" id="team-desc">
                                email
                            </div>
                            <p className="team-nav">
                                <a href="/">Website</a>
                                
                            </p>                         
                        </Col>
                        <Col md={3} sm={6} xs={12}>
                            <img class="reframe" src="https://media-exp1.licdn.com/dms/image/C4D03AQHIyiGHW_4D8g/profile-displayphoto-shrink_200_200/0?e=1608768000&v=beta&t=9KIkzTrx5Ylayy2JcSevVogjev66cMFlf1nIQOo6NpM" alt="Jacqueline Nguyen"></img>
                            <h3 className="team-name">Jacqueline Nguyen</h3>
                            <h4 className="team-title">
                                Postgraduate Researcher
                            </h4>
                            <div className="team-desc" id="team-desc">
                                beuyenj@g.ucla.edu
                            </div>
                            <p className="team-nav">
                                <a href="https://www.linkedin.com/in/jacqueline-n-928802b7/">LinkedIn</a>
                                <a href="https://github.com/jacquelinennguyen">GitHub</a>
                            </p>                         
                        </Col>
                        <Col md={3} sm={6} xs={12}>
                            <img class="reframe" src="/" alt="Name"></img>
                            <h3 className="team-name">Name</h3>
                            <h4 className="team-title">
                                Title
                            </h4>
                            <div className="team-desc" id="team-desc">
                                email
                            </div>
                            <p className="team-nav">
                                <a href="/">Website</a>
                                
                            </p>                         
                        </Col>
                    </Row>
                </Container>
                                
                <h2>Former Research Assistants</h2>
                <Container>
                    <Row>
                        <Col md={3} sm={6} xs={12}>
                            <img class="reframe" src="https://github.com/jacquelinennguyen/wehab_new_site/blob/master/Desktop/wehab-site/src/team-imgs/anusha-kuchibholta.png?raw=true" alt="Anusha Kuchibholta"></img>
                            <h3 className="team-name">Anusha Kuchibholta</h3>
                            <h4 className="team-title">
                                
                            </h4>
                            <div className="team-desc" id="team-desc">
                                
                            </div>
                            <p className="team-nav">
                                <a href="https://www.linkedin.com/in/anusha-kuchibhotla-418294172/">LinkedIn</a>
                                
                            </p>                         
                        </Col>
                        <Col md={3} sm={6} xs={12}>
                            <img class="reframe" src="/" alt="Name"></img>
                            <h3 className="team-name">Name</h3>
                            <h4 className="team-title">
                                Title
                            </h4>
                            <div className="team-desc" id="team-desc">
                                email
                            </div>
                            <p className="team-nav">
                                <a href="/">Website</a>
                                
                            </p>                         
                        </Col>
                        <Col md={3} sm={6} xs={12}>
                            <img class="reframe" src="/" alt="Name"></img>
                            <h3 className="team-name">Name</h3>
                            <h4 className="team-title">
                                Title
                            </h4>
                            <div className="team-desc" id="team-desc">
                                email
                            </div>
                            <p className="team-nav">
                                <a href="/">Website</a>
                                
                            </p>                         
                        </Col>
                        <Col md={3} sm={6} xs={12}>
                            <img class="reframe" src="/" alt="Name"></img>
                            <h3 className="team-name">Name</h3>
                            <h4 className="team-title">
                                Title
                            </h4>
                            <div className="team-desc" id="team-desc">
                                email
                            </div>
                            <p className="team-nav">
                                <a href="/">Website</a>
                                
                            </p>                         
                        </Col>
                    </Row>  
                </Container>
                              
        </Layout>
    )
}

export default TeamPage