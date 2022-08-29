import React from 'react';
import MainBanner from '../Components/Home/MainBanner';
import Hotline from '../Components/Home/Hotline';
import ProcessVaccin from '../Components/Home/ProcessVaccin';
import Mujib from '../Components/Home/Mujib';
const Home = () => {
    return (
        <div>
            <MainBanner/>
            <Hotline/>
            <ProcessVaccin/>
            <Mujib/>
        </div>
    );
};

export default Home;