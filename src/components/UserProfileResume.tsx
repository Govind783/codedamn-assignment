import React from 'react'
import styles from '@/styles/UserProfileResume.module.css';
import Image from 'next/image';
import google from "../assets/Google.png"
import fb from "../assets/Facebook.png"
import userUniversityLogo from "../assets/userUniLogo.png"
import html from "../assets/html-5.png"
import css from "../assets/css.png"
import js from "../assets/javascript.png"
import react from "../assets/react2.png"
import nextjs from "../assets/NextJs.png"
import java from "../assets/java.png"
import python from "../assets/python.png"
import node from "../assets/node.png"
import mongo from "../assets/mongodb.png"
import flag1 from "../assets/US.png"
import flag2 from "../assets/TW.png"
import flag3 from "../assets/CN.png"
import { useSelector } from 'react-redux';

const UserProfileResume = () => {

    const reduxArr = useSelector((state: any) => state.userData.dataStoreARR); // PROFILE DATA
    const resumeEducationDetails = useSelector((state: any) => state.resumeEducationDataStore.resumeEducationDataStoreARR); //RESUME TAB EDUCATION DATA
    const resumeWorkExpDetails = useSelector((state: any) => state.resumeWorkExpDataStore.resumeWorkExpDataStoreArr); // edu data
    const resumeTabSklllsHold = useSelector((state: any) => state.resumeSkillsStore.userAddedSkills)
    const resumeIntrestsArr = useSelector((state: any) => state.resumeIntrestsStore.userAddedIntrests); // intrests array

    // if the user gives in more than 2 inputs then we get an array of objetcs writing .slice with a position of [-1] to display the latest user input irrrespective of the number of inpuits4

    const latestProfileData = reduxArr.slice(-1)[0]; // profile data
    //const latestSocials = socialsDataStore2.slice(-1)[0]; // socials link
    //const latestResumeBasicDetails = resumeBasicDetails.slice(-1)[0];
    const latestResumeEduData = resumeEducationDetails.slice(-1)[0]
    const latestWorkExp = resumeWorkExpDetails.slice(-1)[0];


    return (
        <div>

            <div className={styles.UserProfileResumeContainer}>

                <p className='font-bold text-2xl text-center'>About Me</p>

                <br />
                <br />


                <div className={styles.useraboutHold}>
                    <div className={styles.userAboutTextHold}>
                        {latestProfileData ? <>
                            <p className={styles.abtmePara}>{latestProfileData.aboutUser}</p>

                        </>
                            :

                            <>
                                <p className={styles.abtmePara}>A self-driven, versatile, reliable, iligent individual who is calm and
                                    cheerful with a team-minded approach to work and getting things done.</p>

                                <p>A student who is passionate and with a keen eye for design ...</p>
                            </>

                        }

                        <button className={styles.readmoreBtn}>Read More</button>

                    </div>
                </div>

                <br />
                <br />


                <p className='font-bold text-2xl text-center'>Work experience</p>
                <br />
                <br />

                {  /*  WORK EXP 1 */}

                <div className={styles.userWorkExperienceHold}>
                    <div className='flex gap-4 ml-6 mt-6 pr-3'>
                        <Image src={google} alt="" quality={100} className={styles.previousCompanyLogo} />
                        {latestWorkExp ? <>
                            <p className='font-semibold text-xl'>{latestWorkExp.jobTiitle} at {latestWorkExp.companyName}</p>

                        </> : <>
                            <p className='font-semibold text-xl'>Front-end developer at Google</p>
                        </>}
                    </div>

                    <div className={styles.userCompanyHeading}>
                        <div className='flex items-center gap-1'>
                            <p>London</p>
                            <p>&#8226;  </p>
                            {latestWorkExp ?
                                <p> {latestWorkExp.companyName} </p>
                                :
                                <p>Google Inc.</p>

                            }
                        </div>

                        <div>
                            {latestWorkExp ?
                                <p className="font-semibold">  {latestWorkExp.jobStartDate} -  {latestWorkExp.jobEndDate}</p>
                                :
                                <p className='font-semibold'>May 2021 - Present</p>

                            }
                        </div>
                    </div>


                    <div className={styles.userPrevCompanyABout}>
                        {latestWorkExp ?
                            <p> {latestWorkExp.jobDescription} </p>
                            :
                            <p>
                                This role would be great for a web developer with 3+ years' experience in designing and developing responsive websites. This position requires a profound understanding of the development process, using front-end technologies including HTML5, CSS3, JavaScript, jQuery, PHP/WordPress.
                            </p>
                        }
                    </div>

                </div>

                <br />
                {  /*  WORK EXP 2 */}

                <div className={styles.userWorkExperienceHold}>
                    <div className='flex gap-4 ml-6 mt-6 pr-3'>
                        <Image src={fb} alt="" quality={100} className={styles.previousCompanyLogo} />
                        <p className='font-semibold text-xl'>Front-end developer at Google</p>
                    </div>

                    <div className={styles.userCompanyHeading}>
                        <div className='flex items-center gap-1'>
                            <p>New York</p>
                            <p>&#8226;  </p>
                            <p>Meta Inc.</p>
                        </div>

                        <div>
                            <p className='font-semibold'>July 2020 - May 2021</p>
                        </div>
                    </div>

                    <div className={styles.userPrevCompanyABout}>
                        <p>
                            This role would be great for a web developer with 3+ years' experience in designing and developing responsive websites.
                        </p>
                    </div>

                    <div className={styles.userPrevCompanyABout2}>

                        <p className='font-semibold text-black mb-3'> Job responsibilities:</p>
                        <div className='flex items-center gap-3'>  <p className={styles.blueLi}></p> <p>  Create an appealing design and turn it into a WordPress plugin </p></div>
                        <div className='flex items-center gap-3'> <p className={styles.blueLi}></p> <p>  Manage all technical aspects of the CMS </p></div>
                        <div className='flex items-center gap-3'> <p className={styles.blueLi}></p> <p> Conducting website/application tests </p></div>
                        <br />
                    </div>

                </div>

                <br />
                <br />

                <p className='font-semibold text-2xl'>Education</p>
                <br />
                <br />

                {  /* EDUCATION 1 */}
                <div className={styles.userEducationHold}>

                    <div className='flex gap-4 ml-6 mt-6'>
                        <Image src={userUniversityLogo} alt="" quality={100} />
                        {latestResumeEduData ?
                            <p className='font-semibold text-xl'> {latestResumeEduData.uniname} </p>
                            :
                            <p className='font-semibold text-xl'>Harvard University</p>
                        }
                    </div>

                    <div className={styles.userCompanyHeading}>

                        {latestResumeEduData ?
                            <p> {latestResumeEduData.degree} </p>

                            :
                            <div className={styles.uniNameHold}>
                                <p>Cambridge, GA</p>
                                <p>&#8226;  </p>
                                <p>Bachelor degree, Computer Science(Bsc)</p>
                            </div>
                        }

                        <div>
                            {latestResumeEduData ?
                                <p className='font-semibold'>{latestResumeEduData.uniStarDate} - {latestResumeEduData.uniEndDate}</p>
                                :

                                <p className='font-semibold'>May 2020 - Present</p>

                            }
                        </div>
                    </div>


                    <div className={styles.universityDescription}>
                        {latestResumeEduData ?
                            <p> {latestResumeEduData.about} </p>
                            :
                            <p>Emory Admissions Fellow; assisted Dean of Admissions with student applications and Emory’s marketing strategy in the roll out of the university’s new website</p>

                        }
                    </div>

                </div>

                <br />
                <br />
                {/*EDUCATION 2  */}

                <div className={styles.userEducationHold}>

                    <div className='flex gap-4 ml-6 mt-6'>
                        <Image src={userUniversityLogo} alt="" quality={100} />
                        <p className='font-semibold text-xl pr-2'>Mister Bim High School</p>
                    </div>

                    <div className={styles.userCompanyHeading}>
                        <div className='flex items-center gap-1'>
                            <p>Atalanta, GA</p>
                        </div>

                        <div>
                            <p className='font-semibold'>September 2016 - 2020</p>
                        </div>
                    </div>

                </div>

                <br />
                <br />


                <p className='font-semibold text-2xl'>Tech skills</p>
                <br />
                <br />


                { /* SKILLS */}

                <div className={styles.userResumeSkillsHold}>
                    
                    <div className={styles.userResumeSkill}>
                        <Image src={html} alt="" quality={100} />
                        <p>Html 5</p>
                    </div>

                    <div className={styles.userResumeSkill}>
                        <Image src={css} alt="" quality={100} />
                        <p>CSS 3</p>
                    </div>

                    <div className={styles.userResumeSkill}>
                        <Image src={js} alt="" quality={100} />
                        <p className='text-base'>Javascript</p>
                    </div>


                    <div className={styles.userResumeSkill}>
                        <Image src={react} alt="" quality={100} />
                        <p>React</p>
                    </div>

                    <div className={styles.userResumeSkill}>
                        <Image src={nextjs} alt="" quality={100} />
                        <p>Next.js</p>
                    </div>
                    <div className={styles.userResumeSkill}>
                        <Image src={mongo} alt="" quality={100} />
                        <p>Mongo</p>
                    </div>
                    <div className={styles.userResumeSkill}>
                        <Image src={node} alt="" quality={100} />
                        <p>NodeJs</p>
                    </div>
                    <div className={styles.userResumeSkill}>
                        <Image src={python} alt="" quality={100} />
                        <p>Python</p>
                    </div>


                </div>

                <br />
                <br />

                <p className='text-2xl font-semibold'> Intrests </p>

                <br />

                <div className={styles.userResumeIntrestsHold}>
                    {resumeIntrestsArr.length > 0 ?
                        <>
                            {resumeIntrestsArr.map((item: string) => {
                                return <p key={item} className={styles.Indivitualintrests}> {item} </p>
                            })}
                        </>

                        :
                        <>
                            <p className={styles.Indivitualintrests}>Semantics</p>
                            <p className={styles.Indivitualintrests}>TED Talks</p>
                            <p className={styles.Indivitualintrests}>Udemy</p>
                            <p className={styles.Indivitualintrests}>Behavorial</p>
                            <p className={styles.Indivitualintrests}>Economics</p>
                            <p className={styles.Indivitualintrests}>Hiking</p>
                        </>
                    }

                </div>


                <br />
                <br />

                <p className='text-2xl font-semibold'>Languages</p>

                <br />

                <div className='flex flex-wrap gap-5'>

                    <div className={styles.languageIndivitual}>
                        <Image src={flag1} quality={100} alt="" />
                        <p>English</p>
                    </div>

                    <div className={styles.languageIndivitual}>
                        <Image src={flag2} quality={100} alt="" />
                        <p>Mandarain</p>
                    </div>

                    <div className={styles.languageIndivitual}>
                        <Image src={flag3} quality={100} alt="" />
                        <p>Cantonese Chinese</p>
                    </div>

                </div>


            </div>

            <br />
            <br />
            <br />
            <br />
        </div>
    )
}

export default UserProfileResume