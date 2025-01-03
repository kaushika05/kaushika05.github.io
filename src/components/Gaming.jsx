import 'react';

const GamingSection = () => {
    return (
        <div id="gaming" className="py-8 sm:py-16 px-4">
            <h2 className="text-3xl sm:text-4xl text-white text-center mb-6 sm:mb-8 font-playfair">Gaming</h2>

            {/* Valorant Section */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 mb-12 sm:mb-16">
                {/* Text Side */}
                <div className="text-center md:text-left max-w-full md:max-w-lg px-4">
                    <h3 className="text-2xl sm:text-3xl text-white font-bold mb-4">Valorant</h3>
                    <p className="text-white text-base sm:text-lg mb-4">
                        I am a former professional VALORANT esports player - I peaked Immortal 3 in South Asia (top 0.1%).
                        I don&#39;t sweat that much anymore, but I&#39;m still on the game a few times a week! Join me for a duo queue!
                    </p>
                </div>

                {/* Image Side */}
                <div className="relative">
                    <img
                        src="/images/chamber.png"
                        alt="Chamber"
                        className="w-full sm:w-64 h-auto object-cover rounded-lg shadow-lg"
                    />
                    <img
                        src="/images/immortal3.png"
                        alt="Immortal 3 Rank"
                        className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 w-12 h-12 sm:w-16 sm:h-16 rounded-full shadow-md"
                    />
                </div>
            </div>

            {/* Button for Valorant */}
            <div className="text-center">
                <a
                    href="#"
                    className="bg-gradient-to-b from-[#14274E] to-[#394867] text-white py-2 px-4 sm:px-6 rounded hover:bg-[#1C3D5A] transition-colors border border-white"
                >
                    widowmaker #GOD
                </a>
            </div>

            {/* Divider */}
            <div className="my-12 sm:my-16 border-t border-transparent"></div>

            {/* Chess Section */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8">
                {/* Image Side */}
                <div className="relative">
                    <img
                        src="/images/chessboard.jpg"
                        alt="Chessboard"
                        className="w-full sm:w-64 h-auto object-cover rounded-lg shadow-lg border border-white"
                    />
                </div>

                {/* Text Side */}
                <div className="text-center md:text-left max-w-full md:max-w-lg px-4">
                    <h3 className="text-2xl sm:text-3xl text-white font-bold mb-4">Chess</h3>
                    <p className="text-white text-base sm:text-lg mb-4">
                        I&#39;m a huge fan of board games! Care to challenge me to a game of Chess?
                        I&#39;m no pro, but I&#39;ll still give you a run for your money :)
                    </p>
                </div>
            </div>

            {/* Button for Chess */}
            <div className="text-center mt-6 sm:mt-8">
                <a
                    href="https://www.chess.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-b from-[#14274E] to-[#394867] text-white py-2 px-4 sm:px-6 rounded hover:bg-[#1C3D5A] transition-colors border border-white"
                >
                    VAL3NT1NE
                </a>
            </div>
        </div>
    );
};

export default GamingSection;
