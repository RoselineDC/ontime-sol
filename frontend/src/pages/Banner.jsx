import React from 'react';
import "../App.css";  
// import images
import bannerIMG from "../assets/banner.png";

const Banner = () => {
    return (
        <div className="flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12">    
            <div className='md:w-1/2 w-full flex items-center md:justify-endl'>
                 {/* right side */}
            <img src={bannerIMG    } alt='' />
                        </div>
            {/* left side */}
            <div className='md:w-1/2 w-full '>
                <h1 className="md:text-5xl text-2xl font-medium mb-7">
                    New Releases This Week
                </h1>
                <p className="mb-10">
                    Your weekly specilas are here. Buy for 100 and get 10% off.
                    "Stay up-to-date with the latest features and improvements in the world of technology."
                    Our latest release is now available, featuring [briefly mention a key new feature or improvement]"
                    "We're excited to announce the release of [version number],
                </p>
                <button className="btn-primary">
                    Shop Now
                </button>

            </div>
           

        </div>
    );
}

export default Banner;