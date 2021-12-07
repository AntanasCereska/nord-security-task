import React from 'react';
import FaqSection from '../sections/FaqSection/FaqSection';
import HeroSection from '../sections/HeroSection/HeroSection';
import TopLeakedPasswordsSection from '../sections/TopLeadedPasswordsSection/TopLeakedPasswordsSection';

const HeroPage = ({passwordsData}) => {
    return (
        <div style={{width:"100%"}}>
            <HeroSection/>
            <TopLeakedPasswordsSection passwordsData={passwordsData}/>
            <FaqSection/>
        </div>
    )
}

export default HeroPage;