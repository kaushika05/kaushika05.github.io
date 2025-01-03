const Contact = () => {
    return (
        <div className="py-16 px-8 flex items-center justify-center">
            <div className="max-w-lg text-center">
                <h1 className="text-4xl text-white font-bold mb-4">Get in Touch</h1>
                <p className="text-gray-300 mb-6">
                    I’d love to hear from you! Whether it’s about collaboration, opportunities, or just to say hi,
                    feel free to reach out.
                </p>
                <div className="flex justify-center gap-4">
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 bg-gradient-to-b from-[#14274E] to-[#394867] text-white rounded-full hover:bg-[#1C3D5A] transition-colors border border-white"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 bg-gradient-to-b from-[#14274E] to-[#394867] text-white rounded-full hover:bg-[#1C3D5A] transition-colors border border-white"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="mailto:kaywijerathne@outlook.com"
                        className="p-4 bg-gradient-to-b from-[#14274E] to-[#394867] text-white rounded-full hover:bg-[#1C3D5A] transition-colors border border-white"
                    >
                        Email
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
