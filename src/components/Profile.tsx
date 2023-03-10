import React from 'react'
import styles from "../styles/Profile.module.css"
import profile from "../assets/userImg.png"
import Image, { StaticImageData } from 'next/image'
import { Switch, FormControl, FormLabel } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import { useToast } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { userDataActions } from "../store/ReduxState";
import { useProfileImageActions } from "../store/ReduxState";
import { profileImageSlice } from '../store/ReduxState';



type ProfileProps = {
  handleChangeTab: (tabValue: string) => void;
  activeTab: string;
};


type UserDataType = {
  name: string;
  userGender: string;
  aboutUser: string;
  userProfession: string;
}

type UserObj = {
  name: string;
  userGender: string;
  aboutUser: string;
  userProfession: string;
  headline: string;
  college: string;
}


const Profile = ({ handleChangeTab, activeTab }: ProfileProps) => {



  const [profileImage, setProfileImage] = useState<string | null | StaticImageData>(null);
  const [userName, setUserName] = useState("");
  const [about, setAbout] = useState("");
  const [profession, setProfession] = useState("");
  const [gender, setGender] = useState("");
  const [userData, setUserData] = useState<UserDataType[]>([]);
  const [date, setDate] = useState(new Date());
  const [location, setLocation] = useState("");
  const [headline, setHeadline] = useState("");
  const [college, setCollege] = useState("");


  //const { setUserProfileImage }=useProfileImageActions();

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.readAsDataURL(file);
      reader.onload = () => {
        setProfileImage(reader.result as string);
      };
    }
  };


  const toast = useToast();
  const dispatch = useDispatch();

  const reduxArr = useSelector((state: any) => state.userData.dataStoreARR);



  /*const handleSaveChanges = (e: React.MouseEvent<HTMLButtonElement>) => {

    e.preventDefault();

    if (nextTab !== '') {
      handleChangeTab(nextTab);
    }
  }
*/


  //       handleChangeTab("Socials")


  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (!userName.trim() || !about.trim() || !profession.trim() || !gender.trim() || !location.trim() || !headline.trim() || !college.trim() || !date) {
      toast({
        title: "",
        description: "Please fill out all fields",
        status: "error",
        duration: 1500,
        isClosable: true,
      });
      return;
    }

    const existingUser = reduxArr.find(user =>
      user.name === userName &&
      user.userGender === gender &&
      user.aboutUser === about &&
      user.userProfession === profession &&
      user.headline === headline &&
      user.college === college
    );

    // if the user submits the samne dataa
    if (existingUser) {
      toast({
        title: "",
        description: "Data Has Already Been Submitted",
        status: "info",
        duration: 2500,
        isClosable: true,
      });
      return;
    }

    // name check
    if (userName.length < 3 || userName.length > 20) {
      toast({
        title: "",
        description: "Please enter a valid name (3-20 characters)",
        status: "error",
        duration: 1500,
        isClosable: true,
      });
      return;
    }


    //gendder checkk
    if (!["male", "female", "other"].includes(gender.toLowerCase())) {
      toast({
        title: "",
        description: "Please enter a valid gender",
        status: "error",
        duration: 1500,
        isClosable: true,
      });
      return;
    }


    // about check
    if (about.length < 50 || about.length > 400) {
      toast({
        title: "",
        description: "Please enter a valid about, (50-400 characters)",
        status: "error",
        duration: 1500,
        isClosable: true,
      });
      return;
    }


    //profe4ssion check
    if (profession.length < 3 || profession.length > 20) {
      toast({
        title: "",
        description: "Please enter a valid profession (3-20 characters)",
        status: "error",
        duration: 1500,
        isClosable: true,
      });
      return;
    }


    // date check
    if (!/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/.test(date.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' }))) {
      toast({
        title: "",
        description: "Please enter a valid date (DD/MM/YYYY)",
        status: "error",
        duration: 1500,
        isClosable: true,
      });
      return;
    }



    const newUserProfileData = {
      name: userName,
      userGender: gender,
      aboutUser: about,
      userLocation: location,
      userProfession: profession,
      headline: headline,
      college: college
    };

    const newReduxArr = [...reduxArr, newUserProfileData];
    dispatch(userDataActions.setDataStoreARR(newReduxArr));

    toast({
      title: "",
      description: "Success, Now Let's Fill The Socials",
      status: "success",
      duration: 3800,
      isClosable: true,
    });

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });

  };




  return (
    <div className={styles.profileMainParent}>

      <div className={styles.profileInputParent}>
        <div className='flex gap-2 items-center'>
          {profileImage ? (
            <Image src={profileImage} width={80} height={20} quality={100} priority className={styles.userDisplayPic} alt='' />
          ) : (
            <Image src={profile} width={80} height={20} quality={100} priority className={styles.userDisplayPic} alt='' />
          )}

          <label htmlFor='userDP'>
            <div className={styles.uploadImg}>Upload new picture</div>
          </label>

          <button className={styles.deleteBtn} onClick={() => {
            setProfileImage(profile)
          }}>Delete</button>

          <input type='file' id='userDP' className='hidden' accept='image/png, image/jpeg' onChange={handleImageChange} />
        </div>


        <br />

        <form className={styles.profileForm} onSubmit={(e) => e.preventDefault()}>

          <div>
            <label htmlFor="name" className="block mb-1 ml-1 font-semibold text-black">Display Name</label>
            <input id="name" value={userName} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)} type="text" placeholder="Your name" className={styles.userInputPorfile} />
          </div>
          <p className={styles.subHeadingForm}>Name enetered above will be used in certificates </p>

          <div>
            <label htmlFor="about" className="block mb-1 ml-1 font-semibold text-black">About</label>
            <input id="about" type="text" value={about} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAbout(e.target.value)} placeholder="About Yourself" className={styles.aboutForm} />
          </div>

          <div>
            <label htmlFor="location" className="block mb-1 ml-1 font-semibold text-black">Location</label>
            <input id="location" type="text" value={location} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLocation(e.target.value)} placeholder="Location" className={styles.userInputPorfile} />
          </div>

          <div>
            <label htmlFor="profession" className="block mb-1 ml-1 font-semibold text-black">Profession</label>
            <input id="profession" type="text" value={profession} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setProfession(e.target.value)} placeholder="Student" className={styles.userInputPorfile} />
          </div>

          <div>
            <label htmlFor="date" className="block mb-1 ml-1 font-semibold text-black">Date of birth</label>
            <input id="date" type="date" placeholder="DD/MM/YY" value={date.toISOString().substr(0, 10)} onChange={(e) => setDate(new Date(e.target.value))} className={styles.userInputPorfile} />
          </div>

          <div>
            <label htmlFor="gender" className="block mb-1 ml-1 font-semibold text-black">Gender</label>
            <input id="gender" value={gender} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setGender(e.target.value)} type="text" placeholder="What is your gender" className={styles.userInputPorfile} />
          </div>

          <div>
            <label htmlFor="headline" className="block mb-1 ml-1 font-semibold text-black">Headline</label>
            <input id="headline" value={headline} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setHeadline(e.target.value)} type="text" placeholder="Headline" className={styles.userInputPorfile} />
          </div>

          <div>
            <label htmlFor="college" className="block mb-1 ml-1 font-semibold text-black">College</label>
            <input id="college" value={college} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCollege(e.target.value)} type="text" placeholder="Headline" className={styles.userInputPorfile} />
          </div>


          <br />


          <div className={styles.w39rem}>
            <p className='font-bold text-2xl text-black'>Section Visiblity</p>
            <p className=' text-gray-600'>Select which sections and content should show on your profile page.</p>
          </div>



          {/*  GREY BOX  */}

          <div className={styles.toggleFormHold}>

            <div className='flex justify-evenly gap-24 mt-10 ml-4'>
              <div className='flex flex-col'>
                <p className='font-bold text-xl text-black'>Followers and following</p>
                <p className={""}>Shows your followers and the users you follow on codedamn</p>
              </div>

              <FormControl display='flex' alignItems='center'>
                <Switch id='' size={'lg'} defaultChecked />
              </FormControl>
            </div>

            <div className='flex justify-evenly gap-24 mt-10 ml-4'>
              <div className={styles.w26rem}>
                <p className='font-bold text-xl text-black'>XP</p>
                <p className={""}>Shows the XP you have earned</p>
              </div>

              <FormControl display='flex' alignItems='center'>
                <Switch id='' size={'lg'} defaultChecked />
              </FormControl>
            </div>


            <div className='flex justify-evenly gap-24 mt-10 ml-4'>
              <div className={styles.w26rem}>
                <p className='font-bold text-xl text-black'>Achievement badges</p>
                <p className={""}>Shows your relative percentile and proficiency</p>
              </div>

              <FormControl display='flex' alignItems='center'>
                <Switch id='' size={'lg'} defaultChecked />
              </FormControl>
            </div>
          </div>

          <div className='flex gap-4 justify-end w41rem'>
            <button className={styles.deleteBtn}>Cancel</button>
            <button className={styles.uploadImg} onClick={handleSubmit} > Save changes </button>
          </div>

        </form>

        <br />
        <br />
        <br />


      </div>

    </div >
  )
}

export default Profile

