import React from 'react'
import styles from "../styles/TabsComponents.module.css"
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import { FiChrome } from "react-icons/fi";
import Navbar from './Navbar';
import Profile from './Profile';
import Social from './Social';
import Portfolio from './Portfolio';
import { useState, useEffect } from 'react';
import ResumeTab from './ResumeTab';

const TabsComponents = () => {

    const [activeTab, setActiveTab] = useState("Profile");

    /*useEffect(() => {
        setActiveTab(activeTab);
        console.log(activeTab)
    }, [activeTab]);
*/

    const handleChangeTab = (tabValue: string) => {
        setActiveTab(tabValue);
    };


    const [activeTab2, setActiveTab2] = useState("Profile");

    const handleClick = (event: any, value: any) => {
        setActiveTab2(value);
        console.log(value);
    };


    const data = [
        {
            label: "Profile",
            value: "Profile",
            desc: <Profile handleChangeTab={handleChangeTab} activeTab={activeTab} />,
        },
        {
            label: "Socials",
            value: "Socials",
            desc: <Social />,
        },
        {
            label: "Resume",
            value: "Resume",
            desc: <ResumeTab />,
        },

        {
            label: "Portfolio",
            value: "Portfolio",
            desc: <Portfolio />,
        },



    ];
    //const activeDesc = data.find(({ value }) => value === activeTab)?.desc;


    return (
        <div className=''>
            <Tabs
                id="custom-animation"
                value={activeTab}
                className={styles.tabsContentHold}
                key={activeTab}

            >
                <TabsHeader>
                    {data.map(({ label, value }) => (
                        <Tab key={value} value={value} className={styles.custom}>

                            <div className={`flex items-center gap-1 tabsCompIndivitual ${activeTab2 === value ? 'text-black' : ''}`}
                                onClick={(event) => handleClick(event, value)}> <FiChrome />  {label}</div>

                        </Tab>
                    ))}
                </TabsHeader>
                <TabsBody
                    className={styles.tabBody}
                    animate={{
                        initial: { y: 250 },
                        mount: { y: 0 },
                        unmount: { y: 250 },

                    }}
                >
                    {data.map(({ value, desc }) => (
                        <TabPanel key={value} value={value}>
                            {desc}
                        </TabPanel>
                    ))}
                </TabsBody>
            </Tabs>

        </div>


    )
}

export default TabsComponents

