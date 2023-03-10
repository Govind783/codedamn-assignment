import React from 'react'
import styles from '@/styles/UserProfilePortfolio.module.css';
import staticon1 from "../assets/stat1.png"
import staticon2 from "../assets/stat2.png"
import staticon3 from "../assets/cup.png"
import staticon4 from "../assets/Heartbeat.png"
import Image from 'next/image';
import { Card, CardHeader, CardBody, CardFooter, Stack } from '@chakra-ui/react'
import playuser1 from '../assets/playground-user1.png';
import playuser2 from '../assets/playground-user2.png';
import htmlplayground from '../assets/html.png';
import projectImage from '../assets/projects.png';
import projectImage2 from '../assets/proj2.png';
import jsplayground from '../assets/js.png';
import htmluserSkill from "../assets/userportfolioHtml.png"
import reactuserSkill from "../assets/react.png"
import jscertificate from "../assets/jscertificate.png"
import reactcertificate from "../assets/reactcertificate.png";
import achievmentcertificate from "../assets/achievmentcertificate.png";
import htmlcertificate from "../assets/htmlcertificate.png";
import { useState } from "react"
import { StaticImageData } from 'next/image';
import { useToast } from '@chakra-ui/react';

type certificateObj = {
  id: number,
  certificateTitle: string,
  issueDate: string,
  image: string | StaticImageData,
}

type playgroundObj = {
  id: number,
  playgroundTitle: string,
  skill1: string,
  skill2: string,
  playgroundImage: string | StaticImageData

}

