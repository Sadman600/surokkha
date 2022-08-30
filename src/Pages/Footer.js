import React from 'react';
import footerlogo1 from '../Assets/logo/footer-1.png';
import footerlogo2 from '../Assets/logo/footer-2.png';
import footerlogo3 from '../Assets/logo/footer-3.png';
const Footer = () => {
    return (
        <div>
            <footer class="bg-orange-500 text-center lg:text-left py-12">
                <div class="container">
                    <div class="grid lg:grid-cols-4 md:grid-cols-2">
                        <div class="mb-6">
                            <div className='flex justify-center items-center'>
                                <img src={footerlogo1} alt='' />
                            </div>
                        </div>

                        <div class="mb-6">

                            <ul class=" ">
                                <li>
                                    <a class="uppercase font-bold mb-6 text-white">FAQ</a>
                                </li>
                                <li>
                                    <a class=" font-bold mb-6 text-white">Manual</a>
                                </li>
                                <li>
                                    <a class=" font-bold mb-6 text-white">Privacy Policy</a>
                                </li>
                                <li>
                                    <a class=" font-bold mb-6 text-white">Terms of service</a>
                                </li>
                                <li>
                                    <a class=" font-bold mb-6 text-white">Other Affiliates</a>
                                </li>

                            </ul>
                        </div>

                        <div class="mb-6 lg:pr-6">
                            <h5 class=" font-bold mb-4 text-white">Developed by - Department of ICT  </h5>
                            <div className='flex justify-center items-center'>

                            <img src={footerlogo2} alt='' />
                            </div>

                        </div>

                        <div class="mb-6 lg:pl-6">
                            <h5 class=" font-bold mb-4 text-white">Affiliates - </h5>
                            <div className='flex justify-center items-center'>

                            <img src={footerlogo3} alt='' />
                            </div>
                        </div>
                    </div>
                </div>


            </footer>
        </div>
    );
};

export default Footer;