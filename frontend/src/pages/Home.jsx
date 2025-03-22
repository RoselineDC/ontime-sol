import React from 'react';
import Banner from './Banner';
import TopSallers from './TopSallers';  
import Recomanded from './Recomanded';
import News from './News';
import Login from '../router/Login';
import Register from '../router/Register';

const Home = () => {
    return (
        <>
        <Banner />  
        <TopSallers />
        <Recomanded />
        <News />
        
        </>
    );
}

export default Home;  