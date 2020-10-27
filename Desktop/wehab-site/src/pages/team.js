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
{/* Senior Lab Members */}
            <h2>Senior Lab Members</h2>
                <Container>
                    <Row>
                    <Col md={3} sm={6} xs={12}>
                            <img class="reframe" src="https://github.com/jacquelinennguyen/wehab_new_site/blob/master/Desktop/wehab-site/src/team-imgs/PardisMiri.jpg?raw=true" alt="Pardis Miri"></img>
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
                                Senior Research Fellow, University of Tartu
                            </h4>
                            <div className="team-desc" id="team-desc">
                                andero.uusberg@ut.ee
                            </div>
                            <p className="team-nav">
                                <a href="https://www.ut.ee/en/kontakt/psuhholoogia-instituut">Website</a>
                                
                            </p>                         
                        </Col>
                        <Col md={3} sm={6} xs={12}>
                            <img class="reframe" src="https://github.com/jacquelinennguyen/wehab_new_site/blob/master/Desktop/wehab-site/src/team-imgs/horia-margarit.jpg?raw=true" alt="Horia Margarit"></img>
                            <h3 className="team-name">Horia Margarit</h3>
                            <h4 className="team-title">
                                Stanford Postgraduate Researcher
                            </h4>
                            <div className="team-desc" id="team-desc">
                                horia@alumni.stanford.edu
                            </div>
                            <p className="team-nav">
                                
                                
                            </p>                         
                        </Col>
                    </Row>
                    <Row>
                        <Col md={3} sm={6} xs={12}>
                            <img class="reframe" src="https://github.com/jacquelinennguyen/wehab_new_site/blob/master/Desktop/wehab-site/src/team-imgs/robert-flory.jpg?raw=true" alt="Robert Flory"></img>
                            <h3 className="team-name">Robert Flory</h3>
                            <h4 className="team-title">
                                Researcher
                            </h4>
                            <div className="team-desc" id="team-desc">
                                
                            </div>
                            <p className="team-nav">
                                <a href="https://www.linkedin.com/in/robert-flory-62937293/">LinkedIn</a>
                            </p>                         
                        </Col>                        
                    </Row>
                </Container>
{/* Professors */}
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
                        <Col md={3} sm={6} xs={12}>
                            <img class="reframe" src="https://github.com/jacquelinennguyen/wehab_new_site/blob/master/Desktop/wehab-site/src/team-imgs/david-schneider.jpg?raw=true" alt="David Schneider"></img>
                            <h3 className="team-name">David Schneider</h3>
                            <h4 className="team-title">
                                Professor of Microbiology and Immunology
                            </h4>
                            <div className="team-desc" id="team-desc">
                                david.schneider@stanford.edu
                            </div>
                            <p className="team-nav">
                                <a href="http://schneiderlab.stanford.edu/">Website</a>
                                
                            </p>                         
                        </Col>
                        <Col md={3} sm={6} xs={12}>
                            <img class="reframe" src="https://github.com/jacquelinennguyen/wehab_new_site/blob/master/Desktop/wehab-site/src/team-imgs/marlo-kohn.jpg?raw=true" alt="Marlo Kohn"></img>
                            <h3 className="team-name">Marlo Kohn</h3>
                            <h4 className="team-title">
                                Associate Director of the Product Realization Lab
                            </h4>
                            <div className="team-desc" id="team-desc">
                                marlod@stanford.edu
                            </div>
                            <p className="team-nav">
                                <a href="https://extreme.stanford.edu/team/marlo-kohn/">Website</a>
                                
                            </p>                         
                        </Col>
                        <Col md={3} sm={6} xs={12}>
                            <img class="reframe" src="https://profiles.stanford.edu/proxy/api/cap/profiles/84156/resources/profilephoto/350x350.1509565007885.jpg" alt="Dan Yamins"></img>
                            <h3 className="team-name">Dan Yamins</h3>
                            <h4 className="team-title">
                                Associate Professor of Psychology and Computer Science
                            </h4>
                            <div className="team-desc" id="team-desc">
                                yamins@stanford.edu
                                dyamins@gmail.com
                            </div>
                            <p className="team-nav">
                                <a href="https://web.stanford.edu/~yamins/">Website</a>
                                
                            </p>                         
                        </Col>
                    </Row>
                    <Row>
                        <Col md={3} sm={6} xs={12}>
                            <img class="reframe" src="https://github.com/jacquelinennguyen/wehab_new_site/blob/master/Desktop/wehab-site/src/team-imgs/tali-ball.jpg?raw=true" alt="Tali Ball"></img>
                            <h3 className="team-name">Tali Ball</h3>
                            <h4 className="team-title">
                                Instructor in Psychiatry and Behavioral Sciences
                            </h4>
                            <div className="team-desc" id="team-desc">
                                tmball@stanford.edu
                            </div>
                            <p className="team-nav">
                                <a href="https://stanfordstarlab.com/">Website</a>
                                
                            </p>                         
                        </Col>
                    </Row>
                </Container>
{/* Current Research Assistants */}
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
                                Mathematical and Computational Science, B.S. candidate
                            </div>
                            <p className="team-nav">
                                <a href="https://www.linkedin.com/in/aman-malhotra-024417153/">LinkedIn</a>
                                
                            </p>                         
                        </Col>
                        <Col md={3} sm={6} xs={12}>
                            <img class="reframe" src="https://github.com/jacquelinennguyen/wehab_new_site/blob/master/Desktop/wehab-site/src/team-imgs/mehul-arora.jpeg?raw=true" alt="Mehul Arora"></img>
                            <h3 className="team-name">Mehul Arora</h3>
                            <h4 className="team-title">
                                Undergraduate Researcher
                            </h4>
                            <div className="team-desc" id="team-desc">
                                Computer Science, B.S. candidate
                                mehularora@stanford.edu
                            </div>
                            <p className="team-nav">
                                <a href="https://www.linkedin.com/in/mehul-arora/">LinkedIn</a>
                                
                            </p>                         
                        </Col>
                        <Col md={3} sm={6} xs={12}>
                            <img class="reframe" src="https://media-exp1.licdn.com/dms/image/C4D03AQHIyiGHW_4D8g/profile-displayphoto-shrink_200_200/0?e=1608768000&v=beta&t=9KIkzTrx5Ylayy2JcSevVogjev66cMFlf1nIQOo6NpM" alt="Jacqueline Nguyen"></img>
                            <h3 className="team-name">Jacqueline Nguyen</h3>
                            <h4 className="team-title">
                                Postgraduate Researcher
                                
                            </h4>
                            <div className="team-desc" id="team-desc">
                                Cognitive Science, B.S., UCLA
                            </div>
                            <p className="team-nav">
                                <a href="https://www.linkedin.com/in/jacqueline-n-928802b7/">LinkedIn</a>
                                <a href="https://github.com/jacquelinennguyen">GitHub</a>
                            </p>                         
                        </Col>
                        
                    </Row>
                </Container>
                                
                <h2>Former Research Assistants</h2>
                <Container>
                    <Row>
                    <Col md={3} sm={6} xs={12}>
                            <img class="reframe" src="https://github.com/jacquelinennguyen/wehab_new_site/blob/master/Desktop/wehab-site/src/team-imgs/shree-reddy.jpeg?raw=true" alt="Shree Reddy"></img>
                            <h3 className="team-name">Shree Reddy</h3>
                            <h4 className="team-title">
                                
                            </h4>
                            <div className="team-desc" id="team-desc">
                                
                            </div>
                            <p className="team-nav">
                                <a href="https://www.linkedin.com/in/shree-reddy-7221421b2/">LinkedIn</a>
                                
                            </p>                         
                        </Col>
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
                            <img class="reframe" src="https://github.com/jacquelinennguyen/wehab_new_site/blob/master/Desktop/wehab-site/src/team-imgs/lindsay-jamieson.jpg?raw=true" alt="Lindsay Jamieson"></img>
                            <h3 className="team-name">Lindsay Jamieson</h3>
                            <h4 className="team-title">
                                
                            </h4>
                            <div className="team-desc" id="team-desc">
                                
                            </div>
                            <p className="team-nav">
                                <a href="https://www.linkedin.com/in/lindsay-jamieson/">LinkedIn</a>
                                
                            </p>                         
                        </Col>
                        <Col md={3} sm={6} xs={12}>
                            <img class="reframe" src="https://github.com/jacquelinennguyen/wehab_new_site/blob/master/Desktop/wehab-site/src/team-imgs/ishan-goyal.jpg?raw=true" alt="Ishan Goyal"></img>
                            <h3 className="team-name">Ishan Goyal</h3>
                            <h4 className="team-title">
                                
                            </h4>
                            <div className="team-desc" id="team-desc">
                                
                            </div>
                            <p className="team-nav">
                                <a href="https://www.linkedin.com/in/ishan-g-2b6302190/">LinkedIn</a>
                                
                            </p>                         
                        </Col>
                        
                    </Row> 
                    <Row>
                    <Col md={3} sm={6} xs={12}>
                            <img class="reframe" src="https://github.com/jacquelinennguyen/wehab_new_site/blob/master/Desktop/wehab-site/src/team-imgs/alyssa-jackson.jpg?raw=true" alt="Alyssa Jackson"></img>
                            <h3 className="team-name">Alyssa Jackson</h3>
                            <h4 className="team-title">
                                Software Engineer Specialist at SAE International
                            </h4>
                            <div className="team-desc" id="team-desc">
                                Psychology, B.A., ASU
                            </div>
                            <p className="team-nav">
                                <a href="https://www.linkedin.com/in/alyssa-riah-jackson/">LinkedIn</a>
                                
                            </p>                         
                        </Col>
                        <Col md={3} sm={6} xs={12}>
                            <img class="reframe" src="https://github.com/jacquelinennguyen/wehab_new_site/blob/master/Desktop/wehab-site/src/team-imgs/emily-jusuf.jpeg?raw=true" alt="Emily Jusuf"></img>
                            <h3 className="team-name">Emily Jusuf</h3>
                            <h4 className="team-title">
                                
                            </h4>
                            <p className="team-desc" id="team-desc">
                                Symbolic Systems, B.S.
                                <br />Comparative Literature, B.A.
                            </p>
                            <p className="team-nav">
                                <a href="https://www.linkedin.com/in/ejusuf/">LinkedIn</a>
                                
                            </p>                         
                        </Col>
                        <Col md={3} sm={6} xs={12}>
                            <img class="reframe" src="https://github.com/jacquelinennguyen/wehab_new_site/blob/master/Desktop/wehab-site/src/team-imgs/aditi-gupta.jpg?raw=true" alt="Aditi Gupta"></img>
                            <h3 className="team-name">Aditi Gupta</h3>
                            <h4 className="team-title">
                                Undergraduate Researcher at Dartmouth
                            </h4>
                            <div className="team-desc" id="team-desc">
                                
                            </div>
                            <p className="team-nav">
                                <a href="https://www.linkedin.com/in/aditi-gupta-72b8261a5/">LinkedIn</a>
                                
                            </p>                         
                        </Col>
                        <Col md={3} sm={6} xs={12}>
                            <img class="reframe" src="https://github.com/jacquelinennguyen/wehab_new_site/blob/master/Desktop/wehab-site/src/team-imgs/aidan-levin.jpg?raw=true" alt="Aidan Levin"></img>
                            <h3 className="team-name">Aidan Levin</h3>
                            <h4 className="team-title">
                                
                            </h4>
                            <div className="team-desc" id="team-desc">
                                
                            </div>
                            <p className="team-nav">
                                
                                
                            </p>                         
                        </Col>
                        
                    </Row> 
                    <Row>
                        <Col md={3} sm={6} xs={12}>
                            <img class="reframe" src="https://github.com/jacquelinennguyen/wehab_new_site/blob/master/Desktop/wehab-site/src/team-imgs/agata-kelman.jpg?raw=true" alt="Agata Kelman"></img>
                            <h3 className="team-name">Agata Kelman</h3>
                            <h4 className="team-title">
                                
                            </h4>
                            <div className="team-desc" id="team-desc">
                                Biopsychology, B.S., UC Davis
                            </div>
                            <p className="team-nav">
                                <a href="https://www.agataemiliakelman.com/">Website</a>
                                <a href="https://www.linkedin.com/in/agata-emilia-kelman-b49988103/">LinkedIn</a>
                            </p>                         
                        </Col>
                        <Col md={3} sm={6} xs={12}>
                            <img class="reframe" src="https://github.com/jacquelinennguyen/wehab_new_site/blob/master/Desktop/wehab-site/src/team-imgs/candace-hagey.jpeg?raw=true" alt="Candace Hagey"></img>
                            <h3 className="team-name">Candace Hagey</h3>
                            <h4 className="team-title">
                                Senior Clinical Trial Coordinator at Alector
                            </h4>
                            <div className="team-desc" id="team-desc">
                                Neuroscience and Human Biology & Society, with a Concentration in Bioethics/Public Science Policy, B.S., UCLA
                            </div>
                            <p className="team-nav">
                                <a href="https://www.linkedin.com/in/candace-hagey/">LinkedIn</a>
                                
                            </p>                         
                        </Col>
                        <Col md={3} sm={6} xs={12}>
                            <img class="reframe" src="https://github.com/jacquelinennguyen/wehab_new_site/blob/master/Desktop/wehab-site/src/team-imgs/joshua-chon.jpg?raw=true" alt="Alyssa Jackson"></img>
                            <h3 className="team-name">Joshua Chon</h3>
                            <h4 className="team-title">
                                
                            </h4>
                            <div className="team-desc" id="team-desc">
                                Psychology, B.S., Santa Clara University
                            </div>
                            <p className="team-nav">
                                
                                
                            </p>                         
                        </Col>
                        <Col md={3} sm={6} xs={12}>
                            <img class="reframe" src="https://github.com/jacquelinennguyen/wehab_new_site/blob/master/Desktop/wehab-site/src/team-imgs/akansha-shrivastava.jpg?raw=true" alt="Akanksha Shrivastava"></img>
                            <h3 className="team-name">Akanksha Shrivastava</h3>
                            <h4 className="team-title">
                                Design Researcher - Tech at Walmart
                            </h4>
                            <div className="team-desc" id="team-desc">
                                Human Computer Interaction, Master's, UMD College Park
                            </div>
                            <p className="team-nav">
                                <a href="https://www.linkedin.com/in/akanksha1811/">LinkedIn</a>
                                
                            </p>                         
                        </Col>
                        
                    </Row> 
                    <Row>
                        <Col md={3} sm={6} xs={12}>
                            <img class="reframe" src="https://github.com/jacquelinennguyen/wehab_new_site/blob/master/Desktop/wehab-site/src/team-imgs/yi-hsuan-wu.jpg?raw=true" alt="Yi-Hsuan Wu"></img>
                            <h3 className="team-name">Yi-Hsuan Wu</h3>
                            <h4 className="team-title">
                                UX Designer/Researcher at Fuzz Interactive
                            </h4>
                            <div className="team-desc" id="team-desc">
                                Industrial Health, PhD, UMich School of Public Health
                            </div>
                            <p className="team-nav">
                                
                                <a href="https://www.linkedin.com/in/yihsuanwu/">LinkedIn</a>
                                
                            </p>                         
                        </Col>
                        <Col md={3} sm={6} xs={12}>
                            <img class="reframe" src="https://github.com/jacquelinennguyen/wehab_new_site/blob/master/Desktop/wehab-site/src/team-imgs/eli-rice.png?raw=true" alt="Eli Rice"></img>
                            <h3 className="team-name">Eli Rice</h3>
                            <h4 className="team-title">
                                Clinical Research Coordinator at Stanford University School of Medicine
                            </h4>
                            <div className="team-desc" id="team-desc">
                                Psychology, B.A., Wake Forest University
                            </div>
                            <p className="team-nav">
                                <a href="https://www.linkedin.com/in/eli-rice-402929166/">LinkedIn</a>
                                
                            </p>                         
                        </Col>
                        <Col md={3} sm={6} xs={12}>
                            <img class="reframe" src="https://github.com/jacquelinennguyen/wehab_new_site/blob/master/Desktop/wehab-site/src/imgs/1.png?raw=true" alt="Sae Du"></img>
                            <h3 className="team-name">Sae Du</h3>
                            <h4 className="team-title">
                                
                            </h4>
                            <div className="team-desc" id="team-desc">
                                
                            </div>
                            <p className="team-nav">
                                
                                
                            </p>                         
                        </Col>
                        <Col md={3} sm={6} xs={12}>
                            <img class="reframe" src="https://github.com/jacquelinennguyen/wehab_new_site/blob/master/Desktop/wehab-site/src/team-imgs/anna-speder.png?raw=true" alt="Anna Speder"></img>
                            <h3 className="team-name">Anna Speder</h3>
                            <h4 className="team-title">
                                
                            </h4>
                            <div className="team-desc" id="team-desc">
                                Psychology, B.A., SFSU
                            </div>
                            <p className="team-nav">
                                <a href="https://www.linkedin.com/in/anna-speder-334a54172/">LinkedIn</a>
                                
                            </p>                         
                        </Col>
                        
                    </Row> 
                    <Row>
                        <Col md={3} sm={6} xs={12}>
                            <img class="reframe" src="https://github.com/jacquelinennguyen/wehab_new_site/blob/master/Desktop/wehab-site/src/team-imgs/satvir-basran.png?raw=true" alt="Satvir Basran"></img>
                            <h3 className="team-name">Satvir Basran</h3>
                            <h4 className="team-title">
                                
                            </h4>
                            <div className="team-desc" id="team-desc">
                                Political Science / Business Administrative Stuies, Marketing, Bachelor's, UC Riverside
                            </div>
                            <p className="team-nav">
                                <a href="https://www.linkedin.com/in/satvir-basran-96021111a/">LinkedIn</a>
                                
                            </p>                         
                        </Col>
                        <Col md={3} sm={6} xs={12}>
                            <img class="reframe" src="https://github.com/jacquelinennguyen/wehab_new_site/blob/master/Desktop/wehab-site/src/team-imgs/eman-magzoub.png?raw=true" alt="Eman Magzoub"></img>
                            <h3 className="team-name">Eman Magzoub</h3>
                            <h4 className="team-title">
                                
                            </h4>
                            <div className="team-desc" id="team-desc">
                                Psychology, B.A., UCLA
                            </div>
                            <p className="team-nav">
                                
                            </p>                         
                        </Col>
                        <Col md={3} sm={6} xs={12}>
                            <img class="reframe" src="https://github.com/jacquelinennguyen/wehab_new_site/blob/master/Desktop/wehab-site/src/team-imgs/elaheh-salehi.jpeg?raw=true" alt="Elaheh Salehi"></img>
                            <h3 className="team-name">Elaheh Salehi</h3>
                            <h4 className="team-title">
                                
                            </h4>
                            <div className="team-desc" id="team-desc">
                                Psychology, B.A., Sonoma State University
                            </div>
                            <p className="team-nav">
                                
                                
                            </p>                         
                        </Col>
                        <Col md={3} sm={6} xs={12}>
                            <img class="reframe" src="https://github.com/jacquelinennguyen/wehab_new_site/blob/master/Desktop/wehab-site/src/team-imgs/talia-regenstein.jpeg?raw=true" alt="Talia Regenstein"></img>
                            <h3 className="team-name">Talia Regenstein</h3>
                            <h4 className="team-title">
                                Market Research Associate at Guidepoint
                            </h4>
                            <div className="team-desc" id="team-desc">
                                Psychology, B.A., Bates College
                            </div>
                            <p className="team-nav">
                                <a href="https://www.linkedin.com/in/talia-regenstein-960b13132/">LinkedIn</a>
                                
                            </p>                         
                        </Col>
                        <Col md={3} sm={6} xs={12}>
                            <img class="reframe" src="https://media-exp1.licdn.com/dms/image/C5603AQGHcpIBVsK20A/profile-displayphoto-shrink_200_200/0?e=1608768000&v=beta&t=02_V5S8aaEfRIB0lqiTMMPh0RupS8aQn2g9d_V4PImo" alt="Ben Voogd"></img>
                            <h3 className="team-name">Benjamin Voogd</h3>
                            <h4 className="team-title">
                                Behavior Technician at ACES
                            </h4>
                            <div className="team-desc" id="team-desc">
                                
                            </div>
                            <p className="team-nav">
                                <a href="https://www.linkedin.com/in/benvoogd/">LinkedIn</a>
                                
                            </p>                         
                        </Col>
                    </Row>                                                             
                </Container>
                              
        </Layout>
    )
}

export default TeamPage