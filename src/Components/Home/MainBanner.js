import React from 'react';
import banner from '../../Assets/images/banner-1.jpg';
import mllogo1 from '../../Assets/logo/mllogo-1.png';
import mllogo2 from '../../Assets/logo/mllogo-2.png';
import mrlogo1 from '../../Assets/logo/mrlogo-1.png';
import mrlogo2 from '../../Assets/logo/mrlogo-2.png';
import mrlogo3 from '../../Assets/logo/mrlogo-3.png';
import mrlogo4 from '../../Assets/logo/mrlogo-4.png';
const MainBanner = () => {
    return (
        <div style={{
            background: `url(${banner})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: 'auto'
        }}>

            <div className='w-5/6 mx-auto'>
                <div className='grid lg:grid-cols-2 '>
                    <div class="flex justify-center my-12">
                        <div class="block p-6 border-b-8 border-teal-500 rounded-lg shadow-lg bg-white max-w-sm">
                            <div className='flex items-center'>
                                <img className='' src={mllogo1} alt='' />
                                <h5 class="text-gray-900 text-3xl text-start uppercase mx-3 leading-tight font-bold mb-2">Vaccin Registration</h5>
                            </div>
                            <div className='mt-24'>
                                <h5 className='text-center text-bold text-xl my-4'>During Registration You Need</h5>
                                <img className='p-5' src={mllogo2} alt='' />
                            </div>
                        </div>
                    </div>
                    <div className='my-12'>

                        <div class="mb-4 block p-6 border-l-8 border-green-600 rounded-lg shadow-lg bg-white max-w-sm">
                            <div className='flex justify-around items-center'>
                                <img className='w-16 h-16' src={mrlogo1} alt='' />
                                <h5 class="text-gray-900 text-2xl uppercase leading-tight font-medium mb-2">Check Status</h5>
                            </div>
                        </div>
                        <div class="mb-4 block p-6 border-l-8 border-yellow-600 rounded-lg shadow-lg bg-white max-w-sm">
                            <div className='flex justify-around items-center'>
                                <img className='w-14 h-12' src={mrlogo2} alt='' />
                                <h5 class="text-gray-900 text-2xl uppercase leading-tight font-medium mb-2">Vaccin Card</h5>
                            </div>
                        </div>
                        <div class="mb-4 block p-6 border-l-8 border-teal-500 rounded-lg shadow-lg bg-white max-w-sm">
                            <div className='flex justify-around items-center'>
                                <img className='w-12 ' src={mrlogo3} alt='' />
                                <h5 class="text-gray-900 text-2xl uppercase leading-tight font-medium mb-2">Certificate</h5>
                            </div>
                        </div>
                        <div class="block p-6 border-l-8 border-cyan-500 rounded-lg shadow-lg bg-white max-w-sm">
                            <div className='flex justify-around items-center'>
                                <img className='w-12 ' src={mrlogo4} alt='' />
                                <h5 class="text-gray-900 text-2xl uppercase leading-tight font-medium mb-2">FAQ</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainBanner;