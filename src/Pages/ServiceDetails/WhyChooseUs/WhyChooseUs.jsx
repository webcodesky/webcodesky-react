import React from 'react';
import './WhyChooseUs.css'
import Container from '../../../Components/Ui/Container/Container';

const WhyChooseUs = () => {
    return (
        <div className='relative'>
            <img className='hidden md:inline-block absolute top-[20%] left-0' src="/src/assets/icon/dot-rect.svg" alt="dot rect" />
            <Container>
                <div className='md:py-20 py-5 flex flex-col items-center'>
                    <div className='flex flex-col items-center max-w-[685.605px]'>
                        <p className='poppins font-bold text-[13px] uppercase text-[#F64B4B]'>Why choose Webcodesky</p>
                        <h2 className='poppins font-bold text-[36px] text-center'>With a deep understanding of the latest web technologies, our agency goes beyond just development. We work as an extension of your team, ensuring that every project aligns with your goals and delivers measurable success.</h2>
                    </div>
                    <div className='grid md:grid-cols-2 grid-col-1 md:gap-12 gap-4 md:px-28 pt-[92px] pb-[88px] border-b-[1px] border-[#D8D8D8] stoke-[#E7E9ED]'>
                        
                        <div className="icon-box flex flex-row md:gap-9 gap-3">
                            <div className="icon-setion w-[30%] ">
                                <img className='w-full' src="/src/assets/icon/project-manager.svg" alt="" srcset="" />
                            </div>
                            <div className="icon-box-content w-[70%]">
                                <div className="title poppins font-bold text-[22px] pb-2">Dedicated project manager</div>
                                <div className="description poppins font-normal text-[18px]">With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</div>
                            </div>
                        </div>
                        <div className="icon-box flex flex-row md:gap-9 gap-3">
                            <div className="icon-setion w-[30%]">
                                <img className='w-full' src="/src/assets/icon/task.svg" alt="" srcset="" />
                            </div>
                            <div className="icon-box-content w-[70%]">
                                <div className="title poppins font-bold text-[22px] pb-2">Organized tasks</div>
                                <div className="description poppins font-normal text-[18px]">With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</div>
                            </div>
                        </div>
                        <div className="icon-box flex flex-row md:gap-9 gap-3">
                            <div className="icon-setion w-[30%]">
                                <img className='w-full' src="/src/assets/icon/Feedback.svg" alt="" srcset="" />
                            </div>
                            <div className="icon-box-content w-[70%]">
                                <div className="title poppins font-bold text-[22px] pb-2">Easy feedback sharing</div>
                                <div className="description poppins font-normal text-[18px]">With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</div>
                            </div>
                        </div>
                        <div className="icon-box flex flex-row md:gap-9 gap-3">
                            <div className="icon-setion w-[30%]">
                                <img className='w-full' src="/src/assets/icon/deadline.svg" alt="" srcset="" />
                            </div>
                            <div className="icon-box-content w-[70%]">
                                <div className="title poppins font-bold text-[22px] pb-2">Never miss deadline</div>
                                <div className="description poppins font-normal text-[18px]">With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="whychooseusCTA flex md:flex-row flex-col md:justify-between items-center w-full md:py-12 py-4">
                        <div className="content">
                            <h2 className='poppins font-bold text-[32px] pb-2'>Ready to launch your next project?</h2>
                            <p className='poppins font-normal text-[18px]'>With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
                        </div>
                        <div className="actionBtn pt-5">
                            <button className="bg-[#FF6600] text-white px-4 py-1 font-normal leading-[32px] tracking-[-0.6px] rounded-[8px]">
                            Get started a project
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default WhyChooseUs;