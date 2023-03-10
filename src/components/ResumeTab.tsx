import React from 'react'
import styles from "../styles/ResumeTab.module.css"
import Image, { StaticImageData } from 'next/image'
import { Switch, FormControl, FormLabel, Divider } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import { useToast } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { userDataActions } from "../store/ReduxState";
import Select from 'react-select';
import { resumebasicDetailsACtions } from "../store/ReduxState";
import { resumeEducationDetailsActions } from "../store/ReduxState";
import { resumeWorkExpActions } from "../store/ReduxState";
import { resumeAddSkillActions } from "../store/ReduxState";
import { resumeAddIntrestsActions } from "../store/ReduxState";




type edudataObj = {
    uniname: string,
    degree: string,
    uniStarDate: string,
    uniEndDate: string,
    about: string
}

type workExpObj = {
    jobTiitle: string,
    companyName: string,
    jobStartDate: string,
    jobEndDate: string,
    jobDescription: string,
}

type basicDetailsObj = {
    headline: string,
    collegeName: string,
    about: string,
}

const ResumeTab = () => {
    //dropdow
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedOption2, setSelectedOption2] = useState(null);

    // first 3inputs
    const [headline, setHeadline] = useState("");
    const [college, setCollege] = useState("");
    const [introduction, setIntroduction] = useState("");


    //university state
    const [uniName, setUniName] = useState("");
    const [degree, setDegree] = useState("");
    const [uniStarDate, setUniStartDate] = useState("");
    const [uniEndDate, setuniEndDate] = useState("");
    const [uniAbout, setUniAbout] = useState("");


    // job
    const [jobTitle, setJobTitle] = useState("")
    const [company, setCompany] = useState("")
    const [jobStartDate, setJobStartDate] = useState("")
    const [jobEndDate, setJobEndDate] = useState("")
    const [jobAbout, setJobAbout] = useState("")


    // skills
    const [skillsData, setSkillsData] = useState<string[]>([]);
    const [skillValue, setSkillValue] = useState("")

    // intrests
    const [intrestsData, setIntrestsData] = useState<string[]>([]);
    const [intrestValue, setIntrestValue] = useState("")


    // EDU
    const [eduData, setEduData] = useState<edudataObj[]>([]);
    const [workExpData, setWorkExpData] = useState<workExpObj[]>([]);
    const [basicDetailsData, setBasicDetailsData] = useState<basicDetailsObj[]>([]);

    const dispatch = useDispatch();

    const resumeBasicDetails = useSelector((state: any) => state.resumeBasicDataStore.resumeBasicDetailsDataStoreARR); // basic details First 3 inputs and dropdown val8ue
    const resumeEducationDetails = useSelector((state: any) => state.resumeEducationDataStore.resumeEducationDataStoreARR); // edu data
    const resumeWorkExpDetails = useSelector((state: any) => state.resumeWorkExpDataStore.resumeWorkExpDataStoreArr); // edu data



    const options = [
        { value: 'Looking for a job', label: 'Looking for a job' },
        { value: 'Just exploring', label: 'Just exploring' },
    ];

    const options2 = [
        { value: 'Student', label: 'Student' },
        { value: 'Fresher', label: 'Fresher' },
        { value: 'Experienced', label: 'Experienced' },
    ]

    const toast = useToast();

    const resumeSkillReduxARR = useSelector((state: any) => state.resumeSkillsStore.userAddedSkills);

    const skilSubmitHandler = (e: React.MouseEvent<HTMLButtonElement>) => {

        e.preventDefault();
        if (skillValue.length > 0) {

            skillsData.push(skillValue)

            const newReduxArr = [...resumeSkillReduxARR, skillValue];
            dispatch(resumeAddSkillActions.setResumeSkillsARR(newReduxArr));

        }
        else {
            toast({
                title: "",
                description: "input cannot be empty",
                status: "error",
                duration: 1500,
                isClosable: true,
            });
        }
        setSkillValue("");
    }

    useEffect(() => {

    }, [resumeSkillReduxARR])


    const resumeIntrestsResuxARR = useSelector((state: any) => state.resumeIntrestsStore.userAddedIntrests);


    const intresetSubmitHandler = (e: React.MouseEvent<HTMLButtonElement>) => {

        e.preventDefault();
        if (intrestValue.length > 0) {
            intrestsData.push(intrestValue);
            const newReduxArr = [...resumeIntrestsResuxARR, intrestValue];
            dispatch(resumeAddIntrestsActions.setResumeIntrestsARR(newReduxArr));

        }

        else {
            toast({
                title: "",
                description: "input cannot be empty",
                status: "error",
                duration: 1500,
                isClosable: true,
            });
        }

        setIntrestValue("");
    }

    useEffect(() => {

    }, [resumeIntrestsResuxARR])
    // user data

    const submitEducationHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (!uniStarDate.trim() || !uniName.trim() || !uniEndDate.trim() || !degree.trim() || !uniAbout.trim()) {
            toast({
                title: "",
                description: "Please fill out all fields",
                status: "error",
                duration: 1500,
                isClosable: true,
            });
            return;
        }

        // validate uniStarDate format
        const dateRegex = /^[a-z]{3,}\s*-\s*\d{4}$/i;

        if (!dateRegex.test(uniStarDate.trim())) {
            toast({
                title: "",
                description: "enter a valid date (e.g. may-2020)",
                status: "error",
                duration: 2900,
                isClosable: true,
            });
            return;
        }

        // uni end dat
        if (!dateRegex.test(uniEndDate.trim())) {
            toast({
                title: "",
                description: "enter a valid date (e.g. may-2020)",
                status: "error",
                duration: 2900,
                isClosable: true,
            });
            return;
        }

        // if user enters the same date for start and end date as welll
        if (uniStarDate === uniEndDate) {
            toast({
                title: "",
                description: "start date and end date cannot be same",
                status: "error",
                duration: 2400,
                isClosable: true,
            })
            return;
        }


        if (uniAbout.length < 40 || uniAbout.length > 400) {
            toast({
                title: "",
                description: "Please enter a valid about (40-400 characters)",
                status: "error",
                duration: 1500,
                isClosable: true,
            });
            return;
        }

        // if user is sbmitting same data again
        const dataExists = resumeEducationDetails.some((data: any) => {
            return (
                data.uniname === uniName &&
                data.degree === degree &&
                data.uniStarDate === uniStarDate &&
                data.uniEndDate === uniEndDate &&
                data.about === uniAbout
            );
        });

        if (dataExists) {
            toast({
                title: "",
                description: "You have already submitted the data",
                status: "info",
                duration: 3500,
                isClosable: true,
            });
            return;
        }


        const educationDataOj = {
            uniname: uniName,
            degree: degree,
            uniStarDate: uniStarDate,
            uniEndDate: uniEndDate,
            about: uniAbout,
        }

        const newReduxArr = [...resumeEducationDetails, educationDataOj];
        dispatch(resumeEducationDetailsActions.setResumeEducationDataARR(newReduxArr));

        toast({
            title: "",
            description: "Submitted",
            status: "success",
            duration: 1500,
            isClosable: true,
        });
    };


    const submitWorkExpHamndler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (!jobTitle.trim() || !company.trim() || !jobStartDate.trim() || !jobEndDate.trim() || !jobAbout.trim()) {
            toast({
                title: "",
                description: "Please fill out all fields",
                status: "error",
                duration: 1500,
                isClosable: true,
            });
            return;
        }

        if (jobAbout.length < 40 || jobAbout.length > 400) {
            toast({
                title: "",
                description: "Please enter a valid about (40-400 characters)",
                status: "error",
                duration: 1500,
                isClosable: true,
            });
            return;
        }

        // validate uniStarDate format
        const dateRegex = /^[a-z]{3,}\s*-\s*\d{4}$/i;

        if (!dateRegex.test(jobStartDate.trim())) {
            toast({
                title: "",
                description: "enter a valid date (e.g. may-2020)",
                status: "error",
                duration: 2900,
                isClosable: true,
            });
            return;
        }

        // validate job end date format

        if (!dateRegex.test(jobEndDate.trim())) {
            toast({
                title: "",
                description: "enter a valid date (e.g. may-2020)",
                status: "error",
                duration: 2900,
                isClosable: true,
            });
            return;
        }

        // if user enters the same date for start and end date as welll
        if (jobStartDate === jobEndDate) {
            toast({
                title: "",
                description: "start date and end date cannot be same",
                status: "error",
                duration: 2400,
                isClosable: true,
            })
            return;
        }


        // if user is sbmitting same data again
        const dataExists = resumeWorkExpDetails.some((data: any) => {
            return (
                data.jobTiitle === jobTitle &&
                data.companyName === company &&
                data.jobStartDate === jobStartDate &&
                data.jobEndDate === jobEndDate &&
                data.jobDescription === jobAbout
            );
        });

        if (dataExists) {
            toast({
                title: "",
                description: "You have already submitted the data",
                status: "info",
                duration: 3500,
                isClosable: true,
            });
            return;
        }


        const workExpObj = {
            jobTiitle: jobTitle,
            companyName: company,
            jobStartDate: jobStartDate,
            jobEndDate: jobEndDate,
            jobDescription: jobAbout,
        }

        const newReduxArr = [...resumeWorkExpDetails, workExpObj];
        dispatch(resumeWorkExpActions.setResumeWorkExpDataArr(newReduxArr));

        toast({
            title: "",
            description: "Submitted",
            status: "success",
            duration: 1500,
            isClosable: true,
        });


    }


    const basicDetailsSubmitHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (!headline.trim() || !college.trim() || !introduction.trim()) {
            toast({
                title: "",
                description: "Please fill out all fields",
                status: "error",
                duration: 1500,
                isClosable: true,
            });
            return;
        }

        if (introduction.length < 10 || introduction.length > 100) {
            toast({
                title: "",
                description: "Please enter a valid Introduction (10-100 characters)",
                status: "error",
                duration: 2800,
                isClosable: true,
            });
            return;
        }


        // if user is sbmitting same data again ****
        const dataExists = resumeBasicDetails.some((data: any) => {
            return (
                data.headline === headline &&
                data.collegeName === college &&
                data.about === introduction
            );
        });

        if (dataExists) {
            toast({
                title: "",
                description: "Data Has Already Been Submitted",
                status: "info",
                duration: 2800,
                isClosable: true,
            });
            return;
        }


        /*basicDetailsData.push(
            {
                headline: headline,
                collegeName: college,
                about: introduction,
            }
        )
*/

        const userBasicDetails = {
            headline: headline,
            collegeName: college,
            about: introduction,
        };

        const newReduxArr = [...resumeBasicDetails, userBasicDetails];
        dispatch(resumebasicDetailsACtions.setResumeBasicDetailsARR(newReduxArr));

        toast({
            title: "",
            description: "Submitted",
            status: "success",
            duration: 1500,
            isClosable: true,
        });

    }


    return (
        <div className={styles.ResumeTabMainParent}>

            <div className={styles.resumeTabContainer}>

                <div className={styles.resumeDropdownHold}>


                    <div>
                        <p className='font-semibold text-lg text-black'>Are you...</p>
                        <Select
                            defaultValue={selectedOption}
                            onChange={() => setSelectedOption}
                            options={options}
                        />
                    </div>

                    <div>
                        <p className='font-semibold text-lg text-black'>Are you...</p>
                        <Select
                            defaultValue={selectedOption2}
                            onChange={() => setSelectedOption2}
                            options={options2}
                        />
                    </div>

                </div>

                <br />
                <br />

                <div>
                    <form className={styles.resumeTabFromHold}>
                        <label htmlFor='headline' className='font-semibold text-black'>Headline</label>
                        <input id='headline' type={"text"} value={headline} onChange={(e) => setHeadline(e.target.value)} className={styles.headlineInput} placeholder="Headline" />

                        <label htmlFor='college' className='font-semibold text-black'>College Name</label>
                        <input id='college' type={"text"} value={college} onChange={(e) => setCollege(e.target.value)} className={styles.headlineInput} placeholder="college" />


                        <label htmlFor='intro' className='font-semibold text-black'>Introduction</label>
                        <input id='intro' type={"text"} value={introduction} onChange={(e) => setIntroduction(e.target.value)} className={styles.headlineInput} placeholder="introduction" />

                        <div className='flex  justify-end mt-3'>
                            <button className={styles.dataSubmitBtn} onClick={basicDetailsSubmitHandler}>Submit</button>
                        </div>
                    </form>
                </div>

                <br />
                <br />
                <br />

                <div>
                    <p className='font-semibold text-xl text-center text-black'>Professional Details</p>
                </div>

                <br />
                <br />

                <div className='flex justify-center gap-5 flex-wrap'>
                    <div>
                        <p className='font-semibold'>Add Education</p>
                        <br />

                        <form className='flex flex-col gap-4'>
                            <input type={"text"} value={uniName} onChange={(e) => setUniName(e.target.value)} className={styles.workExpInputForm} placeholder="University Name" />
                            <input type={"text"} value={degree} onChange={(e) => setDegree(e.target.value)} className={styles.workExpInputForm} placeholder="Degree" />
                            <input type={"text"} value={uniStarDate} onChange={(e) => setUniStartDate(e.target.value)} className={styles.workExpInputForm} placeholder="Start Date" />
                            <input type={"text"} value={uniEndDate} onChange={(e) => setuniEndDate(e.target.value)} className={styles.workExpInputForm} placeholder="End Date" />
                            <input type={"text"} value={uniAbout} onChange={(e) => setUniAbout(e.target.value)} className={styles.workExpInputForm} placeholder="Description" />
                            <div className='flex justify-end '>
                                <button className={styles.dataSubmitBtn} onClick={submitEducationHandler}>Submit</button>
                            </div>
                        </form>
                    </div>

                    <Divider orientation='vertical' width={1} height={80} className="mx-auto text-blue-800" />

                    <div>
                        <p className='font-semibold'>Work Experience</p>
                        <br />
                        <form className='flex flex-col gap-4'>
                            <input type={"text"} value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} className={styles.workExpInputForm} placeholder="Job Title" />
                            <input type={"text"} value={company} onChange={(e) => setCompany(e.target.value)} className={styles.workExpInputForm} placeholder="Company" />
                            <input type={"text"} value={jobStartDate} onChange={(e) => setJobStartDate(e.target.value)} className={styles.workExpInputForm} placeholder="Start Date" />
                            <input type={"text"} value={jobEndDate} onChange={(e) => setJobEndDate(e.target.value)} className={styles.workExpInputForm} placeholder="End Date" />
                            <input type={"text"} value={jobAbout} onChange={(e) => setJobAbout(e.target.value)} className={styles.workExpInputForm} placeholder="Description" />
                            <div className='flex justify-end '>
                                <button className={styles.dataSubmitBtn} onClick={submitWorkExpHamndler}>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>

                <br />
                <br />
                <br />


                { /* COLUMN 2  */}
                <div>
                    <p className='font-semibold text-xl text-center text-black'>Personal Details</p>
                </div>

                <br />
                <br />

                <div className='flex justify-center gap-5 flex-wrap'>
                    <div className=' w-72'>
                        <p className='font-semibold'>Add Skills</p>
                        <br />

                        <textarea className="textarea textarea-bordered w-72 h-28" value={skillValue} onChange={(e) => setSkillValue(e.target.value)} placeholder="Add a skill"></textarea>

                        <div className='flex justify-end mt-2'>
                            <button className={styles.addSkillBtn} onClick={skilSubmitHandler}>Add Skill</button>
                        </div>

                        <br />

                        <div className={""}>
                            {skillsData.length > 0 && <div className={styles.addedSkillsHold}>
                                {skillsData.map((item) => {
                                    return <p className={styles.indivitualAddedSkill} key={item}> {item.substring(0, 9)} </p>
                                })}
                            </div>}
                        </div>


                    </div>

                    <Divider orientation='vertical' width={1} height={60} className="mx-auto text-blue-800" />

                    <div className=' w-72'>
                        <p className='font-semibold'>Add Intrests</p>
                        <br />
                        <textarea className="textarea textarea-bordered w-72 h-28" value={intrestValue} onChange={(e) => setIntrestValue(e.target.value)} placeholder="Add an Intrest"></textarea>

                        <div className='flex justify-end mt-2'>
                            <button className={styles.addSkillBtn} onClick={intresetSubmitHandler}>Add Intrest</button>
                        </div>

                        <br />

                        {intrestsData.length > 0 && <div className={styles.addedSkillsHold}>
                            {intrestsData.map((item) => {
                                return <p className={styles.indivitualAddedSkill} key={item}> {item.substring(0, 9)} </p>
                            })}
                        </div>}
                    </div>

                </div>

            </div>


            <br />
            <br />

        </div>
    )
}

export default ResumeTab


