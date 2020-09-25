import React from "react"
// import {Link} from 'gatsby'
import Layout from '../components/layout'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// creates CVPage React component
const CVPage = () => {
  return (
    <Layout>
      <body>
        <h1>Pardis Paris Miri, PhD</h1>
        <h2>Postdoctoral Research Fellow, Stanford University</h2>
        <p>
        parism@stanford.edu · 858-740-4178 · <a href="https://www.linkedin.com/in/pardis-paris-miri-b5531216/">LinkedIn</a> · <a href="https://github.com/paris007">GitHub</a>
        </p>
        <hr></hr>
        <p>
        Pardis Miri, PhD, is a postdoctoral fellow at Stanford University, 
        working at the intersection of human computer interaction and affective science.
         She is a member of the Stanford Psychophysiology Lab (SPL), directed by Professor James Gross,
         whose research underlies much of what we now know about emotion regulation.
         At SPL, Dr. Miri leads a multidisciplinary research team (WEHAB team) aimed at
         the design, engineering, and evaluation of technologies to help people to successfully manage their emotions, moods, and stress responses. She is interested in both neurotypical and neurodiverse populations.
        </p>
        <p>
        Specifically, her work focuses on using theoretically-grounded and data-driven approaches to end-to-end engineer systems that empower people to regulate their unwanted affective experiences and behaviors in their everyday lives. Then, by running carefully-designed clinical experiments, she examines both the average effect (whether the system was effective in changing affect) and the heterogeneous effect (for whom the system was effective). The results of this research will inform practice about what types of interventions are more useful for what type of trait and state individual differences, and will reduce the use of drugs in personalized mental healthcare. 
        </p>
        <p>
            Dr. Miri’s research is supported by funding both from the National Science Foundation and from the Stanford Wearable Electronics (eWear) Initiative (the project for which she is the lead Principal Investigator). 
        </p>
        <hr></hr>
        <Row>
            <Col md={2}></Col>
            <Col>
                <h3>Education</h3>
            </Col>
        </Row>
        <Row>
            <Col md={2} style={{textAlign:"right"}}>
                2019-present
            </Col>
            <Col>
                <p>
                    <b>Stanford University</b>, Stanford, CA 
                    <br />Postdoctoral, Psychology and Computer Science 
                    <br />Supervisors: Profs. James Gross and Keith Marzullo.
                </p>
            </Col>
        </Row>
        <Row>
            <Col md={2} style={{textAlign:"right"}}>
                2013-2019
            </Col>
            <Col>
                <b>University of California-Santa Cruz</b>, Santa Cruz, CA 
                Ph.D., Computer Science (Human Computer Interaction) 
                Dissertation: <i>Using Technology to Regulate Affect: A Multidisciplinary Perspective</i> - funded by Intel Labs and NSF (Award No.CNS-1813982) 
                Committee: Profs. Katherine Isbister (Advisor), James Gross (Co-advisor), Keith Marzullo (Co-advisor), Jim Whitehead (Chair), Luca de Alfaro, and Douglas Bonnet.
            </Col>
        </Row>
        <Row>
            <Col md={2} style={{textAlign:"right"}}>
                2007-2010
            </Col>
            <Col>
                <b>University of California-Santa Diego</b>, Santa Diego, CA 
                M.S., Computer Science (Computer Networks) 
                Dissertation: <i>Miswirings Diagnosis, Detection and Recovery in Data Centers</i>
                Committee: Profs. Amin Vahdat (Advisor), Keith Marzullo (Co-advisor), and Joe Pasquale (See publication C.2).  
            </Col>
        </Row> 
        <Row>
            <Col md={2} style={{textAlign:"right"}}>
                2003-2007
            </Col>
            <Col>
                <b>Amirkabir University of Technology</b>, Tehran, Iran 
                B.S., Computer Engineering 
                Dissertation: Asynchronous Implementation, Synthesis and Power Analysis of AES Encryption Algorithm with a Secure Asynchronous Toolset (See publication C.1).                   </Col>
        </Row>       
            <h3>Internships</h3>
            <h3>Major Projects</h3>
            <h3>Teaching Experience</h3>
            <h3>Publications</h3>
            <p>To see the list of my publications, please click <a href="/publications">here</a>.</p>
            <h3>Conferences</h3>
            <h3>Grant and Proposal Writing</h3>
            <h3>Software Artifacts</h3>
            <h3>Invited Talks</h3>
            <h3>Scholarly Service</h3>
            <h3>Mentoring Experience</h3>
            <h3>Press</h3>
      </body>
    </Layout>
  )
}

export default CVPage