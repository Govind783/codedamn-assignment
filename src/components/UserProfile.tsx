import React from 'react'
import userProfileBackground from "../assets/userProfileBg.png"
import styles from '@/styles/UserProfile.module.css';
import Image from 'next/image';
import userDp from "../assets/userDisplayImage.png"
import { CiLocationOn } from "react-icons/ci";
import userFb from "../assets/userSocialFacebook.png";
import userinsta from "../assets/userSocialinsta.png";
import usergoogle from "../assets/userSocialGoogle.png";
import userLinkedin from "../assets/userSocailLinkedin.png";
import useryt from "../assets/userSocialYt.png";
import usersaveBtn from "../assets/userSaveBtn.png";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import UserProfilePortfolio from './UserProfilePortfolio';
import UserProfileResume from './UserProfileResume';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

const UserProfile = () => {

    // userBasicDetailsHold  Implies => image, name, badges

    const reduxArr = useSelector((state: any) => state.userData.dataStoreARR); // PROFILE DATA
    const socialsDataStore2 = useSelector((state: any) => state.socialsDataStore.socialsDataStoreARR); // SOCIALS DATA
    //const resumeBasicDetails = useSelector((state: any) => state.resumeBasicDataStore.resumeBasicDetailsDataStoreARR); // RESUME TAB BASIC DATA
    //const resumeEducationDetails = useSelector((state: any) => state.resumeEducationDataStore.resumeEducationDataStoreARR); //RESUME TAB EDUCATION DATA
    //const resumeWorkExpDetails = useSelector((state: any) => state.resumeWorkExpDataStore.resumeWorkExpDataStoreArr); // edu data
    const resumeTabSklllsHold = useSelector((state: any) => state.resumeSkillsStore.userAddedSkills)



    // if the user gives in more than 2 inputs then we get an array of objetcs writing .slice with a position of [-1] to display the latest user input irrrespective of the number of inpuits
    const latestProfileData = reduxArr.slice(-1)[0]; // profile data
    const latestSocials = socialsDataStore2.slice(-1)[0]; // socials link
    //const latestResumeBasicDetails = resumeBasicDetails.slice(-1)[0];
    //const latestResumeEduData = resumeEducationDetails.slice(-1)[0]
    //const latestWorkExp = resumeWorkExpDetails.slice(-1)[0];


    const userSkills = [
        "html 5", "CSS 3", "Javascript", "React", "python", "c++", 'mongo', "nodeJs"
    ]


    useEffect(() => {
    
    }, [])
    


    return (<div className={styles.UserPortfolioMainParent}>

        <div className={styles.userHeaderSectionHold}>

            <Image src={userProfileBackground} alt='' className='userHeaderImage' />

            <div className={styles.userBasicDetailsHold}>

                <Image src={userDp} alt="" quality={100} className={styles.userDp} />




                <div className={styles.headUserHold}>
                    {reduxArr[0] ?
                        <p className='capitalize font-bold text-black text-2xl'> {latestProfileData.name} </p>
                        :
                        <p className='capitalize font-bold text-black text-2xl'> Anna goel </p>
                    }
                    <p className={styles.subscriptionStatus}> Pro </p>
                    <p className={styles.userStatusBadge}> Looking for a job </p>
                </div>

            </div>

            <div className={styles.userHeaderContainer}>

                <div className={styles.userProfessionalsDetailsHold}>
                    <div className={styles.userHeadlineHoldd}>
                        {latestProfileData && latestProfileData.headline ?
                            <span className="latest-profile-data">{latestProfileData.headline.substring(0, 30)}</span> :
                            <span>Full stack dev at codedamn</span>
                        } | {latestProfileData && latestProfileData.college ? latestProfileData.college : <span>Harvard&apos;22</span>}
                    </div>



                    <div className={styles.userLocation} >
                        <CiLocationOn />
                        {latestProfileData && latestProfileData.userLocation ? latestProfileData.userLocation : <p>Mumbai, India</p>}
                    </div>

                </div>


                {resumeTabSklllsHold.length > 0 ?
                    <div className={styles.userSkillsHold}>
                        {resumeTabSklllsHold.map((item: string) => {
                            return <p className={styles.userSkill} key={item} > {item} </p>
                        })}
                    </div>
                    :
                    <div className={styles.userSkillsHold}>
                        {userSkills.map((item) => {
                            return <p className={styles.userSkill} key={item} > {item} </p>
                        })}
                    </div>
                }


                <br />
                <br />



                <div className={styles.UsersocialsMainParent}>
                    <div className='flex gap-6 flex-wrap'>

                        {latestSocials ?
                            <>

                                <Link href={latestSocials.githb} target="_blank" rel="noopener noreferrer">
                                    <Image src={usergoogle} alt="" quality={100} />
                                </Link>

                                <Image src={userinsta} alt="" quality={100} />
                                <Image src={userFb} alt="" quality={100} />

                                <Link href={latestSocials.linkedin} target="_blank" rel="noopener noreferrer">
                                    <Image src={userLinkedin} alt="" quality={100} />
                                </Link>
                                <Image src={useryt} alt="" quality={100} />
                            </>

                            :
                            <>

                                <Image src={usergoogle} alt="" quality={100} />
                                <Image src={userinsta} alt="" quality={100} />
                                <Image src={userFb} alt="" quality={100} />
                                <Image src={userLinkedin} alt="" quality={100} />
                                <Image src={useryt} alt="" quality={100} />
                            </>
                        }

                    </div>

                    <div className='flex flex-wrap gap-6 pr-4'>
                        <Image src={usersaveBtn} alt="" quality={100} />
                        <button className={styles.userContactBtn}>Contact</button>
                    </div>

                </div>


            </div>
            <br />
            <br />
        </div>

        <br />
        <br />

        <div className='userTabsHold'>
            <Tabs variant='soft-rounded' colorScheme='green'>

                <TabList className={styles.chakraTabsHold}>
                    <Tab className={styles.chakraUITab}>Portfolio</Tab>
                    <Tab className={styles.chakraUITab}>Resume </Tab>
                </TabList>

                <TabPanels className={styles.tabContentMainParent}>

                    <TabPanel className=''>
                        <UserProfilePortfolio />
                    </TabPanel>

                    <TabPanel className={styles.tabResumeHold}>
                        <UserProfileResume />
                    </TabPanel>

                </TabPanels>
            </Tabs>
        </div>
    </div>
    )
}

export default UserProfile

/*

import { useSelector } from 'react-redux';

const LatestWorkExperience: React.FC = () => {



  // Render the data of the latest work experience object
  return (
    <div>
      <h2>Latest Work Experience</h2>
      <p>Company: {latestWorkExp.company}</p>
      <p>Position: {latestWorkExp.position}</p>
      <p>Start Date: {latestWorkExp.startDate}</p>
      <p>End Date: {latestWorkExp.endDate}</p>
    </div>
  );
};

export default LatestWorkExperience;


*/