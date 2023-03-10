import React from 'react'
//import styles from '@/styles/Social.module.css'
import styles from "../styles/Profile.module.css"
import { useState } from "react"
import { useToast } from '@chakra-ui/react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { userDataActions } from "../store/ReduxState";
import { socialsDataActions } from '../store/ReduxState';


type socialsObj = {
  githb: string,
  linkedin: string,
  fb: string | undefined | null,
  insta: string | undefined | null,
  dribble: string | undefined | null,
  behance: string | undefined | null,
}


const Social = () => {

  const [githubLink, setGithubLink] = useState("");
  const [linkedinLink, setLinkedinLink] = useState("");
  const [facebookLink, setFacebookLink] = useState("");
  const [instaLink, setInstaLink] = useState("");
  const [dribbleLink, setDribbleLink] = useState("");
  const [behanceLink, setBehanceLink] = useState("");

  const [userSocialsData, setUserSocialsData] = useState<socialsObj[]>([]);
  const toast = useToast();
  const dispatch = useDispatch();

  //redux array for storinf data;
  //  const reduxArr = useSelector((state: any) => state.userData.dataStoreARR);

  const socialsDataStore2 = useSelector((state: any) => state.socialsDataStore.socialsDataStoreARR);




  /*const submitHandler=(e : React.MouseEvent<HTMLButtonElement>)=>{
    e.preventDefault();

    if (!githubLink.trim() || !linkedinLink.trim()) {
      toast({
        title: "",
        description: "Please fill out Github and Linkedin",
        status: "error",
        duration: 2500,
        isClosable: true,
      });
      return;
    }
    else{
      toast({
        title: "",
        description: "Great, Now Let's fill out Portfolio",
        status: "success",
        duration: 1500,
        isClosable: true,
      });

      userSocialsData.push({
        githb:githubLink,
        linkedin :linkedinLink,
        fb: facebookLink,
        insta:instaLink,
        dribble:dribbleLink,
        behance:behanceLink
      })
      console.log(userSocialsData)
    }

  }*/




  const submitHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const githubRegex = /^https?:\/\/(www\.)?github\.com\/[a-zA-Z0-9_-]+(\/)?$/;
    const linkedinRegex = /^https?:\/\/(www\.)?linkedin\.com\/(in|pub)\/[a-zA-Z0-9_-]+(\/)?$/;
    const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w.-]*)*\/?$/;

    if (!githubLink.trim() || !linkedinLink.trim()) {
      toast({
        title: "",
        description: "Please fill out Github and Linkedin",
        status: "error",
        duration: 2500,
        isClosable: true,
      });
      return;
    }

    if (!githubRegex.test(githubLink.trim())) {
      toast({
        title: "",
        description: "Invalid Github URL",
        status: "error",
        duration: 2500,
        isClosable: true,
      });
      return;
    }

    if (!linkedinRegex.test(linkedinLink.trim())) {
      toast({
        title: "",
        description: "Invalid LinkedIn URL",
        status: "error",
        duration: 2500,
        isClosable: true,
      });
      return;
    }

    if (facebookLink.trim() && !urlRegex.test(facebookLink.trim())) {
      toast({
        title: "",
        description: "Invalid Facebook URL",
        status: "error",
        duration: 2500,
        isClosable: true,
      });
      return;
    }

    if (instaLink.trim() && !urlRegex.test(instaLink.trim())) {
      toast({
        title: "",
        description: "Invalid Instagram URL",
        status: "error",
        duration: 2500,
        isClosable: true,
      });
      return;
    }

    if (dribbleLink.trim() && !urlRegex.test(dribbleLink.trim())) {
      toast({
        title: "",
        description: "Invalid Dribbble URL",
        status: "error",
        duration: 2500,
        isClosable: true,
      });
      return;
    }

    if (behanceLink.trim() && !urlRegex.test(behanceLink.trim())) {
      toast({
        title: "",
        description: "Invalid Behance URL",
        status: "error",
        duration: 2500,
        isClosable: true,
      });
      return;
    }

    // Check if the user has submitted the same social media links before
    const isDuplicate = socialsDataStore2.some(
      (socials: any) =>
        socials.githb === githubLink &&
        socials.linkedin === linkedinLink &&
        socials.fb === facebookLink &&
        socials.insta === instaLink &&
        socials.dribble === dribbleLink &&
        socials.behance === behanceLink
    );

    if (isDuplicate) {
      toast({
        title: "",
        description: "Data has alreday been submitted",
        status: "info",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

  

    toast({
      title: "",
      description: "Great, Now Let's fill out Portfolio",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
    
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });

    const newUserSocialsData: socialsObj = {
      githb: githubLink,
      linkedin: linkedinLink,
      fb: facebookLink,
      insta: instaLink,
      dribble: dribbleLink,
      behance: behanceLink,
    };

    const newReduxArr = [...socialsDataStore2, newUserSocialsData];
    dispatch(socialsDataActions.setSocialsDataStoreARR(newReduxArr));

  };


  return (
    <div className={styles.socialsMainParent}>

      <form className={styles.profileForm}>

        <div>
          <label htmlFor="github" className="block mb-1 ml-1 font-semibold text-black">Github</label>
          <input id="github" value={githubLink} onChange={(e) => setGithubLink(e.target.value)} type="url" placeholder="Github URL" required className={styles.userInputPorfile} />
        </div>

        <div>
          <label htmlFor="linkedin" className="block mb-1 ml-1 font-semibold text-black">Linkedin</label>
          <input id="linkedin" type="text" value={linkedinLink} onChange={(e) => setLinkedinLink(e.target.value)} placeholder="Linkedin URL" required className={styles.userInputPorfile} />
        </div>

        <div>
          <label htmlFor="faceook" className="block mb-1 ml-1 font-semibold text-black">Facebook</label>
          <input id="facebook" type="url" value={facebookLink} onChange={(e) => setFacebookLink(e.target.value)} placeholder="Facebook URL" required className={styles.userInputPorfile} />
        </div>

        <div>
          <label htmlFor="INSTA" className="block mb-1 ml-1 font-semibold text-black">Instagram</label>
          <input id="INSTA" type="url" value={instaLink} onChange={(e) => setInstaLink(e.target.value)} placeholder="Instagram URL" required className={styles.userInputPorfile} />
        </div>

        <div>
          <label htmlFor="driblle" className="block mb-1 ml-1 font-semibold text-black">Dribble</label>
          <input id="driblle" type="url" value={dribbleLink} onChange={(e) => setDribbleLink(e.target.value)} placeholder="Dribble URL" required className={styles.userInputPorfile} />
        </div>

        <div>
          <label htmlFor="behance" className="block mb-1 ml-1 font-semibold text-black">Behance</label>
          <input id="behance" type="url" value={behanceLink} onChange={(e) => setBehanceLink(e.target.value)} placeholder="Behance URL" required className={styles.userInputPorfile} />
        </div>



        <div className='flex gap-4 justify-end w39rem'>
          <button className={styles.deleteBtn}>Cancel</button>
          <button className={styles.uploadImg} onClick={submitHandler}> Save changes</button>
        </div>

      </form>

      <br />
      <br />
      <br />

    </div>
  )
}

export default Social