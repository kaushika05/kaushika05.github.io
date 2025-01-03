const ExperienceSection = () => {
    const experiences = [
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
        <section id="experience" className="py-16">
            <h2 className="text-4xl text-white text-center mb-8 font-playfair">
                Professional Experience
            </h2>
            <div className="max-w-4xl mx-auto px-4">
                {experiences.map((experience, index) => (
                    <div
                        key={index}
                        className="rounded-lg p-6 mb-6 shadow-lg border border-white text-white"
                    >
                        <h3 className="text-2xl font-semibold mb-2">{experience.title}</h3>
                        <p className="text-sm">{experience.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ExperienceSection;
