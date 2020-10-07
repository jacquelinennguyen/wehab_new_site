import React, {Component} from "react";
import { Grid } from "@material-ui/core";
import '../people/people.css';

import PersonTile from "./person-tile/personTile";
import heatherCulbertsonImage from './people-images/heather-culbertson.jpg';
import lawrenceFungImage from './people-images/lawrence-fung.jpg';
import jamesGrossImage from './people-images/james-gross.jpg';
import antonioHardanImage from './people-images/antonio-hardan.jpg';
import richardHarveyImage from './people-images/richard-harvey.jpg';
import katherineIsbisterImage from './people-images/katherine-isbister.jpg';
import keithMarzulloImage from './people-images/keith-marzullo.jpg';
import erikPeperImage from './people-images/erik-peper.jpg';
import jenniferPhillipsImage from './people-images/jennifer-phillips.jpg';
import pardisMiriImage from './people-images/pardis-miri.png';
import johnHegartyImage from './people-images/john-hegarty.png';
import anderoUusbergImage from './people-images/andero-uusberg.jpg';
import horiaMargaritImage from './people-images/horia-margarit.jpg';
import robertFloryImage from './people-images/robert-flory.jpg';
import lindsayJamiesonImage from './people-images/lindsay-jamieson.png';
import alyssaJacksonImage from './people-images/alyssa-jackson.jpg';
import emilyJusufImage from './people-images/emily-jusuf.jpeg';
import aditiGuptaImage from './people-images/aditi-gupta.jpg';
import aidanLevinImage from './people-images/aidan-levin.jpg';
import agataKelmanImage from './people-images/agata-kelman.jpg';
import candaceHageyImage from './people-images/candace-hagey.jpeg';
import joshuaChonImage from './people-images/joshua-chon.jpg';
import akanshaShrivastavaImage from './people-images/akansha-shrivastava.jpg';
import yiHsuanWuImage from './people-images/yi-hsuan-wu.jpg';
import eliRiceImage from './people-images/eli-rice.png';
import saeDuImage from './people-images/sae-du.jpg';
import annaSpederImage from './people-images/anna-speder.png';
import satvirBasranImage from './people-images/satvir-basran.png';
import emanMagzoubImage from './people-images/eman-magzoub.png';
import elahehSalehiImage from './people-images/elaheh-salehi.jpeg';
import taliaRegensteinImage from './people-images/talia-regenstein.jpg';

class OurTeam extends Component{

