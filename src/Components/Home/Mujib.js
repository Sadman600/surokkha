import React from 'react';
import mujib1 from '../../Assets/logo/mujib-1.png';
import mujib2 from '../../Assets/logo/mujib-2.png';
import mujib3 from '../../Assets/logo/mujib-3.png';

const Mujib = () => {
    return (
        <div>
            <div class="container my-24 px-6 mx-auto">

                <section class=" block mb-32 p-6 rounded-lg shadow-lg bg-white text-gray-800 text-center">
                    <h2 class="text-4xl text-start border-l-4 border-red-500 font-bold mb-12">Mujib 100</h2>
                    <div class="grid md:grid-cols-3 lg:gap-x-12">
                        <div class="mb-12 md:mb-0">
                            <div className='flex justify-center items-center'>
                                <img className='w-36 h-24' src={mujib1} />
                            </div>
                            <h5 class="text-xl font-bold my-4 ">Online Registration</h5>
                            
                        </div>
                        <div class="mb-12 md:mb-0">
                            <div className='flex justify-center items-center'>
                                <img src={mujib2} />
                            </div>
                            <h5 class="text-xl font-bold my-4 ">SMS Notification</h5>
                            
                        </div>
                        <div class="mb-12 md:mb-0">
                            <div className='flex justify-center items-center'>
                                <img src={mujib3} />
                            </div>
                            <h5 class="text-xl font-bold my-4 ">Vaccination</h5>
                           
                        </div>

                    </div>
                </section>

            </div>
        </div>
    );
};

export default Mujib;