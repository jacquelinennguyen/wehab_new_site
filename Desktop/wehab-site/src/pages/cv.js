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
                <p>
                <b>University of California-Santa Cruz</b>, Santa Cruz, CA 
                <br />Ph.D., Computer Science (Human Computer Interaction) 
                <br />Dissertation: <i>Using Technology to Regulate Affect: A Multidisciplinary Perspective</i> - funded by Intel Labs and NSF (Award No.CNS-1813982) 
                <br />Committee: Profs. Katherine Isbister (Advisor), James Gross (Co-advisor), Keith Marzullo (Co-advisor), Jim Whitehead (Chair), Luca de Alfaro, and Douglas Bonnet.
                </p>
            </Col>
        </Row>
        <Row>
            <Col md={2} style={{textAlign:"right"}}>
                2007-2010
            </Col>
            <Col>
                <p>
                    <b>University of California-Santa Diego</b>, Santa Diego, CA 
                    <br />M.S., Computer Science (Computer Networks) 
                    <br />Dissertation: <i>Miswirings Diagnosis, Detection and Recovery in Data Centers</i>
                    <br />Committee: Profs. Amin Vahdat (Advisor), Keith Marzullo (Co-advisor), and Joe Pasquale (See publication C.2).  
                </p>
            </Col>
        </Row> 
        <Row>
            <Col md={2} style={{textAlign:"right"}}>
                2003-2007
            </Col>
            <Col>
                <p>
                    <b>Amirkabir University of Technology</b>, Tehran, Iran 
                    <br />B.S., Computer Engineering 
                    <br />Dissertation: Asynchronous Implementation, Synthesis and Power Analysis of AES Encryption Algorithm with a Secure Asynchronous Toolset (See publication C.1).                   
                </p>
            </Col>
        </Row>

        <hr /> 

        <Row>
            <Col md={2}></Col>
            <Col>
                <h3>Internships</h3>
            </Col>
        </Row>
        <Row>
            <Col md={2} style={{textAlign:"right"}}>
                6/16 - 12/16
            </Col>
            <Col>
                <p>
                    <b>Intel Labs</b>, Hillsboro, Oregon 
                    <br />HCI Researcher Intern 
                    <br />
                    <ul>
                        <li>
                            Built a high fidelity biofeedback haptic wearable device with 4 LRAs actuators, 4 drv-2605 drivers, an Arduino Uno, and a SMiRF serial port that is controlled by matlab commands. Matlab collects and adjusts haptic sensations based on real-time physiology measures collected via bluetooth. Haptic sensations are built via PWM signal manipulations.
                        </li>
                        <li>
                            Developed an experimental design to understand user-perception toward haptic patterns via psychtoolbox (See publication C.4).
                        </li>
                    </ul>
                </p>
            </Col>            
        </Row>      
        <Row>
            <Col md={2} style={{textAlign:"right"}}>
                6/13 - 9/13
            </Col>
            <Col>
                <p>
                    <b>NASA Ames Research Center</b>, Sunnyvale, CA 
                    <br />User Experience Researcher Intern 
                    <br />
                    <ul>
                        <li>
                        Developed a web-based interface for pilots for the purpose of flight instruction testing. And, launched and
                        analyzed a user experience research study for a new interface design for manual commanding of spacecraft systems (See publication C.3).
                        </li>
                    </ul>
                </p>
            </Col>            
        </Row>
        <Row>
            <Col md={2} style={{textAlign:"right"}}>
                8/10 - 9/11
            </Col>
            <Col>
                <p>
                    <b>Microsoft Corporation</b>, Redmond, WA 
                    <br />Program Manager, Windows Core Networking Group 
                    <br />
                    <ul>
                        <li>
                        Designed a WMI object model for a multi-tenant datacenter networking feature (See Patent P.1).                        
                        </li>
                    </ul>
                </p>
            </Col>            
        </Row>
        <Row>
            <Col md={2} style={{textAlign:"right"}}>
                1/08 - 3/08
            </Col>
            <Col>
                <p>
                    <b>Qualcomm Inc.</b>, San Diego, CA 
                    <br />Software Customer Engineer Intern. 
                </p>
            </Col>            
        </Row> 

        <hr />

        <Row>
            <Col md={2}></Col>
            <Col>
                <h3>Major Projects</h3>
            </Col>
        </Row>
        <Row>
            <Col md={2}>
            </Col>
            <Col>
                <p>
                    <b>Stanford University – Stanford</b>, Stanford, CA 
                    <br />
                    Design, engineering and evaluation of an inconspicuous vibrotactile device with an iOS app for affect regulation in children diagnosed with autism spectrum disorder. Please visit https://wehab.stanford.edu/research for a list of the different prototypes of this device and how they have been evaluated. 
                </p>
                <p>
                    <b>University of California–Santa Cruz</b>, Santa Cruz, CA
                    <br />
                    Investigation of the use of vibrotactile devices for affect regulation.
                </p>
                <p>
                    <b>University of California–San Diego</b>, San Diego, CA
                    <br />
                    Design and implementation of a fault diagnostic tool for identifying and repairing miswirings in data center network architectures.
                </p>
            </Col>                          
        </Row>

        <hr />

        <Row>
            <Col md={2}></Col>
            <Col>
                <h3>Teaching Experience</h3>
            </Col>
        </Row>
        <Row>
            <Col md={2} style={{textAlign:"right"}}>
                Spring 2016
            </Col>
            <Col>
                <p>
                    <b>University of California–Santa Cruz</b>, Santa Cruz, CA
                    <br />
                    Instructor for 60-hour University course: “Introduction to Computer Science and Programming”, special edition program inspired by MIT Introduction to Probability thought by Dr.John Tsitsiklis, UC, San Diego Algorithms thought by Sanjoy Dusgupta, and UC, Berkeley Snap programming tool I focused on teaching probability, recursion, as well as sorting algorithms and run times using a visual programming tool.
                </p>
            </Col>
        </Row>

        <hr />

        <Row>
            <Col md={2}></Col>
            <Col>
            <h3>Publications</h3>
            </Col>
        </Row>
        <Row>
            <Col md={2}></Col>
            <Col>
                <p>To see the list of my publications, please click <a href="/publications">here</a>.</p>
            </Col>
        </Row>             

        <hr />

        <Row>
            <Col md={2}></Col>
            <Col>
                <h3>Conferences</h3>
            </Col>
        </Row> 
        <Row>
            <Col md={2} style={{textAlign:"right"}}>2020</Col>
            <Col>
                CHI Honourable Mention Award recipient (top 5% of submissions)
            </Col>
        </Row> 
        <Row>
            <Col md={2} style={{textAlign:"right"}}>2020-21</Col>
            <Col>
                Stanford Electronic Wearable (eWear) Seed Grant Award
            </Col>
        </Row>             
        <Row>
            <Col md={2} style={{textAlign:"right"}}>2018-19</Col>
            <Col>
                NSF PhD student grant recipient
            </Col>
        </Row> 
        <Row>
            <Col md={2} style={{textAlign:"right"}}>2017</Col>
            <Col>
                Intel Labs PhD student grant recipient
            </Col>
        </Row> 
        <Row>
            <Col md={2} style={{textAlign:"right"}}>2015, 17, 19</Col>
            <Col>
            Women in Computing Research (CRA-W) scholarship recipient
            </Col>
        </Row> 
        <Row>
            <Col md={2} style={{textAlign:"right"}}>2015</Col>
            <Col>
            NSF Graduate Data Science Challenges scholarship recipient
            </Col>
        </Row> 
        <Row>
            <Col md={2} style={{textAlign:"right"}}>2009, 13</Col>
            <Col>
            WIC Grace Hopper scholarship recipient
            </Col>
        </Row>
        <Row>
            <Col md={2} style={{textAlign:"right"}}>2013</Col>
            <Col>
            WIC Grace Hopper PhD Forum Presenter award
            </Col>
        </Row>
        <Row>
            <Col md={2} style={{textAlign:"right"}}>2003</Col>
            <Col>
            Top 0.02% in nationwide entrance exam of Iranian Universities among 1.3M participants
            </Col>
        </Row>

        <hr />

        <Row>
            <Col md={2}></Col>
            <Col>
                <h3>
                    Grant and Proposal Writing
                </h3>
                <h5><b>Stanford University</b> (as a postdoctoral fellow)</h5>
            </Col>   
        </Row>       
        <Row>
            <Col md={2} style={{textAlign:"right"}}>2019 [G.4]</Col>
            <Col>
                <p>
                <a href="https://med.stanford.edu/spectrum/b3_funding/b3_1_innovation_accelerator_pilot_program/b3_1_3_spada.html">Stanford Predictives and Diagnostics Accelerator Grant</a>.
                <br /><i>Facilitating Affect Regulation in Labile Hypertension.</i>
                <br />Role: Lead author of the proposal. PIs: Profs. James Gross (psychology) and Katharine Sears Edwards (cardiovas- cular medicine). $50,000. 2020-2021.
                </p>
            </Col>
        </Row>
        <Row>
            <Col md={2} style={{textAlign:"right"}}>2019 [G.3]</Col>
            <Col>
                <p>
                <a href="https://seedfunding.stanford.edu/opportunities/2019-ewear-seed-grant-competition">
                    Stanford Predictives and Diagnostics Accelerator Grant
                </a>. <b style={{color:"red"}}>Awarded.</b>
                <br />
                <a href="https://ewear.stanford.edu/2020/02/26/facilitating-affect-regulation-in-youth-with-autism-spectrum-disorder/">
                    <i>Facilitating Affect Regulation in Youth with Autism Spectrum Disorder.</i>
                </a>
                <br />
                Role: PI and Lead author of the proposal. PI supervisors: Profs. James Gross (psychology) and Antonio Hardan (School of Medicine). $40,000. 2020-2021.                </p>
            </Col>
        </Row>
        <Row>
            <Col md={2} style={{textAlign:"right"}}>2019 [G.2]</Col>
            <Col>
                <p>
                Stanford Jaswa Innovator Award. 
                <br /><i>Vibrotactile System For Affect Regulation in Children with Autism Spectrum Disorder.</i>
                <br />Role: Lead author of the proposal. PIs: Profs. James Gross (psychology) and Antonio Hardan (psychiatry). $200,000. 2019-2021.                
                </p>
                <h5><b>Stanford University</b> (as a PhD student visiting scholar)</h5>
            </Col>
        </Row>
        <Row>
            <Col md={2} style={{textAlign:"right"}}>2017 [G.1]</Col>
            <Col>
                <p>
                EAGER National Science Foundation Grant. <b style={{color:"red"}}>Awarded.</b>
                <br /><i>Systems for Assisting in Emotion Regulation in the Wild.</i>
                <br />Role: Lead author of the proposal. PIs: Profs. James Gross (Stanford University), Keith Marzullo (University of Maryland), and Katherine Isbisiter (University of California, Santa Cruz). $270,000. 2018-2020. Award No.1813982                
                </p>
            </Col>
        </Row>

        <hr />

        <Row>
            <Col md={2} />
            <Col>
                <h3>Software Artifacts</h3>
            <p>
                <b>Embedded Systems</b>,
                <ul>
                    <li>Firmware programming of nRF52 semiconductors (microprocessors equipped with Bluetooth low energy. </li>
                    <li>Advanced Bluetooth Low Energy Communication when central and peripheral roles changes dynamically. </li>
                </ul>
            </p>
            <p>
                <b>Signal Processing</b>,
                <ul>
                    <li>Extracting breathing rate from blood volume pulse signal.</li>
                    <li>Inferring psychological arousal from skin conductance data using model-based approaches in LedaLab and PsPM. </li>
                    <li>Inferring breathing rate and breathing irregularity from noisy breathing data using variety of methods including Fast Fourier Transform, Independent Component Analysis, and Exponential Smoothing.</li>
                </ul>
            </p>
            <p>
                <b>App Development</b>,
                <ul><li>iOS Swift language programming to build a personalization app and send/receive communication with a BLE enabled semiconductors.</li>
                    </ul>
            </p>
            <p>
                <b>Machine Learning</b>,
                <ul><li>Stressor balancing using clustering algorithms.</li></ul>
            </p>
            <p><b>Experimental Design</b>,
                <ul><li>Bootstrapped Mixed Design Modeling and Power Analysis in R</li></ul>
            </p>
            </Col>            
        </Row>

        <hr />

        <Row>
            <Col md={2}></Col>
            <Col>
                <h3>Invited Talks</h3>
            </Col>
        </Row>
        <p>
            <Row>
            <Col md={2} style={{textAlign:"right"}}>5/4/2020</Col>
            <Col>
                Stanford Autism and Developmental Disorders Research Program
            </Col>
            </Row>
            <Row>
                <Col md={2} style={{textAlign:"right"}}>6/16/2020</Col>
                <Col>
                Stanford Psychophysiology Lab
                </Col>
            </Row>
            <Row>
                <Col md={2} style={{textAlign:"right"}}>1/16/2020</Col>
                <Col>
                Stanford HCI Seminar
                </Col>
            </Row>
            <Row>
                <Col md={2} style={{textAlign:"right"}}>1/9/2020</Col>
                <Col>
                Stanford Psychophysiology Lab
                </Col>
            </Row>
            <Row>
                <Col md={2} style={{textAlign:"right"}}>1/9/2020</Col>
                <Col>
                Stanford Affective Science Seminar
                </Col>
            </Row>
            <Row>
                <Col md={2} style={{textAlign:"right"}}>1/21/2020</Col>
                <Col>
                NASA Ames Brown Bag Seminar
                </Col>
            </Row>
        </p> 
        

        <hr />

        <Row>
            <Col md={2} />
            <Col>
                <h3>Scholarly Service</h3>
            </Col>
        </Row>
        <p>
            <Row>
            <Col md={2} style={{textAlign:"right"}}>2019</Col>
            <Col>
            CHI
            </Col>
        </Row>
        <Row>
            <Col md={2} style={{textAlign:"right"}}>2018, 19</Col>
            <Col>
            UIST
            </Col>
        </Row>
        </p>
        

        <hr />

        <Row>
            <Col md={2} />
            <Col>
             <h3>Mentoring Experience</h3>
            </Col>
        </Row>   
        <Row>
            <Col md={2} style={{textAlign:"right"}}>06/20 - present</Col>
            <Col>
                <p>
                    <b>Computer Science Undergraduate Internships (CURIS program)</b>, Stanford University 
                    <br />Mentoring Stephanie Hu, Mehul Arora, and Aman Malhota.
                </p>
            </Col>
        </Row>
        <Row>
            <Col md={2} style={{textAlign:"right"}}>2017 - present</Col>
            <Col>
                <p>
                    <b>WEHAB Lab</b>, Stanford University
                    <br />Undergraduate, masters, and PhD students: Talia Regenstein, Elaheh Salehi, Eman Magzoub, Satvir Basran, Anna Speder, Sae Du, Eli Rice, Yi-Hsuan Wu, Akanksha Shrivastava, Joshua Chon, Candace Hagey, Agata Kelman, Aidan Levin, Aditi Gupta, Emily Jusuf, Alyssa Jackson, Stephanie Hu, Mehul Arora, Aman Malhota, Ishan Goya.
                </p>
            </Col>
        </Row>
        <hr />

        <Row>
            <Col md={2} />
            <Col>
                <h3>Press</h3>
            </Col>
        </Row>
        <Row>
            <Col md={2}>
                10/21/2019
            </Col>
            <Col>
                <p>
                    <b>Stanford Daily News</b>,
                    <br />Researchers work on device to help individuals with autism handle stress.
                </p>
            </Col>
        </Row>

      </body>
    </Layout>
  )
}

export default CVPage