    personArray = {
        professors: [
            {
                name: "Heather Culbertson",
                education: "PHD IN MECHANICAL ENGINEERING, UNIVERSITY OF PENNSYLVANIA\nMS IN MECHANICAL ENGINEERING, UNIVERSITY OF PENNSYLVANIA\nBS IN MECHANICAL ENGINEERING, UNIVERSITY OF NEVADA, RENO",
                description: "Heather Culbertson is an assistant professor at University of Southern California, where she specializes in computer science. Her area of expertise in in haptics technology, human-robot interaction and virtual reality. Her interest lies in creating haptic sensations to mimic real world physical sensations. Prior to her professorship, she was a researcher at Stanford’s Department of Mechanical Engineering, more specifically the Collaborative Haptics and Robotics in Medicine (CHARM) Lab.",
                image: heatherCulbertsonImage
            },
            {
                name:"Lawrence Fung",
                education:"",
                description: "Lawrence Fung, M.D, Ph.D, is an Assistant Professor Of Psychiatry And Behavioral Sciences at the Stanford University Medical Center. He is also the Director of the Stanford Neurodiversity Project. Dr. Fung’s specialty lies in clinical training in autism spectrum disorder (ASD). He is interested in studying pharmacologic treatments for ASD and the neurobiology of ASD. ",
                image: lawrenceFungImage
            },
            {
                name:"James Gross",
                education:"PH.D, UNIVERSITY OF CALIFORNIA, BERKELEY, CLINICAL PSYCHOLOGY\nGRADUATE VISITING STUDENT, LINACRE COLLEGE, OXFORD UNIVERSITY\nB.A, YALE UNIVERSITY, PHILOSOPHY AND PSYCHOLOGY",
                description: "James Gross is a professor at Stanford University in the Department of Psychology. He is also the head of the Stanford Psychophysiology Laboratory and the Director of the Psychology One Program. He is renowned for his work in emotion and emotion regulation, and has won awards from such organizations as the American Psychological Organization and the Society for Psychological Research. His teaching has also earned him awards such as the Dean’s Award for Distinguished Teaching and Walter J. Gores Award for Excellence in Teaching among others. Dr. Gross has over 250 publications to support his work.",
                image: jamesGrossImage
            },
            {
                name:"Antonio Hardan",
                education:"",
                description: "Antonio Hardan, M.D, is a Professor of Psychiatry And Behavioral Sciences at the Stanford University Medical Center. He is also the director of Autism and Developmental Disabilities Clinic and the Director in the Division of Child and Adolescent Psychiatry. He is interested in studying the neurobiology of autism and pharmacological treatments for individuals with autism and/or developmental disorders.",
                image: antonioHardanImage
            },
            {
                name:"Richard Harvey",
                education:"PH.D.",
                description: "Richard Harvey is an associate professor at San Francisco State University in the Department of Health Education. He is known for his research in stress-reducing interventions in order to increasing psychological courage, among other fields. Prior to his work at San Francisco State University, he conducted research at UC Irvine. There he was a research fellow at the UC Irvine Transdisciplinary Tobacco Use Research Center for five years, as well as developing and running the UC Irvine Counseling Center Biofeedback and Stress Management Program. He also worked as a Maternal, Child and Adolescent Health (MCAH) Epidemiologist in Orange County. He is a board member of the Biofeedback Society of California and the San Francisco Psychological Association. In addition, he is also a chairperson of the American Public Health Association, Alternative and Complementary Health Practices Special Interest Group. His publications include the fields of biofeedback and the psychology of courage.",
                image: richardHarveyImage
            },
            {
                name:"Katherine Isbister",
                education:"PH.D. STANFORD UNIVERSITY",
                description: "Katherine Isbister is a professor at UC Santa Cruz in the Department of Computational Media. Her research interests are human-computer interaction, as well as games and emotion. She is a core faculty member in the Center for Games and Playable Media. After completing her studies at Stanford University, she proceeded to work at labs in Japan, Sweden, Denmark, and the United States. Her publications include Better Game Characters by Design, Game Usability, and How Games Move Us.",
                image: katherineIsbisterImage
            },
            {
                name:"Keith Marzullo",
                education:"PH.D. IN ELECTRICAL ENGINEERING FROM STANFORD UNIVERSITY",
                description: "Keith Marzullo is the Dean of the University of Maryland College of Information Studies. He is the creator of Marzullo’s algorithm, which forms part of the basis for the Network Time Protocol. Before he joined the University of Maryland, he was Director of the Networking and Information Technology Research and Development (NITRD) Program, which is part of the White House Office of Science and Technology Policy. He also taught as a professor at the Department of Computer Science and Engineering in UC San Diego. His stated research interests are in distributed computing, fault-tolerant computing, cybersecurity, and privacy, and has numerous publications to his name.",
                image: keithMarzulloImage
            },
            {
                name:"Erik Peper",
                education:"PH.D. IN PSYCHOLOGY FROM UNION GRADUATE SCHOOL, THE UNION INSTITUTE\nBA FROM HARVARD UNIVERSITY",
                description: "Professor Erik Peper is a professor at San Francisco State University. He is well known for his expertise in holistic health, self-regulation and biofeedback. His numerous publications include Biofeedback Mastery, Make Health Training Happen: Yourself to Create Wellness, and Fighting Cancer: A Nontoxic Approach to Treatment. His contributions to the field have been recognized in the form of awards such as the Recipient of the Biofeedback Foundation of Europe Educator Award in 2011. Currently he serves as the president of the Biofeedback Federation of Europe.",
                image: erikPeperImage
            },
            {
                name:"Jennifer Phillips",
                education:"",
                description: "Jennifer Phillips, PhD, is a Clinical Associate Professor and a licensed child psychologist with specialized expertise in autism and associated conditions, and in neurodevelopmental assessment. She is currently the co-director of the Autism and Developmental Disabilities Clinic in Child Psychiatry.  Since 2005, she has been the lead neuropsychologist at Stanford on a multitude of clinical research projects investigating autism and related developmental conditions, and runs a research lab that trains doctoral students on psychological assessment and provides assessment to autism research projects in the Department of Psychiatry.  She has extensive expertise in recruiting and diagnostic phenotyping for clinical research in autism, as well as in clinical practice.  She is a certified research trainer on the ADOS-2 and a member of the autism glass project. In this project,  Stanford investigators developed and clinically evaluated  an AI-powered Google glass for youth diagnosed with ASD to enhance their ability to label affect in others.",
                image: jenniferPhillipsImage
            }            
        ],
        researchTeam: [
            {
                name: "Pardis Miri",
                education: "",
                description: "Pardis Miri,  PhD, recently received her doctorate in the area of human computer interaction from University of  California Santa Cruz. As a PhD student, she spent the last 3 years of her training at Stanford University under the supervision of Dr. Marzullo, Dr. Gross, and Dr. Isbister. For her dissertation, she took a multidisciplinary approach in using technology for affect regulation. More specifically, she explored the placement and pattern, and personalization of a vibrotactile breathing pacer system that she developed during her graduate studies. Her work was funded by the National Science Foundation and Intel labs. Prior to being a Ph.D. student, Miri earned her Master’s degree in computer science from the University of California San Diego in the area of Systems and Networking. She is currently a postdoctoral fellow at Stanford University conducting research in using vibrotactile technology to aid affect regulation in neurotypical and neurodiverse populations. email:parism@stanford.edu project website LinkedIn.",
                image: pardisMiriImage
            },
            {
                name:"John Hegarty",
                education:"",
                description: "John P. Hegarty II, PhD, is a postdoctoral fellow in the Department of Psychiatry and Behavioral Sciences at the Stanford University School of Medicine. Dr. Hegarty is supervised by Dr. Antonio Hardan, MD, and his research in the Autism and Developmental Disorders Research Program has focused on the use of non-invasive neuroimaging approaches to explain neurobiological variation in children with autism spectrum disorder and develop biomarkers to improve precision medicine. He received his doctorate from the Interdisciplinary Neuroscience Program at the University of Missouri and his research has been funded by the Stanford University Bass Society of Pediatric Scholars and National Institutes of Health.",
                image: johnHegartyImage
            },
            {
                name:"Andero Uusberg",
                education:"",
                description: "Andero Uusberg is a senior research fellow at the University of Tartu Institute of Psychology in Estonia. Previously, he was a postdoc at the Stanford Psychophysiology Lab for three years. His focus of study is on how affect functions both as a form of, as well as a target, for self-regulation. He received his Ph.D from the University of Tartu.",
                image: anderoUusbergImage
            },
            {
                name:"Horia Margarit",
                education:"",
                description: "Horia is an experienced Data Scientist with a demonstrated history of working in the information technology and services industry. Strong research professional with dual Bachelor’s degrees in Cognitive and Computer Science from UC Berkeley, and with a Master’s degree in Statistics from Stanford University. Skilled in distributed programming via Apache Spark, Bayesian modeling, deep learning, convex optimization, and stochastic differential equations.",
                image: horiaMargaritImage
            },
            {
                name:"Robert Flory",
                education:"",
                description: "Robert is an electrical engineering at Intel Labs. He has been heavily involved in the hardware development of the vibrotactile pacer.",
                image: robertFloryImage
            }
        ],
        researchAssistants: [
            {
                name: "Lindsay Jamieson",
                education: "",
                description: "Lindsay is an undergraduate student at Fairfield University pursuing a Bachelor’s of Science in Psychology with a concentration in Behavioral Neuroscience. She is a Bay Area native and is interested in the field of emotional regulation and is excited to be apart of an interdisciplinary lab.  In the future, she hopes to attend graduate school to further study psychology and the processes of the brain.",
                image: lindsayJamiesonImage
            }
        ],
        formerResearchAssistants: [
            {
                name: "Alyssa Jackson",
                education: "",
                description: "Alyssa is pursuing her BA in psychology at Arizona State University. She is working on emotion regulation by utilizing haptic devices. Her plans are to conduct her own future research and to continue her education in graduate school.",
                image: alyssaJacksonImage
            },
            {
                name: "Emily Jusuf",
                education: "",
                description: "Emily is a senior at Stanford University who hails from New York. She is currently pursuing her bachelor’s degree with a double major in Comparative Literature and Symbolic Systems. In the future, she hopes to attend graduate school to study clinical psychology.",
                image: emilyJusufImage
            },
            {
                name: "Aditi Gupta",
                education: "",
                description: " Aditi is an undergraduate student at Dartmouth College interested in studying human biology and global health. She is originally from California and plans to pursue a  medical degree. Aditi is excited to explore the intersection between technology and healthcare, especially its applications for marginalized populations.",
                image: aditiGuptaImage
            },
            {
                name: "Aidan Levin",
                education: "",
                description: "Aidan Levin is currently an undergraduate at the University of Illinois pursuing a B.A. in psychology. He is interested in emotion regulation and its role in cognitive behavioral therapy. He plans to continue his education in graduate school and eventually conduct his own research.",
                image: aidanLevinImage
            },
            {
                name: "Agata Kelman",
                education: "",
                description: "Agata is pursuing a B.S. in Psychology with a Biological emphasis at University of California, Davis. She is originally from St. Petersburg, Russia, and is interested in conducting her own research in the future, and then going on to graduate school.",
                image: agataKelmanImage
            },
            {
                name: "Candace Hagey",
                education: "",
                description: "Candace is a graduate of The University of California, Los Angeles, with a BS in Neuroscience and Human Biology & Society. She’s excited to contribute to research at the intersection of health, behavior, and technology before pursuing graduate school in the future.",
                image: candaceHageyImage
            },
            {
                name: "Joshua Chon",
                education: "",
                description: "Joshua is a graduate of Santa Clara University with a B.S. in Psychology. His goal is to work in research before moving on to graduate school.",
                image: joshuaChonImage
            },
            {
                name: "Akansha Shrivastava",
                education: "",
                description: "Akanksha is a graduate student of Human-Computer Interaction in the Human-Computer Interaction Lab at the University of Maryland. She is working on the haptic feedback system, designing user studies, conducting user research and re-designing the user interface of the system. As a graduate student, she works as a participatory design researcher with KidsTeam at the Human-Computer Interaction Lab, the University of Maryland where she works with children as co-designers. She is interested in working on technology for emotion regulation in children.",
                image: akanshaShrivastavaImage
            },
            {
                name: "Yi-Hsuan Wu",
                education: "PH. D.",
                description: "Yi-Hsuan Wu is the operation director & 3D generalist for Fuzz Interactive, a design boutique. She also holds a Ph.D. in Environmental Health Sciences from the University of Michigan. Prior to venturing out to the beautiful west coast, she worked as a research fellow in the National Institute for Occupational Safety and Health. She enjoys discussions about behavior modifications and VR/AR applications.",
                image: yiHsuanWuImage
            },
            {
                name: "Eli Rice",
                education: "",
                description: "Eli is pursuing a B.A. in Psychology and Neuroscience at Wake Forest University. He is from North Carolina and is best friends with his dog, Angus.",
                image: eliRiceImage
            },
            {
                name: "Sae Du",
                education: "",
                description: "",
                image: saeDuImage
            },
            {
                name: "Anna Speder",
                education: "",
                description: "Anna moved to the U.S. from Hungary to study. She is currently pursuing an Associate’s Degree at Foothill College and is planning to transfer to a 4-year university. Since her major is psychology she is passionate about research and excited to learn and assist in one.",
                image: annaSpederImage
            },
            {
                name: "Satvir Basran",
                education: "",
                description: " Satvir completed his bachelors degree at the University of California, Riverside. He looks to gain valuable research experience during his time at Stanford and apply to medical school in the future.",
                image: satvirBasranImage
            },
            {
                name: "Eman Magzoub",
                education: "",
                description: " Eman Magzoub is a Foothill College student pursuing an Associate Degree in psychology and is planning to transfer to a 4 year university to obtain her Bachelor degree in potentially social psychology. Since psychology is her passion, Eman is excited to gain more experience in research.",
                image: emanMagzoubImage
            },
            {
                name: "Elaheh Salehi",
                education: "",
                description: " Elaheh graduated with a bachelors degree in psychology at Sonoma State University and desires to apply to an MD/PhD program to combine medicine and psychology to be able to better understand our psychological influence on the human body and our health.",
                image: elahehSalehiImage
            },
            {
                name: "Talia Regenstein",
                education: "",
                description: "Talia recently graduated from Bates College with a BA in psychology. She is currently working at the VA Medical Center in San Francisco in the Center for Imaging of Neurodegenerative Diseases as a MRI imager and research data analyst.",
                image: taliaRegensteinImage
            }
        ]
    }

