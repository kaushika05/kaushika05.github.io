import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { useState } from 'react';

const VolunteerCard = ({ volunteer }) => {
    const { logo, title, description } = volunteer;
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className="relative w-full sm:w-64 h-64 rounded-lg shadow-lg overflow-hidden cursor-pointer border border-white mx-4 sm:mx-0"
            onClick={() => setIsFlipped(!isFlipped)}
            style={{ perspective: 1000 }}
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
                    className="absolute inset-0 flex flex-col items-center justify-center bg-green-950 rounded-lg backface-hidden p-4"
                    style={{ transform: 'rotateY(0deg)', backfaceVisibility: 'hidden' }}
                >
                    <img src={logo} alt={`${title} logo`} className="max-w-full max-h-full object-contain mb-4" />

                </div>

                {/* Back Side */}
                <div
                    className="absolute inset-0 bg-green-950 text-white flex flex-col justify-center px-6 py-4 rounded-lg backface-hidden"
                    style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}
                >
                    <div className="text-center">
                        <h3 className="text-xl font-semibold mb-4">{title}</h3>
                        <p className="text-sm">{description}</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

VolunteerCard.propTypes = {
    volunteer: PropTypes.shape({
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
        <section className="py-12 bg-transparent">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">
                    Volunteer Work
                </h2>
                <div className="flex flex-wrap justify-center gap-8">
                    {volunteerWork.map((volunteer, index) => (
                        <VolunteerCard key={index} volunteer={volunteer} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VolunteerSection;
