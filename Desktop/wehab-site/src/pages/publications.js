import React from "react"
import {Link} from 'gatsby'
import Layout from '../components/layout'
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
                    <Col xs={6}>1 of 2</Col>
                    <Col>2 of 2</Col>
                </Row>
                <Row>
                    <Col>1 of 3</Col>
                    <Col>2 of 3</Col>
                    <Col>3 of 3</Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default PublicationsPage