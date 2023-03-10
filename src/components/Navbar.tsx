import React from 'react'
//import styles from '@/styles/Navbar.module.css'
import styles from "../styles/Navbar.module.css"
import { useState } from 'react';
import { BsFillLightningFill } from "react-icons/bs"
import { BiSearch } from "react-icons/bi"
import bell from "../assets/bell.png"
import Image from "next/image";
import { BsChevronDown } from "react-icons/bs"
import profile from "../assets/Profile.png"
import lightning from "../assets/lightning.png"
import Link from 'next/link';

const Navbar = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
    }


    return (

        <div className={styles.navbarMainParent}>
            <div className={styles.navHold}>

                <div className={styles.navbar}>
                    <div className="flex-1">

                        <Link href={"/"} className="btn btn-ghost normal-case text-2xl font-bold">codedamn</Link>
                    </div>



                    <div className="flex-none ">
                        <ul className="menu menu-horizontal  px-1 gap-8 items-center">
                            <div className={styles.searchHold}>
                                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                    <BiSearch className='text-2xl text-gray-600' />
                                </span>
                                <input type="search" name="Search" placeholder="Search..." className="w-32 py-2  pl-10 text-sm sm:w-auto focus:outline-none border-blue-400 rounded-lg" />


                                <select
                                    value={selectedOption}
                                    onChange={handleOptionChange}
                                    style={{ width: '6.13rem', backgroundColor: 'rgba(244, 244, 245, 1)', borderRadius: '6.55px', height: "2rem", color: "grey", paddingLeft: "0.5rem", paddingRight: "0.7rem", paddingBottom: "0.4rem" }}
                                    className={styles.dropdown}
                                >
                                    <option value="">courses  </option>
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </select>

                            </div>

                            <div className='flex gap-1'>
                                <Image src={lightning} alt="ada" quality={100} />
                                <p className={styles.thunderText}> 2</p>
                            </div>

                            <Image src={bell} alt="bell" quality={100} priority />

                            <Image src={profile} alt="profile" quality={100} width={60} height={70} className={styles.profile} />


                        </ul>
                    </div>
                </div>
            </div>

        </div>



    )
}

export default Navbar


/*

        <div className="navbar bg-base-100">

            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>

                    <div className={styles.navHamHold}>

                        <ul tabIndex={0} className="menu menu-compact flex flex-col dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <ul className="menu menu-horizontal flex flex-col  px-1 gap-8 items-center">
                                <div className={styles.searchHold}>
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                        <BiSearch className='text-2xl text-gray-600' />
                                    </span>
                                    <input type="search" name="Search" placeholder="Search..." className="w-32 py-2  pl-10 text-sm sm:w-auto focus:outline-none border-blue-400 rounded-lg" />


                                    <select
                                        value={selectedOption}
                                        onChange={handleOptionChange}
                                        style={{ width: '6.13rem', backgroundColor: 'rgba(244, 244, 245, 1)', borderRadius: '6.55px', height: "2rem", color: "grey", paddingLeft: "0.5rem", paddingRight: "0.7rem", paddingBottom: "0.4rem" }}
                                        className={styles.dropdown}
                                    >
                                        <option value="">courses  </option>
                                        <option value="option1">Option 1</option>
                                        <option value="option2">Option 2</option>
                                        <option value="option3">Option 3</option>
                                    </select>

                                </div>

                                <div className='flex gap-1'>
                                    <Image src={lightning} alt="ada" quality={100} />
                                    <p className={styles.thunderText}> 2</p>
                                </div>

                                <Image src={bell} alt="bell" quality={100} priority />

                                <Image src={profile} alt="profile" quality={100} width={60} height={70} className={styles.profile} />


                            </ul>
                        </ul>

                    </div>


                </div>
                <a className="btn btn-ghost normal-case text-xl">Codedamn</a>
            </div>

















            <div className="flex-none hidden lg:flex ">
                <ul className="menu menu-horizontal  px-1 gap-8 items-center">
                    <div className={styles.searchHold}>
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                            <BiSearch className='text-2xl text-gray-600' />
                        </span>
                        <input type="search" name="Search" placeholder="Search..." className="w-32 py-2  pl-10 text-sm sm:w-auto focus:outline-none border-blue-400 rounded-lg" />


                        <select
                            value={selectedOption}
                            onChange={handleOptionChange}
                            style={{ width: '6.13rem', backgroundColor: 'rgba(244, 244, 245, 1)', borderRadius: '6.55px', height: "2rem", color: "grey", paddingLeft: "0.5rem", paddingRight: "0.7rem", paddingBottom: "0.4rem" }}
                            className={styles.dropdown}
                        >
                            <option value="">courses  </option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>

                    </div>

                    <div className='flex gap-1'>
                        <Image src={lightning} alt="ada" quality={100} />
                        <p className={styles.thunderText}> 2</p>
                    </div>

                    <Image src={bell} alt="bell" quality={100} priority />

                    <Image src={profile} alt="profile" quality={100} width={60} height={70} className={styles.profile} />


                </ul>
            </div>





        </div>
*/