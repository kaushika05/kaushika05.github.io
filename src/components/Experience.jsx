import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { useState } from 'react';

const ExperienceCard = ({ experience }) => {
    const { title, description } = experience;
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
                    className="absolute inset-0 flex flex-col items-center justify-center bg-blue-950 rounded-lg backface-hidden p-4"
                    style={{ transform: 'rotateY(0deg)', backfaceVisibility: 'hidden' }}
                >
                    <h3 className="text-xl font-semibold text-white text-center">{title}</h3>
                </div>

                {/* Back Side */}
                <div
                    className="absolute inset-0 bg-blue-950 text-white flex flex-col justify-center px-6 py-4 rounded-lg backface-hidden"
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

ExperienceCard.propTypes = {
    experience: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired,
};

const ExperienceSection = () => {
    const experienceWork = [
        {
            title: 'Resident Assistant',
            description:
                "As an RA for WVU Summit Hall, I foster a welcoming and inclusive environment for residents, manage desk duties, and act as a leader and information resource for new students.",
        },
        {
            title: 'Member Services Assistant',
            description:
                "At the WVU Student Rec Center, I process 1000+ facility visits daily, manage membership sales, provide excellent customer support, and handle Fusion access system reports.",
        },
    ];

    return (
        <section className="py-12 bg-transparent">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">
                    Professional Experience
                </h2>
                <div className="flex flex-wrap justify-center gap-8">
                    {experienceWork.map((experience, index) => (
                        <ExperienceCard key={index} experience={experience} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
