import React from "react"
import {Link} from 'gatsby'
import Layout from '../components/layout'

const ContactPage = () => {
    return (
        <Layout>
            <h5>
                <b>Research Assistants</b>
            </h5>
            <p>
            If you have computer science, chemical engineering, mechanical
            engineering, electrical engineering, or psychology background, this lab is the right place for you. If you don’t
            have any of these backgrounds but you are eager to learn fast and to dedicate time, this is still the right lab
            for you. We recommend contacting our former lab research assistants Emily Jusuf (ejusuf@stanford.edu)
            to get a better perspective of our lab and see our team members page on wehab.stanford.edu website for
            more information. Work-study, volunteer, or course-credit are also available.
            </p>
            <p>
            Please send an email to me, Pardis Miri (parism@stanford.edu), and briefly detail your
            motivation and qualifications for becoming an RA for this project. Additionally please attach a resume/CV,
            and include your availability (preferred number of hours/week and how long you can commit to volunteering
            in the lab). I then would ask for letter of support from one to two faculties that you have worked with before. 
            </p>
        </Layout>
    )
}

export default ContactPage