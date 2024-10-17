import React, { useEffect, useState } from 'react';
import ServiceBanner from './ServiceBanner/ServiceBanner';
import ServiceCard from './ServiceCard/ServiceCard';
import Container from '../../Components/Ui/Container/Container';
import { json } from 'react-router-dom';

const Service = () => {

    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:3000/service')
            .then(res => res.json())
            .then(data => console.log(data))
            // console.log(services);
    },[])



    return (
        <div>
            <ServiceBanner></ServiceBanner>
            <div className='my-20'>
                <Container>
                    <ServiceCard></ServiceCard>
                </Container>
            </div>
            
        </div>
    );
};

export default Service;