    render(){
        return(
            <div className="people-section" id="people">
                <h1>Our Team</h1>
                <h2>Professors</h2>
                <Grid container>                    
                    {this.personArray.professors.map((data) => {                            
                        return (
                            <Grid item xs={2}>
                                <PersonTile name={data.name} education={data.education} description={data.description} personImage={data.image}/>
                            </Grid>
                        )   
                    })}                    
                </Grid>  

                <h2>Research Team</h2>
                <Grid container>                    
                    {this.personArray.researchTeam.map((data) => {                            
                        return (
                            <Grid item xs={2}>
                                <PersonTile name={data.name} education={data.education} description={data.description} personImage={data.image}/>
                            </Grid>
                        )   
                    })}                    
                </Grid>  

                <h2>Research Assistants</h2>
                <Grid container>                    
                    {this.personArray.researchAssistants.map((data) => {                            
                        return (
                            <Grid item xs={2}>
                                <PersonTile name={data.name} education={data.education} description={data.description} personImage={data.image}/>
                            </Grid>
                        )   
                    })}                    
                </Grid>    

                <h2>Former Research Assistants</h2>
                <Grid container>                    
                    {this.personArray.formerResearchAssistants.map((data) => {                            
                        return (
                            <Grid item xs={2}>
                                <PersonTile name={data.name} education={data.education} description={data.description} personImage={data.image}/>
                            </Grid>
                        )   
                    })}                    
                </Grid>    

            </div>
        )
    }
}

export default OurTeam;