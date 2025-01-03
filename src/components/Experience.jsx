import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { useState } from 'react';

const ExperienceCard = ({ work }) => {
    // Destructure only the properties we need
    const { title, description } = work;
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
                    className="absolute inset-0 flex items-center justify-center bg-blue-950 rounded-lg backface-hidden"
                    style={{ transform: 'rotateY(0deg)', backfaceVisibility: 'hidden' }}
                >
                    {/* Display the title on the front side */}
                    <h3 className="text-2xl font-semibold text-white text-center">{title}</h3>
                </div>

                {/* Back Side */}
                <div
                    className="absolute inset-0 bg-blue-950 text-white flex flex-col justify-between px-6 py-4 rounded-lg backface-hidden"
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

ExperienceCard.propTypes = {
    work: PropTypes.shape({
        // Removed `logo` since we aren't using it
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired,
};

const ExperienceSection = () => {
    // Renamed to `experienceWork` for clarity
    const experienceWork = [
        {
            title: 'Resident Assistant',
            description:
                'As an RA for WVU’s Summit Hall, I foster a welcoming and inclusive environment for residents, manage desk duties, and act as a leader and information resource for new students.',
        },
        {
            title: 'Member Services Assistant',
            description:
                'At the WVU Student Rec Center, I process 1000+ facility visits daily, manage membership sales, provide excellent customer support, and handle Fusion access system reports.',
        },
    ];

    return (
        <div id="experience" className="py-16">
            <h2 className="text-4xl text-white text-center mb-8 font-playfair">
                Professional Experience
            </h2>
            <div className="flex justify-center">
                <div className="flex space-x-8">
                    {experienceWork.map((work, index) => (
                        <ExperienceCard key={index} work={work} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ExperienceSection;
