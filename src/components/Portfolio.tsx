import React, { useState } from 'react';
import styles from '@/styles/Portolio.module.css';
import htmlplayground from '../assets/html.png';
import projectImage from '../assets/projects.png';
import projectImage2 from '../assets/proj2.png';
import jsplayground from '../assets/js.png';
import Image from 'next/image';
import playuser1 from '../assets/playground-user1.png';
import playuser2 from '../assets/playground-user2.png';
import { Card, CardHeader, CardBody, CardFooter, Stack } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { InfinitySpin } from 'react-loader-spinner';

const Portfolio = () => {
  const [isChecked, setIsChecked] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: any) => {
    setIsChecked(e.target.checked);
  };

  const router = useRouter();


  const handleButtonClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push('/user');
    }, 2000);
  }



  return (
    <div className={styles.PortfolioMainParent}>
      <div className={styles.PortfolioParentHold}>
        <div className="flex justify-between">
          <p className="font-bold text-2xl text-black"> Playgrounds </p>
          <p className="text-gray-500 text-md">see all </p>
        </div>

        <div className={styles.playgroundCardsHold}>


          <div className={styles.indivitualPlayground}>
            <div className="flex items-center gap-4">
              <Image src={htmlplayground} quality={100} alt="" className='mt-3' />
              <p className="font-semibold text-black mr-2">Playground Title</p>
              <div className={styles.radioHold}>
                <input
                  type="radio"
                  name="radio-2"
                  className="radio radio-primary w-4 h-4"
                  checked={isChecked}
                  onChange={handleInputChange}
                />
              </div>

            </div>

            <div className={styles.skillsPlaygroundHold}>
              <p className='font-extralight'> HTML/CSS  </p>
              <p>&#8226;  </p>
              <p>1 min ago</p>
            </div>

            <div className={styles.playgroundsharedUser}>
              <Image src={playuser1} className={styles.playgorundUser} alt="" quality={100} width={30} height={20} />
              <Image src={playuser2} className={styles.playgorundUser} alt="" quality={100} width={30} height={20} />
              <p className='text-xs'>Shared with <b> Adam, Anna .. </b>+7 <br /> more</p>
            </div>

          </div>

          <div className={styles.indivitualPlayground}>
            <div className="flex items-center gap-4">
              <Image src={jsplayground} quality={100} alt="" className='mt-3' />
              <p className="font-semibold text-black mr-2">Playground Title</p>
              <div className={styles.radioHold}>
                <input
                  type="radio"
                  name="radio-2"
                  className="radio radio-primary w-4 h-4"
                  checked={isChecked}
                  onChange={handleInputChange}
                />
              </div>

            </div>

            <div className={styles.skillsPlaygroundHold}>
              <p className='font-extralight'> HTML/CSS  </p>
              <p>&#8226;  </p>
              <p>1 min ago</p>
            </div>

            <div className={styles.playgroundsharedUser}>
              <Image src={playuser1} className={styles.playgorundUser} alt="" quality={100} width={30} height={20} />
              <Image src={playuser2} className={styles.playgorundUser} alt="" quality={100} width={30} height={20} />
              <p className='text-xs'>Shared with <b> Adam, Anna .. </b>+7 <br /> more</p>
            </div>

          </div>

          <div className={styles.indivitualPlayground}>
            <div className="flex items-center gap-4">
              <Image src={jsplayground} quality={100} alt="" className='mt-3' />
              <p className="font-semibold text-black mr-2">Playground Title</p>
              <div className={styles.radioHold}>
                <input
                  type="radio"
                  name="radio-2"
                  className="radio radio-primary w-4 h-4"
                  checked={isChecked}
                  onChange={handleInputChange}
                />
              </div>

            </div>

            <div className={styles.skillsPlaygroundHold}>
              <p className='font-extralight'> HTML/CSS  </p>
              <p>&#8226;  </p>
              <p>1 min ago</p>
            </div>

            <div className={styles.playgroundsharedUser}>
              <Image src={playuser1} className={styles.playgorundUser} alt="" quality={100} width={30} height={20} />
              <Image src={playuser2} className={styles.playgorundUser} alt="" quality={100} width={30} height={20} />
              <p className='text-xs'>Shared with <b> Adam, Anna .. </b>+7 <br /> more</p>
            </div>

          </div>


          <div className={styles.indivitualPlayground}>
            <div className="flex items-center gap-4">
              <Image src={htmlplayground} quality={100} alt="" className='mt-3' />
              <p className="font-semibold text-black mr-2">Playground Title</p>
              <div className={styles.radioHold}>
                <input
                  type="radio"
                  name="radio-2"
                  className="radio radio-primary w-4 h-4"
                  checked={isChecked}
                  onChange={handleInputChange}
                />
              </div>

            </div>

            <div className={styles.skillsPlaygroundHold}>
              <p className='font-extralight'> HTML/CSS  </p>
              <p>&#8226;  </p>
              <p>1 min ago</p>
            </div>

            <div className={styles.playgroundsharedUser}>
              <Image src={playuser1} className={styles.playgorundUser} alt="" quality={100} width={30} height={20} />
              <Image src={playuser2} className={styles.playgorundUser} alt="" quality={100} width={30} height={20} />
              <p className='text-xs'>Shared with <b> Adam, Anna .. </b>+7 <br /> more</p>
            </div>

          </div>

        </div>

        <br />
        <br />


        <div className="flex justify-between">
          <p className="font-bold text-2xl text-black"> Projects </p>
          <p className="text-gray-500 text-md">see all </p>
        </div>


        <br />
        <br />



        <div className={styles.portfolioHold}>
          <Card maxW='sm' className={styles.portfolioTabIndivitualCrad}>
            <CardBody className={styles.projectCard}>
              <Image
                src={projectImage}
                alt='Green double couch with wooden legs'
                className={styles.portfolioTabIMage}
              />
              <div className='flex gap-1 z-50'>
                <div className={styles.cardBadge}>Badge</div>
                <div className={styles.cardBadge}>Badge</div>
              </div>

              <div className={styles.portfolioCardNameHold}>

                <Stack mt='6' spacing='3'>
                  <div className='flex justify-between items-center gap-4'>
                    <p className='text-lg font-semibold text-black'>Personal portfolio website</p>
                    <p className='text-gray-500 text-sm'> &#8226; &#8226; &#8226;</p>
                  </div>

                  <div className='flex gap-2 text-gray-600 flex-wrap' id='ProjectLanguage'>
                    <p className=''> HTML/CSS  </p>
                    <p>&#8226;</p>
                    <p>Javascript</p>
                    <p>&#8226;</p>
                    <p>1 min ago</p>
                  </div>

                  <div className=' flex items-center'>
                    <Image src={playuser1} alt="" quality={100} width={30} height={20} />
                    <Image src={playuser2} alt="" quality={100} width={30} height={20} className="mr-3" />
                    <p className='text-gray-600'> 3 contributors </p>
                  </div>
                </Stack>
              </div>


            </CardBody>

          </Card>


          <Card maxW='sm' className={styles.portfolioTabIndivitualCrad}>
            <CardBody className={styles.projectCard}>
              <Image
                src={projectImage2}
                alt='Green double couch with wooden legs'
                className={styles.portfolioTabIMage}
              />
              <div className='flex gap-1 z-50'>
                <div className={styles.cardBadge}>Badge</div>
                <div className={styles.cardBadge}>Badge</div>
              </div>

              <div className={styles.portfolioCardNameHold}>


                <Stack mt='6' spacing='3' className='sdd'>
                  <div className='flex justify-between items-center gap-4'>
                    <p className='text-lg font-semibold text-black'>Personal portfolio website</p>
                    <p className='text-gray-500 text-sm'> &#8226; &#8226; &#8226;</p>
                  </div>

                  <div className='flex gap-2 text-gray-600 flex-wrap' id='ProjectLanguage'>
                    <p className=''> HTML/CSS  </p>
                    <p>&#8226;</p>
                    <p>Javascript</p>
                    <p>&#8226;</p>
                    <p>1 min ago</p>
                  </div>

                  <div className=' flex items-center'>
                    <Image src={playuser1} alt="" quality={100} width={30} height={20} />
                    <Image src={playuser2} alt="" quality={100} width={30} height={20} className="mr-3" />
                    <p className='text-gray-600'> 3 contributors </p>
                  </div>
                </Stack>
              </div>
            </CardBody>

          </Card>


          <Card maxW='sm' className={styles.portfolioTabIndivitualCrad}>
            <CardBody className={styles.projectCard}>
              <Image
                src={projectImage2}
                alt='Green double couch with wooden legs'
                className={styles.portfolioTabIMage}
              />
              <div className='flex gap-1 z-50'>
                <div className={styles.cardBadge}>Badge</div>
                <div className={styles.cardBadge}>Badge</div>
              </div>

              <div className={styles.portfolioCardNameHold}>

                <Stack mt='6' spacing='3'>

                  <div className='flex justify-between items-center gap-4'>
                    <p className='text-lg font-semibold text-black'>Personal portfolio website</p>
                    <p className='text-gray-500 text-sm'> &#8226; &#8226; &#8226;</p>
                  </div>

                  <div className='flex gap-2 text-gray-600 flex-wrap' id='ProjectLanguage'>
                    <p className=''> HTML/CSS  </p>
                    <p>&#8226;</p>
                    <p>Javascript</p>
                    <p>&#8226;</p>
                    <p>1 min ago</p>
                  </div>

                  <div className=' flex items-center'>
                    <Image src={playuser1} alt="" quality={100} width={30} height={20} />
                    <Image src={playuser2} alt="" quality={100} width={30} height={20} className="mr-3" />
                    <p className='text-gray-600'> 3 contributors </p>
                  </div>
                </Stack>
              </div>
            </CardBody>

          </Card>


          <Card maxW='sm' className={styles.portfolioTabIndivitualCrad}>
            <CardBody className={styles.projectCard}>
              <Image
                src={projectImage2}
                alt='Green double couch with wooden legs'
                className={styles.portfolioTabIMage}
              />
              <div className='flex gap-1 z-50'>
                <div className={styles.cardBadge}>Badge</div>
                <div className={styles.cardBadge}>Badge</div>
              </div>

              <div className={styles.portfolioCardNameHold}>

                <Stack mt='6' spacing='3'>

                  <div className='flex justify-between items-center gap-4'>
                    <p className='text-lg font-semibold text-black'>Personal portfolio website</p>
                    <p className='text-gray-500 text-sm'> &#8226; &#8226; &#8226;</p>
                  </div>

                  <div className='flex gap-2 text-gray-600 flex-wrap' id='ProjectLanguage'>
                    <p className=''> HTML/CSS  </p>
                    <p>&#8226;</p>
                    <p>Javascript</p>
                    <p>&#8226;</p>
                    <p>1 min ago</p>
                  </div>

                  <div className=' flex items-center'>
                    <Image src={playuser1} alt="" quality={100} width={30} height={20} />
                    <Image src={playuser2} alt="" quality={100} width={30} height={20} className="mr-3" />
                    <p className='text-gray-600'> 3 contributors </p>
                  </div>
                </Stack>
              </div>
            </CardBody>

          </Card>


        </div>

        <br />
        <br />

        <div className='flex gap-4 justify-end'>
          <button className={styles.deleteBtn}>Cancel</button>
          <button className={styles.uploadImg} onClick={handleButtonClick}> Save changes</button>
        </div>


        {isLoading && (
          <div className={styles.loadingContainer}>
            <div className={styles.loadingOverlay}></div>
            <div className={styles.loadingMessage}>

              <div className="mx-auto flex flex-col items-center">
                <InfinitySpin
                  width='200'
                  color="white"
                />

                <p>Creating user profile and redirecting...</p>

              </div>

            </div>
          </div>
        )}
        <br />
        <br />
        <br />

      </div>
    </div>
  );
};

export default Portfolio;

