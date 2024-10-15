import React from 'react';
import ServiceDetailsBanner from './ServiceDetailsBanner/ServiceDetailsBanner';
import ServiceFeatures from './ServiceFeatures/ServiceFeatures';
import Container from '../../Components/Ui/Container/Container';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs';

const ServiceDetails = () => {
    return (
        <div>
            <Container>
                <ServiceDetailsBanner></ServiceDetailsBanner>
                <ServiceFeatures></ServiceFeatures>
                <WhyChooseUs></WhyChooseUs>
            </Container>
        </div>
    );
};

export default ServiceDetails;