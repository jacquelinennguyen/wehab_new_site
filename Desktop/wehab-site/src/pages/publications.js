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
            <h1>Publications</h1>
            <p>Some links could go here/Blurb?</p>
            <hr></hr>
                <h2>Research Articles</h2>
            <Container>
                <Row>
                    <Col md={10}>
                        <strong>Miri, P.</strong>, 
                        Jusuf, E., Margarit, H.,Flory, R., Uusberg, A., Isbister K., Marzullo K., Gross J. J. 
                        <a href="https://wehab.stanford.edu/wp-content/uploads/2020/03/CHI_2020.pdf"> PIV++: Evaluating a Personalizable, Inconspicuous Vibrotactile (PIV) Breathing Pacer for In-the-Moment Affect Regulation </a>
                        <i>ACM Transactions on Computer-Human Interaction (CHI);</i>
                        <ul class="article-nav">
                            <li>
                                <a href="https://wehab.stanford.edu/wp-content/uploads/2020/03/Sup_CHI_2020.pdf">Q&A</a>
                            </li>
                            <li>
                                <a href="https://wehab.stanford.edu/wp-content/uploads/2020/05/Evaluating-a-Personalizable-Inconspicuous-VibrotactilePIV-Breathing-Pacer-for-In-the-Moment-Affect-Regulation.pdf">Award</a>
                            </li>
                            <li>
                                <a href="https://wehab.stanford.edu/wp-content/uploads/2020/04/CHI2020_All_reviews_with_rebuttal_responses.pdf">Peer Review</a>
                            </li>
                            <li>
                                <a href="https://wehab.stanford.edu/wp-content/uploads/2020/04/CHI2020_rebuttal_color_coded_with-content_submitted.pdf">Rebuttal</a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/watch?v=esvNkZXEimE">Video</a>
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
                        Jusuf, E., Gross J. J., Isbister K., Marzullo K. (in press). 
                        <a href="https://wehab.stanford.edu/wp-content/uploads/2019/08/ACII2019_miri_2019_shortV-1.pdf"> Affect regulation using technology: Lessons learned by taking a multidisciplinary perspective.
                        </a> 
                        <i> 8th International Conference on. Affective Computing & Intelligent Interaction (ACII);</i>
                    </Col>
                    <Col>2 of 3</Col>
                </Row>
                <hr></hr>
                <Row>
                    <Col md={10}>
                        <strong>Miri, P.</strong>, 
                        Flory, R., Uusberg, A., Culbertson, H., Harvey, R., Keman, A., Peper, E., Gross, J. J., Marzullo, M. (2019).  
                        <a href="https://wehab.stanford.edu/wp-content/uploads/2020/04/TOCHI19_PIV_revised_round3.pdf"> PIV: Placement, pattern, and personalization of an inconspicuous vibrotactile breathing pacer. </a> 
                        <i>ACM Transactions on Computer-Human Interaction (TOCHI).</i>
                        <ul class="article-nav">
                                <li>
                                    <a href="https://www.youtube.com/watch?v=c1ezpVQLjkw">Video</a>
                                </li>
                        </ul>
                    </Col>
                    <Col>2 of 3</Col>
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
                                    Full Version
                                </a>
                            </li>
                        </ul>
                    </Col>
                    <Col>2 of 3</Col>
                </Row>
                <hr></hr>
                <Row>
                    <Col md={10}>
                        <strong>Miri, P.</strong>, 
                        Uusberg, A., Culbertson, H., Flory, R., Uusberg, H., Gross, J. J., … & Isbister, K. (2018). 
                        <a href="https://par.nsf.gov/servlets/purl/10092339"> Emotion regulation in the wild: Introducing WEHAB system architecture. </a>
                        In <i>Extended Abstracts of the 2018 CHI Conference on Human Factors in Computing Systems</i> (p. LBW021). ACM. doi:10.1145/3170427.3188495                    
                    </Col>
                    <Col>2 of 3</Col>
                </Row>
                <hr></hr>
            </Container>
        </Layout>
    )
}

export default PublicationsPage