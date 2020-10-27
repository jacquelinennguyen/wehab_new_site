import React from "react"
import {Link} from 'gatsby'
import Layout from '../components/layout'
import PubStyles from '../styles/publications.scss'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const PublicationsPage = () => {
    return (
        <Layout>
{/**Conferences**/}
            <h2>Conferences</h2>
            <p>
                10 pages double column double-blinded peer-reviewed
            </p>
            <Container className="publications">
                <Row>
                    <Col md={10}>
                        <strong>Miri, P.</strong>, 
                        Jusuf, E., Margarit, H.,Flory, R., Uusberg, A., Isbister K., Marzullo K., Gross J. J. 
                        <a target="blank" href="https://github.com/jacquelinennguyen/wehab_new_site/blob/master/Desktop/wehab-site/src/docs/CHI_2020.pdf"> PIV++: Evaluating a Personalizable, Inconspicuous Vibrotactile (PIV) Breathing Pacer for In-the-Moment Affect Regulation </a>
                        <i>ACM Transactions on Computer-Human Interaction (CHI) 2020</i>. Best Paper Honorable Mention Award (Top 5%)
                        <ul class="article-nav">
                            <li>
                                <a href="https://github.com/jacquelinennguyen/wehab_new_site/blob/master/Desktop/wehab-site/src/docs/Sup_CHI_2020.pdf">Q&A</a>
                            </li>
                            <li>
                                <a href="https://github.com/jacquelinennguyen/wehab_new_site/blob/master/Desktop/wehab-site/src/docs/CHI_2020_Award.pdf">Award</a>
                            </li>
                            <li>
                                <a href="https://github.com/jacquelinennguyen/wehab_new_site/blob/master/Desktop/wehab-site/src/docs/CHI2020_All_reviews_with_rebuttal_responses.pdf">Peer Review</a>
                            </li>
                            <li>
                                <a href="https://github.com/jacquelinennguyen/wehab_new_site/blob/master/Desktop/wehab-site/src/docs/CHI2020_rebuttal_color_coded_with-content_submitted.pdf">Rebuttal</a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/watch?v=esvNkZXEimE">Video</a>
                            </li>
                            <li>
                            <a href="https://github.com/jacquelinennguyen/wehab_new_site/blob/master/Desktop/wehab-site/src/docs/CHI_2020.pdf">PDF</a>
                            </li>
                        </ul>
                    </Col>
                    <Col md={2}>
                        ***
                    </Col>
                </Row>
                <hr></hr>
                
                <Row>
                    <Col md={10}>
                        <strong>Miri, P.</strong>, 
                        Flory, R., Uusberg, A., Uusberg, H., Gross, J. J., & Isbister, K. (2017). 
                        <a href="https://dl.acm.org/citation.cfm?id=3053147"> HapLand: A scalable robust emotion regulation haptic system testbed. </a>
                        In <i>Proceedings of the 2017 CHI Conference Extended Abstracts on Human Factors in Computing Systems</i> (pp. 1916–1923). ACM. doi:10.1145/3027063.3053147                    
                        <ul class="article-nav">
                            <li>
                                <a href="http://mentalhealth.media.mit.edu/wp-content/uploads/sites/15/2017/05/CMH_2017_paper_10.pdf">
                                    PDF
                                </a>
                            </li>
                        </ul>
                    </Col>
                    <Col></Col>
                </Row>
                <hr></hr>

                <Row>
                    <Col md={10}>
                        Billman, D., Schreckenghost, D., and <strong>Miri, P.</strong>, <a href="https://journals.sagepub.com/doi/pdf/10.1177/1541931214581075">“Assessment of Alternative Interfaces for Manual Commanding of Spacecraft Systems Compatibility with Flexible Allocation Policies"</a>
                        , in <i>Proceedings of the Human Factors and Ergonomics</i>, October 2014
                        <ul class="article-nav">
                            <a href="https://journals.sagepub.com/doi/pdf/10.1177/1541931214581075">
                                PDF
                            </a>
                        </ul>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col md={10}>
                        Radhika Niranjan Mysore, Andreas Pamboris, Nathan Farrington, Nelson Huang, <strong>Miri, P.</strong>, Sivasankar Radhakrishnan, Vikram Subramanya, and Amin Vahdat, <a href="http://ccr.sigcomm.org/online/files/p39.pdf">“PortLand: A Scalable Fault-Tolerant Layer 2 Data Center Network Fabric,"</a> in <i>Proceedings of the ACM SIGCOMM Conference</i>, August 2009
                        <ul class="article-nav">
                            <a href="http://ccr.sigcomm.org/online/files/p39.pdf">
                                PDF
                            </a>
                        </ul>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col md={10}>
                        <strong>Miri, P.</strong>, Ghavami, B., Najibi, M. and Pedram, H., <a href="https://pdfs.semanticscholar.org/5657/0f5c00d90416759bf565e7c553600789d759.pdf">"Exploring an AES Crypto-processor Design Using a Secure Asynchronous Toolset."</a> in <i>Design Automation Conference</i> (IEEE Cat 2008)
                        <ul class="article-nav">
                            <a href="https://www.semanticscholar.org/paper/Exploring-an-AES-Crypto-processor-Design-Using-a-Miri-Ghavami/56570f5c00d90416759bf565e7c553600789d759?p2df">
                                PDF
                            </a>
                        </ul>
                    </Col>
                </Row>
                
            </Container>
            <hr />

{/**Journal */}
            <h2>Journal</h2>
            <Container className="publications">
            <Row>
                    <Col md={10}>
                        <strong>Miri, P.</strong>, 
                        Flory, R., Uusberg, A., Culbertson, H., Harvey, R., Keman, A., Peper, E., Gross, J. J., Marzullo, M. (2019).  
                        <a target="_blank" href="https://github.com/jacquelinennguyen/wehab_new_site/blob/master/Desktop/wehab-site/src/docs/TOCHI19_PIV_revised_round3.pdf"> PIV: Placement, pattern, and personalization of an inconspicuous vibrotactile breathing pacer. </a> 
                        <i>ACM Transactions on Computer-Human Interaction (TOCHI).</i>
                        <ul class="article-nav">
                                <li>
                                    <a href="https://www.youtube.com/watch?v=c1ezpVQLjkw">Video</a>
                                </li>
                                <li>
                                    <a target="blank" href="https://github.com/jacquelinennguyen/wehab_new_site/blob/master/Desktop/wehab-site/src/docs/TOCHI19_PIV_revised_round3.pdf">PDF</a> 
                                </li>
                        </ul>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
            <hr />
            <h2>
                Patents
            </h2>
            <Container className="publications">
                <Row>
                    <Col md={10}>
                        <strong>Miri, P.</strong>, Flory, R., Marzullo, K., and Gross, J., Stanford University, 2020. Personalizable, Inconspicuous Vibro- tactile Breathing Pacer. Patent date Filed Dec 1, 2019 by The Board of Trustees of the Leland Stanford Junior University, Stanford, CA Power of Attorney: Isaac Fine–74274
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col md={10}>
                        <strong>Miri, P.</strong>, Garg, P., Schultz, B., Singhal, S.K. and Sivakumar, M., Microsoft Corp, 2014. <a href="https://patents.google.com/patent/US8806005B2/en">Cross-machine event log correlation</a>. U.S. Patent 8,806,005 (patent number 20130067067)
                    </Col>
                </Row>
            </Container>
{/**Workshop and Extended Abstracts */}
            <hr />
            <h2>Workshop and Extended Abstracts</h2>
            <Container className="publications">
            <Row>
                    <Col md={10}>
                        Ball, T., <strong>Miri, P.</strong>, and Leanne Williams. <a href="https://clinicaltrials.gov/ct2/show/NCT03465137">"Using the Neuroscience of Fear Extinction for Anxiety Reduction: Study Design, Aims, and Preliminary Data."</a> In <i>Neuropsychopharmacology</i>, vol. 44, no. SUPPL 1, pp. 267-268. 2019.
                    </Col>
                </Row>
            <hr />
            <Row>   
                <Col md={10}>
                    <strong>Miri, P.</strong>, 
                        Uusberg, A., Culbertson, H., Flory, R., Uusberg, H., Gross, J. J., … & Isbister, K. (2018). 
                    <a href="https://par.nsf.gov/servlets/purl/10092339"> Emotion regulation in the wild: Introducing WEHAB system architecture. </a>
                        In <i>Extended Abstracts of the 2018 CHI Conference on Human Factors in Computing Systems</i> (p. LBW021). ACM. doi:10.1145/3170427.3188495                    
                    <ul class="article-nav">
                        <a href="https://par.nsf.gov/servlets/purl/10092339">
                            PDF
                        </a>
                    </ul>
                </Col>
                </Row>
            <hr />
                <Row>
                    <Col md={10}>
                        <strong>Miri, P.</strong>, Jusuf, E., Gross J. J., Isbister K., Marzullo K. (in press). <a target="_blank" href="https://github.com/jacquelinennguyen/wehab_new_site/blob/master/Desktop/wehab-site/src/docs/ACII2019_miri_2019_shortV-1.pdf">"Affect regulation using technology: Lessons learned by taking a multidisciplinary perspective."</a>, in <i>8th International Conference on Affective Computing and Intelligent Interaction (ACII) 2019</i>
                        <ul class="article-nav">
                            <a target="_blank" href="https://github.com/jacquelinennguyen/wehab_new_site/blob/master/Desktop/wehab-site/src/docs/ACII2019_miri_2019_shortV-1.pdf">PDF
                            </a>
                        </ul>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col md={10}>
                        <strong>Miri, P.</strong>, Uusberg, A., Culbertson, H., Flory, R., Uusberg, H., Gross J. J., Marzullo K., Isbister K. <a href="https://par.nsf.gov/servlets/purl/10092339">"Emotion Regulation in the Wild: Introducing WEHAB System Architecture."</a>, in <i>Extended Abstracts of the 2018 CHI Conference on Human Factors in Computing Systems (ACM) 2018</i>
                    </Col>
                </Row>
            </Container>
            <hr />
        </Layout>
    )
}

export default PublicationsPage