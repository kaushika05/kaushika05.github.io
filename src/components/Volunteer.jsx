import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { useState } from 'react';

const VolunteerCard = ({ work }) => {
    const { logo, title, description } = work;
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className="relative w-64 h-80 rounded-lg shadow-lg overflow-hidden cursor-pointer border border-white"
            onClick={() => setIsFlipped(!isFlipped)}
            style={{ perspective: 1000 }} // Ensures 3D perspective for the flip
        >
            <motion.div
                className="absolute inset-0 transition-transform duration-500"
                style={{
                    transformStyle: 'preserve-3d',
                    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                }}
            >
                {/* Front Side */}
                <div
                    className="absolute inset-0 flex items-center justify-center bg-green-950 rounded-lg backface-hidden"
                    style={{ transform: 'rotateY(0deg)', backfaceVisibility: 'hidden' }}
                >
                    <img src={logo} alt={`${title} logo`} className="w-48 h-48 object-contain" />
                </div>

                {/* Back Side */}
                <div
                    className="absolute inset-0 bg-green-950 text-white flex flex-col justify-between px-6 py-4 rounded-lg backface-hidden"
                    style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}
                >
                    <div>
                        <h3 className="text-xl font-semibold mb-2 text-left">{title}</h3>
                        <p className="text-sm text-left">{description}</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

VolunteerCard.propTypes = {
    work: PropTypes.shape({
        logo: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired,
};

const VolunteerSection = () => {
    const volunteerWork = [
        {
            logo: 'logos/nps-logo.svg',
            title: 'National Park Service Steward',
            description:
                'I support avian conservation efforts by assisting in maintaining databases and educating visitors about environmental stewardship.',
        },
        {
            logo: 'logos/usgs.png',
            title: 'US Geological Survey Volunteer',
            description:
                'As a member of the National Map Corps, I contributed to improving geographical data accuracy for public and government use.',
        },
    ];

    return (
        <div id="volunteer" className="py-16">
            <h2 className="text-4xl text-white text-center mb-8 font-playfair">
                Volunteer Work
            </h2>
            <div className="flex justify-center">
                <div className="flex space-x-8">
                    {volunteerWork.map((work, index) => (
                        <VolunteerCard key={index} work={work} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default VolunteerSection;
