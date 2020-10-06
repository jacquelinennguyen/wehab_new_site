import React from "react"
import {Link} from 'gatsby'
import Layout from '../components/layout'
import TeamStyles from '../styles/team.scss'

const TeamPage = () => {
    return (
        <Layout>
            <h1>Team</h1>
            <div class="team-grid">
                <div class="team-box">
                    Profile 1
                </div>
                <div class="team-box">
                    Profile 2
                </div>
                <div class="team-box">
                    Profile 3
                </div>
                <div class="team-box">
                    Profile 4
                </div>
            </div>
        </Layout>
    )
}

export default TeamPage