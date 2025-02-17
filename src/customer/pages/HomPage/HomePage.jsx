import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel';
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel';

const HomePage = () => {
    return (
        <div>
            <MainCarousel />
            <HomeSectionCarousel />
            <div>other recommendations</div>
        </div>
    )
}

export default HomePage;