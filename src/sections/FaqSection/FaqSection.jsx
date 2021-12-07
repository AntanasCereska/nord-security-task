import React from 'react';
import FaqWidget from '../../components/Widgets/FaqWidget/FaqWidget';
import './faq-section.scss'

const FaqSection = () => {
    return (
        <div className="frequently-asked-questions-section">
            <h3>Frequently asked questions</h3>
            <FaqWidget />
        </div>
    )
}

export default FaqSection;