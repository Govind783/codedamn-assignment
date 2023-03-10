import React from 'react'
import styles from "../styles/MobileNav.module.css"
import {
    useWindowSize,
    useWindowWidth,
} from '@react-hook/window-size'
import Hamburger from 'hamburger-react'
import { useState, useRef } from 'react';
import Image from 'next/image';

import { BsFillLightningFill } from "react-icons/bs"
import { BiSearch } from "react-icons/bi"
import bell from "../assets/bell.png"
import { BsChevronDown } from "react-icons/bs"
import profile from "../assets/Profile.png"
import lightning from "../assets/lightning.png"

import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react';
import { BsFillLightningChargeFill } from "react-icons/bs"
import Link from 'next/link';

const MobileNav = () => {


    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
    }

    const { isOpen, onOpen, onClose } = useDisclosure()

    console.log(isOpen);

    return (
        <div className={styles.MobileNavMainParent}>
            <div className={styles.navh}>

                <div className={"flex"}>
                    <div className="flex-1">
                        <Link href="/" className="btn btn-ghost normal-case text-2xl font-bold">codedamn</Link>
                    </div>

                    <div onClick={onOpen} >
                        <Hamburger toggled={isOpen} />

                    </div>


                    <Drawer onClose={onClose} isOpen={isOpen}>
                        <DrawerOverlay />
                        <DrawerContent>
                            <DrawerHeader borderBottomWidth='1px'>Happy Coding</DrawerHeader>
                            <DrawerBody>
                                <div className="flex-none ">
                                    <ul className="flex flex-col px-1 gap-10 mt-8 justify-center items-center">
                                        <div className={styles.searchHold}>
                                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                                <BiSearch className='text-2xl text-gray-600' />
                                            </span>
                                            <input type="search" name="Search" placeholder="Search..." className="w-32 py-2  pl-10 text-sm sm:w-auto focus:outline-none border-blue-400 rounded-lg" />


                                            <select
                                                value={selectedOption}
                                                onChange={handleOptionChange}
                                                style={{ width: '6.13rem', backgroundColor: 'rgba(244, 244, 245, 1)', borderRadius: '6.55px', height: "2rem", color: "grey", paddingLeft: "0.5rem", paddingRight: "0.7rem", paddingBottom: "0.4rem" }}
                                                className={styles.dropdown2}
                                            >
                                                <option value="">courses  </option>
                                                <option value="option1">Option 1</option>
                                                <option value="option2">Option 2</option>
                                                <option value="option3">Option 3</option>
                                            </select>

                                        </div>


                                        { /*<div className='flex gap-3 items-center'>
                                            <BsFillLightningChargeFill className='text-4xl text-purple-600' />
                                            <Image src={bell} alt="bell" quality={100} className={styles.bel} />
                                            <Image src={profile} alt="profile" quality={100} width={60} height={70} className={styles.profile} />
                                         </div>*/}



                                    </ul>
                                </div>
                            </DrawerBody>
                        </DrawerContent>
                    </Drawer>

                </div>
            </div>
        </div>
    )
}

export default MobileNav