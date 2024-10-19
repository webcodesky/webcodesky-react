import React from 'react';
import Container from '../../../Components/Ui/Container/Container';
import '../ServiceFeatures/ServiceFeatures.css'

const ServiceFeatures = () => {
    return (
        <div>
            <div className='flex md:flex-row flex-col-reverse justify-around'>
                <div>
                    <img src="/src/assets/serviceDetails/userFriendly.png" alt="userFriendly" />
                </div>
                <div className="content max-w-[375px] flex flex-col gap-5">
                    <div className='pt-4'>
                        <h2 className='title poppins font-bold text-[48px]'>Responsive & user friendly</h2>
                        <p className='poppins text-[19px]'>We share common trends and strategies for improving your rental income.</p>
                    </div>
                    <div>
                        <div className="sub-title poppins font-bold text-[21px]">100% Mobile Responsive</div>
                        <p className='poppins text-[19px]'>With lots of unique blocks, you can easily build a page without coding. </p>
                    </div>
                    <div>
                        <div className="sub-title poppins font-bold text-[21px]">Fast & User Friendly</div>
                        <p className='poppins text-[19px]'>With lots of unique blocks, you can easily build a page without coding. </p>
                    </div>
                </div>
            </div>
            <div className='features-wrapper flex md:flex-row-reverse flex-col-reverse justify-around '>
                <div className='img-div'>
                    <img src="/src/assets/serviceDetails/API-Integration.png" alt="userFriendly" />
                    <div className='img-div-animation-div'></div>
                </div>
                <div className="content max-w-[375px] flex flex-col gap-5">
                    <div className='pt-4'>
                        <h2 className='title poppins font-bold text-[48px]'>Responsive & user friendly</h2>
                        <p className='poppins text-[19px]'>We share common trends and strategies for improving your rental income.</p>
                    </div>
                    <div>
                        <div className="sub-title poppins font-bold text-[21px]">100% Mobile Responsive</div>
                        <p className='poppins text-[19px]'>With lots of unique blocks, you can easily build a page without coding. </p>
                    </div>
                    <div>
                        <div className="sub-title poppins font-bold text-[21px]">Fast & User Friendly</div>
                        <p className='poppins text-[19px]'>With lots of unique blocks, you can easily build a page without coding. </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceFeatures;