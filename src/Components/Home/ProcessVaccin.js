import React from 'react';
import provac1 from '../../Assets/logo/provaclogo-1.png';
import provac2 from '../../Assets/logo/provaclogo-2.png';
import provac3 from '../../Assets/logo/provaclogo-3.png';
const ProcessVaccin = () => {
    return (
        <div>
            <div class="container my-24 px-6 mx-auto">

                <section class=" block mb-32 p-6 rounded-lg shadow-lg bg-white text-gray-800 text-center">
                    <h2 class="text-4xl text-start border-l-4 border-red-500 font-bold mb-12">The process of receiving the Covid-19 corona vaccine</h2>
                    <div class="grid md:grid-cols-3 lg:gap-x-12">
                        <div class="mb-12 md:mb-0">
                            <div className='flex justify-center items-center'>
                                <img src={provac1} />
                            </div>
                            <h5 class="text-xl font-bold my-4 ">Online Registration</h5>
                            <p class="text-gray-500">
                            First, you have to complete the online registration by verifying your national identity card and correct mobile number through this portal.
                            </p>
                        </div>
                        <div class="mb-12 md:mb-0">
                            <div className='flex justify-center items-center'>
                                <img src={provac2} />
                            </div>
                            <h5 class="text-xl font-bold my-4 ">SMS Notification</h5>
                            <p class="text-gray-500">
                            After registering online, you will receive a text message on your mobile phone mentioning the date of vaccination and the name of the vaccination center.
                            </p>
                        </div>
                        <div class="mb-12 md:mb-0">
                            <div className='flex justify-center items-center'>
                                <img src={provac3} />
                            </div>
                            <h5 class="text-xl font-bold my-4 ">Vaccination</h5>
                            <p class="text-gray-500">
                            Subject to receiving a text message on the mobile phone, you have to appear in person at the vaccination center on the specified date with the vaccine card, national identity card and signed consent form to receive the Covid-19 vaccine.
                            </p>
                        </div>

                    </div>
                </section>

            </div>
        </div>
    );
};

export default ProcessVaccin;