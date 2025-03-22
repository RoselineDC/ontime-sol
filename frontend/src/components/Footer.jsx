import React from "react";

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-800 text-white">
                <div className="container mx-auto py-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div>
                            <h3 className="text-lg font-semibold mb-4">About Us</h3>
                            <p className="text-sm">
                                We are a leading provider of technology solutions for businesses.
                                Our team of experts is dedicated to helping you succeed in the digital world.
                                For all your needs contact us. 
                                <br />
                                <em className="italic ">Efficiency is the key</em>

                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                            <ul className="text-sm">
                                <li className="mb-2"><a href="#">Home</a></li>
                                <li className="mb-2"><a href="#">About Us</a></li>
                                <li className="mb-2"><a href="#">Services</a></li>
                                <li className="mb-2"><a href="#">Contact Us</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                            <p className="text-sm">47 O'Reilly Street Beria</p>
                            <p className="text-sm">Phone: (123) 456-7890</p>
                            <p className="text-sm mailto:info@ontimesolutions.co.za"> Email: info@ontimesolutions.co.za</p>            
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                            <ul className="flex space-x-4">
                                <li><a href="#" className="text-sm"><i className="fab fa-facebook"></i></a></li>
                                <li><a href="#" className="text-sm"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="#" className="text-sm"><i className="fab fa-instagram"></i></a></li>
                                <li><a href="#" className="text-sm"><i className="fab fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            

        </div>
    )
}

export default Footer;