import React from 'react';
import ServiceDetailsBanner from './ServiceDetailsBanner/ServiceDetailsBanner';
import ServiceFeatures from './ServiceFeatures/ServiceFeatures';
import Container from '../../Components/Ui/Container/Container';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs';
import FAQAccordion from './FAQ/FAQ';
import PeopleSaying from '../Home/PeopleSaying/PeopleSaying';

const ServiceDetails = () => {
    return (
        <div>
            <Container>
                <ServiceDetailsBanner></ServiceDetailsBanner>
                <ServiceFeatures></ServiceFeatures>
                
            </Container>
            <WhyChooseUs></WhyChooseUs>
            <Container>
                <FAQAccordion></FAQAccordion>
            </Container>
            <PeopleSaying />

        </div>
    );
};

export default ServiceDetails;