import { IoMdStar } from 'react-icons/io';

const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        const starColor = i < rating ? '#FBAD39' : '#90A3BF';
        stars.push(
            <IoMdStar key={i} className=' lg:text-md text-sm' style={{ color: starColor }} />
        );
    }
    return stars;
};

export default renderStars;


 