const UserProfilePortfolio = () => {

  const toast = useToast();

  // certificates

  const [cretiificates, setCertificates] = useState<certificateObj[]>([
    {
      id: 1,
      certificateTitle: "Advanced theoretical Javascript",
      issueDate: "Issued on Dec 16th, 2022",
      image: jscertificate
    },

    {
      id: 2,
      certificateTitle: "HTML/CSS",
      issueDate: "Issued on Dec 16th, 2022",
      image: htmlcertificate
    },

    {
      id: 3,
      certificateTitle: "Build a decentralized to-do application",
      issueDate: "Issued on Dec 16th, 2022",
      image: achievmentcertificate,
    },

    {
      id: 4,
      certificateTitle: "React JS",
      issueDate: "Issued on Dec 16th, 2022",
      image: reactcertificate
    },
  ]);
  const [certiicateTitleInput, setCertiicateTitleInput] = useState("");
  const [certificateIssueDateInput, setCertificateIssueDateInput] = useState("");

  //playgrounds

  const [playGrounds, setPlayGrounds] = useState<playgroundObj[]>([
    {
      id: 1,
      playgroundTitle: "Playground title",
      playgroundImage: htmlplayground,
      skill1: "HTML",
      skill2: "CSS",
    },

    {
      id: 2,
      playgroundTitle: "Playground title",
      playgroundImage: jsplayground,
      skill1: "HTML",
      skill2: "CSS",
    },

    {
      id: 3,
      playgroundTitle: "Playground title",
      playgroundImage: jsplayground,
      skill1: "HTML",
      skill2: "CSS",
    },

    {
      id: 4,
      playgroundTitle: "Playground title",
      playgroundImage: htmlplayground,
      skill1: "HTML",
      skill2: "CSS",
    },
  ]);
  const [playgroundTitleInput, setplaygroundTitleInput] = useState("");
  const [playgroundImageInput, setplaygroundImageInput] = useState("");
  const [playgroundSkill1Input, setplaygroundSkill1Input] = useState("");
  const [playgroundSkill2Input, setplaygroundSkill2Input] = useState("");



  //projects
  const [projects, setProjects] = useState([

    {
      id: 1,
      projectName: "Personal portfolio website",
      projectImage: projectImage,
      skill1: "HTML",
      skill2: "CSS",
      skill3: "React",
    },

    {
      id: 2,
      projectName: "Personal portfolio website",
      projectImage: projectImage2,
      skill1: "HTML",
      skill2: "CSS",
      skill3: "React",
    },

    {
      id: 3,
      projectName: "Personal portfolio website",
      projectImage: projectImage2,
      skill1: "HTML",
      skill2: "CSS",
      skill3: "React",
    },

    {
      id: 4,
      projectName: "Personal portfolio website",
      projectImage: projectImage2,
      skill1: "HTML",
      skill2: "CSS",
      skill3: "React",
    },
  ]);
  const [projectTitleInput, setprojectTitleInput] = useState("")
  const [projectSkill1Input, setprojectSkill1Input] = useState("")
  const [projectSkill2Input, setprojectSkill2Input] = useState("")
  const [projectSkill3Input, setprojectSkill3Input] = useState("")
  const [projectImageInput, setprojectImageInput] = useState("")


  // mmodal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [playgroundModal, setPlayGroundModal] = useState(false);
  const [projectModal, setProjectModal] = useState(false);



  const addCertificateHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!certiicateTitleInput.trim() || !certificateIssueDateInput.trim()) {
      toast({
        title: "",
        description: "Please fill out all fields",
        status: "error",
        duration: 1500,
        isClosable: true,
      });
      return;
    }

    const id = Math.floor(Math.random() * 9000) + 1000;;
    const imageCertificate = id % 2 === 0 ? htmlcertificate : jscertificate

    // validate date format
    const dateRegex = /^[a-z]{3,}\s*-\s*\d{4}$/i;

    if (!dateRegex.test(certificateIssueDateInput.trim())) {
      toast({
        title: "",
        description: "enter a valid date (e.g. may-2020)",
        status: "error",
        duration: 2900,
        isClosable: true,
      });
      return;
    }

    cretiificates.push({
      id: id,
      certificateTitle: certiicateTitleInput,
      issueDate: certificateIssueDateInput,
      image: imageCertificate,
    });
    toast({
      title: "",
      description: "Success",
      status: "success",
      duration: 1500,
      isClosable: true,
    })

    setIsModalOpen(false);
    setCertiicateTitleInput("");
    setCertificateIssueDateInput("");

  }

  const addPlayGroundHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!playgroundTitleInput.trim() || !playgroundSkill1Input.trim() || !playgroundSkill2Input.trim()) {
      toast({
        title: "",
        description: "Please fill out all fields",
        status: "error",
        duration: 1500,
        isClosable: true,
      });
      return;
    }

    const id = Math.floor(Math.random() * 9000) + 1000;;
    const imageCertificate = id % 2 !== 0 ? htmlplayground : jsplayground


    playGrounds.push({
      id: id,
      playgroundTitle: playgroundTitleInput,
      skill1: playgroundSkill1Input,
      skill2: playgroundSkill2Input,
      playgroundImage: imageCertificate
    });

    toast({
      title: "",
      description: "Success",
      status: "success",
      duration: 1500,
      isClosable: true,
    })

    setPlayGroundModal(false);
    setplaygroundTitleInput("");
    setplaygroundSkill1Input("");
    setplaygroundSkill2Input("");

  }

  const addProjectHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!projectTitleInput.trim() || !projectSkill1Input.trim() || !projectSkill2Input.trim() || !projectSkill3Input.trim()) {
      toast({
        title: "",
        description: "Please fill out all fields",
        status: "error",
        duration: 1500,
        isClosable: true,
      });
      return;
    }

    const id = Math.floor(Math.random() * 9000) + 1000;;
    const imageCertificate = id % 2 !== 0 ? projectImage : projectImage2


    projects.push({
      id: id,
      projectName: projectTitleInput,
      skill1: projectSkill1Input,
      skill2: projectSkill2Input,
      skill3: projectSkill3Input,
      projectImage: imageCertificate
    });

    toast({
      title: "",
      description: "Success",
      status: "success",
      duration: 1500,
      isClosable: true,
    })

    setProjectModal(false);
    setprojectSkill1Input("");
    setprojectSkill2Input("");
    setprojectSkill3Input("");
    setprojectTitleInput("");
  }



  return (
    <div>

      <div className={styles.UserProfilePortfolioConatiner}>
        <p className='font-bold text-2xl'> Stats </p>
        <br />
        <br />
      </div>

      <div className={styles.statsCardHold}>

        <div className={styles.indivitualStatCard}>
          <div className='flex'>
            <Image src={staticon1} alt="" quality={100} />
            <div className='flex flex-col'>
              <p className={styles.statHeading}>2</p>
              <p className='text-gray-600 font-normal'>Longest streak</p>
            </div>
          </div>
        </div>

        <div className={styles.indivitualStatCard}>
          <div className='flex'>
            <Image src={staticon2} alt="" quality={100} />
            <div className='flex flex-col'>
              <p className={styles.statHeading}>1200</p>
              <p className='text-gray-600 font-normal'>Experience points</p>
            </div>
          </div>
        </div>

        <div className={styles.indivitualStatCard}>
          <div className='flex'>
            <Image src={staticon3} alt="" quality={100} />
            <div className='flex flex-col'>
              <p className={styles.statHeading}>Novice</p>
              <p className='text-gray-600 font-normal'>Current league</p>
            </div>
          </div>
        </div>

        <div className={styles.indivitualStatCard}>
          <div className='flex'>
            <Image src={staticon4} alt="" quality={100} />
            <div className='flex flex-col'>
              <p className={styles.statHeading}>120</p>
              <p className='text-gray-600 font-normal'>Karma points</p>
            </div>
          </div>
        </div>


      </div>


      <br />
      <br />

      <div className='flex justify-between items-center'>

        <p className='text-2xl font-bold'>Projects</p>
        <label htmlFor="my-modal-6" onClick={() => setProjectModal(true)}>
          <p className='purpleColor font-semibold cursor-pointer' >Create new Project</p>
        </label>
      </div>

      <br />
      <br />

      {  /* ADD PROJECTS MODAL  */}
      <input type="checkbox" id="my-modal-6" checked={projectModal} className="modal-toggle" />

      <label htmlFor="my-modal-6" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <div className={styles.userModalInputHold}>
            <div>
              <label htmlFor="project-title" className="block mb-1 ml-1 font-semibold text-black">Project Title</label>
              <input id="project-title" type="text" value={projectTitleInput} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setprojectTitleInput(e.target.value)} placeholder="Project title" className={styles.userModalInput} />
            </div>

            <div>
              <label htmlFor="project-skill1" className="block mb-1 ml-1 font-semibold text-black">Skill Learnt</label>
              <input id="project-skill1" type="text" value={projectSkill1Input} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setprojectSkill1Input(e.target.value)} placeholder="Skill learnt" className={styles.userModalInput} />
            </div>

            <div>
              <label htmlFor="project-skill2" className="block mb-1 ml-1 font-semibold text-black">Skill Learnt</label>
              <input id="project-skill2" type="text" value={projectSkill2Input} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setprojectSkill2Input(e.target.value)} placeholder="Skill learnt" className={styles.userModalInput} />
            </div>

            <div>
              <label htmlFor="project-skill3" className="block mb-1 ml-1 font-semibold text-black">Skill Learnt</label>
              <input id="project-skill3" type="text" value={projectSkill3Input} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setprojectSkill3Input(e.target.value)} placeholder="Skill learnt" className={styles.userModalInput} />
            </div>

            <div className='flex justify-center w-80 gap-4'>
              <button onClick={addProjectHandler} className={styles.addCertificateBtn}>Submit </button>
              <button onClick={() => setProjectModal(false)} className={styles.cancelBtn}>Cancel </button>
            </div>

          </div>
        </label>
      </label>




      {  /* projects  */}

      <div className={styles.portfolioHold}>
        {projects.map((item) => {
          return (

            <Card maxW='sm'>
              <CardBody className={styles.UserprojectCard}>
                <Image
                  src={item.projectImage}
                  alt='Green double couch with wooden legs'
                  className='rounded-lg'
                />
                <Stack mt='6' spacing='3'>

                  <div className='flex justify-between'>
                    <p className='text-xl font-semibold text-black'>{item.projectName}</p>

                  </div>

                  <div className='flex gap-2 text-gray-600 flex-wrap' id='ProjectLanguage'>
                    <Image src={htmluserSkill} alt="" quality={100} />
                    <p className=''> {item.skill1}/{item.skill2} </p>
                    <p>&#8226;</p>
                    <Image src={reactuserSkill} alt="" quality={100} />
                    <p> {item.skill3} </p>
                  </div>


                </Stack>
              </CardBody>

            </Card>
          )
        })}


      </div>



      <br />
      <br />
      <br />

      <div className='flex justify-between gap-12 items-center'>
        <p className='text-2xl font-bold'>Playgrounds</p>
        <label htmlFor="my-modal-5" onClick={() => setPlayGroundModal(true)}>
          <p className='purpleColor font-semibold cursor-pointer'>Create new playground</p>
        </label>
      </div>

      {  /* ADD PLAYGROUND MODAL  */}
      <input type="checkbox" id="my-modal-5 " checked={playgroundModal} className="modal-toggle" />

      <label htmlFor="my-modal-5" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <div className={styles.userModalInputHold}>
            <div>
              <label htmlFor="certificate-title" className="block mb-1 ml-1 font-semibold text-black">Playground Title</label>
              <input id="certificate-title" type="text" value={playgroundTitleInput} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setplaygroundTitleInput(e.target.value)} placeholder="Playground title" className={styles.userModalInput} />
            </div>

            <div>
              <label htmlFor="certificate-skill1" className="block mb-1 ml-1 font-semibold text-black">Skill Learnt</label>
              <input id="certificate-skill1" type="text" value={playgroundSkill1Input} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setplaygroundSkill1Input(e.target.value)} placeholder="Skill learnt" className={styles.userModalInput} />
            </div>

            <div>
              <label htmlFor="certificate-skill1" className="block mb-1 ml-1 font-semibold text-black">Skill Learnt</label>
              <input id="certificate-skill1" type="text" value={playgroundSkill2Input} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setplaygroundSkill2Input(e.target.value)} placeholder="Skill learnt" className={styles.userModalInput} />
            </div>

            <div className='flex justify-center w-80 gap-4'>
              <button onClick={addPlayGroundHandler} className={styles.addCertificateBtn}>Submit </button>
              <button onClick={() => setPlayGroundModal(false)} className={styles.cancelBtn}>Cancel </button>
            </div>

          </div>
        </label>
      </label>


      <br />
      <br />

      {/* PLAYGROUNDS */}

      <div className='mx-auto'>
        <div className={styles.playgroundCardsHold}>
          {playGrounds.map((item) => {
            return (
              <div className={styles.indivitualPlayground}>

                <div className="flex items-center gap-4 h-9">
                  <Image src={item.playgroundImage} quality={100} alt="" className='mt-3' />
                  <p className="font-semibold text-black mr-2"> {item.playgroundTitle} </p>
                </div>


                <div className='flex flex-col items-center mr-6 gap-2 mr-auto'>

                  <div className={styles.playgroundSkillContainer}>
                    <p className='font-extralight uppercase text-sm'> {item.skill1.substring(0, 5)}/{item.skill2.substring(0, 5)}  </p>
                    <p>&#8226;</p>
                    <p>1 min ago</p>
                  </div>

                  <div className={styles.playgroundsharedUser}>
                    <Image src={playuser1} className={styles.playgorundUser} alt="" quality={100} width={30} height={20} />
                    <Image src={playuser2} className={styles.playgorundUser} alt="" quality={100} width={30} height={20} />
                    <p className='text-xs'>Shared with <b> Adam, Anna .. </b>+7 <br /> more</p>
                  </div>

                </div>



              </div>
            )
          })}


        </div>
      </div>

      <br />
      <br />

      <div className='flex justify-between items-center'>
        <p className='text-2xl font-bold'>Certificates</p>
        <label htmlFor="my-modal-4" onClick={() => setIsModalOpen(true)}>
          <p className='purpleColor font-semibold cursor-pointer'>Add new Certificate</p>
        </label>
      </div>

      <br />
      <br />
      {  /* ADD PROJECT MODAL  */}
      <input type="checkbox" id="my-modal-4" checked={isModalOpen} className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <div className={styles.userModalInputHold}>
            <div>
              <label htmlFor="certificate-title" className="block mb-1 ml-1 font-semibold text-black">Certificate Title</label>
              <input id="certificate-title" type="text" value={certiicateTitleInput} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCertiicateTitleInput(e.target.value)} placeholder="Certificate title" className={styles.userModalInput} />
            </div>

            <div>
              <label htmlFor="certificate-skill1" className="block mb-1 ml-1 font-semibold text-black">Issue Date</label>
              <input id="certificate-skill1" type="text" value={certificateIssueDateInput} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCertificateIssueDateInput(e.target.value)} placeholder="Skill utilised" className={styles.userModalInput} />
            </div>

            <div className='flex justify-center w-80 gap-4'>
              <button onClick={addCertificateHandler} className={styles.addCertificateBtn}>Submit </button>
              <button onClick={() => setIsModalOpen(false)} className={styles.cancelBtn}>Cancel </button>
            </div>


          </div>


        </label>
      </label>

      {/*   CERTIFICATES  */}

      <div className={styles.certificatesHold}>
        {cretiificates.map((item) => {
          return (
            <div className={styles.indivitualCertificate}>

              <Image src={item.image} quality={100} alt="" className='ml-5 mt-5 mb-3' />

              <div className='flex flex-col pl-4'>
                <p className='font-semibold text-lg'>{item.certificateTitle}</p>
                <p className='text-gray-500'>Issued on {item.issueDate} </p>
                <p className='text-gray-500 mt-2 font-semibold pb-3'>See credentials</p>
              </div>

            </div>
          )
        })}

      </div>


      <br />
      <br />
      <br />
      <br />

    </div>
  )
}

export default UserProfilePortfolio
