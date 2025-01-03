import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import PropTypes from "prop-types";
import { useState } from "react";

const MusicCard = ({ music, isFlipped, onCardClick }) => {
    const { coverImage, artist, favoriteTracks } = music;

    return (
        <div
            className="relative w-72 h-72 sm:w-96 sm:h-96 flex-shrink-0 bg-transparent rounded-lg shadow-lg overflow-hidden cursor-pointer mx-4 border border-white"
            onClick={onCardClick}
        >
            <div
                className="absolute inset-0 transition-transform duration-500"
                style={{
                    transformStyle: "preserve-3d",
                    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
            >
                {/* Front Side */}
                <div
                    className="absolute inset-0 w-full h-full flex items-center justify-center bg-transparent rounded-lg"
                    style={{ backfaceVisibility: "hidden" }}
                >
                    <img
                        src={coverImage}
                        alt={`${artist} cover`}
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>

                {/* Back Side */}
                <div
                    className="absolute inset-0 w-full h-full bg-transparent text-white flex flex-col justify-between p-6 rounded-lg"
                    style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                    }}
                >
                    <div>
                        <h3 className="text-xl font-semibold mb-4">{artist}</h3>
                        <ul className="text-sm space-y-2">
                            {favoriteTracks.map((track, index) => (
                                <li key={index}>{track}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Artist Label */}
            {!isFlipped && (
                <div className="absolute bottom-0 left-0 w-full bg-[#0B132B] text-center text-white py-2 rounded-b-lg">
                    {artist}
                </div>
            )}
        </div>
    );
};

MusicCard.propTypes = {
    music: PropTypes.shape({
        coverImage: PropTypes.string.isRequired,
        artist: PropTypes.string.isRequired,
        favoriteTracks: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
    isFlipped: PropTypes.bool.isRequired,
    onCardClick: PropTypes.func.isRequired,
};

const MusicSection = () => {
    const musicData = [
        {
            coverImage: 'public/images/redclaystrays.jpg',
            artist: 'Red Clay Strays',
            favoriteTracks: [
                '1) Wondering Why',
                '2) Wanna Be Loved',
                '3) I\'m Still Fine',
                '4) Drowning',
                '5) Good Godly Woman',
                '6) Stone\'s Throw',
            ],
        },
        {
            coverImage: 'public/images/sabrina-carpenter.jpg',
            artist: 'Sabrina Carpenter',
            favoriteTracks: [
                '1) Espresso',
                '2) Please Please Please',
                '3) Feather',
                '4) Nonsense',
                '5) Taste',
                '6) Because I Liked a Boy',
            ],
        },
        {
            coverImage: 'public/images/ingrid-michaelson.jpg',
            artist: 'Ingrid Michaelson',
            favoriteTracks: [
                '1) The Way I Am',
                '2) Girls Chase Boys',
                '3) You and I',
                '4) Be OK',
                '5) Maybe',
                '6) Keep Breathing',
            ],
        },
        {
            coverImage: 'public/images/teganandsara.jpg',
            artist: 'Tegan and Sara',
            favoriteTracks: [
                '1) Closer',
                '2) Boyfriend',
                '3) Walking with a Ghost',
                '4) Back in Your Head',
                '5) I Was a Fool',
                '6) 19',
            ],
        },
        {
            coverImage: 'public/images/billieilish.jpg',
            artist: 'Billie Eilish',
            favoriteTracks: [
                '1) Bad Guy',
                '2) Happier Than Ever',
                '3) Bury a Friend',
                '4) When the Party\'s Over',
                '5) Ocean Eyes',
                '6) Therefore I Am',
            ],
        },
        {
            coverImage: 'public/images/ericclapton.jpg',
            artist: 'Eric Clapton',
            favoriteTracks: [
                '1) Tears in Heaven',
                '2) Layla',
                '3) Wonderful Tonight',
                '4) Cocaine',
                '5) I Shot the Sheriff',
                '6) Change the World',
            ],
        },
        {
            coverImage: 'public/images/reginaspektor.jpg',
            artist: 'Regina Spektor',
            favoriteTracks: [
                '1) Fidelity',
                '2) Samson',
                '3) Us',
                '4) On the Radio',
                '5) Better',
                '6) Eet',
            ],
        },
        {
            coverImage: 'public/images/lordhuron.jpg',
            artist: 'Lord Huron',
            favoriteTracks: [
                '1) The Night We Met',
                '2) Ends of the Earth',
                '3) Fool for Love',
                '4) She Lit a Fire',
                '5) Meet Me in the Woods',
                '6) Ancient Names (Part I)',
            ],
        },
        {
            coverImage: 'public/images/eagles.jpg',
            artist: 'Eagles',
            favoriteTracks: [
                '1) Hotel California',
                '2) Take It Easy',
                '3) Desperado',
                '4) Life in the Fast Lane',
                '5) One of These Nights',
                '6) Lyin\' Eyes',
            ],
        },
        {
            coverImage: 'public/images/beabadoobee.jpg',
            artist: 'beabadoobee',
            favoriteTracks: [
                '1) Coffee',
                '2) Care',
                '3) She Plays Bass',
                '4) Sorry',
                '5) If You Want To',
                '6) Worth It',
            ],
        },
        {
            coverImage: 'public/images/cigarettesaftersex.jpg',
            artist: 'Cigarettes After Sex',
            favoriteTracks: [
                '1) Apocalypse',
                '2) Nothing\'s Gonna Hurt You Baby',
                '3) K.',
                '4) Sweet',
                '5) Heavenly',
                '6) Each Time You Fall in Love',
            ],
        },
        {
            coverImage: 'public/images/rexorangecounty.jpg',
            artist: 'Rex Orange County',
            favoriteTracks: [
                '1) Best Friend',
                '2) Loving Is Easy',
                '3) Sunflower',
                '4) Pluto Projector',
                '5) Untitled',
                '6) 10/10',
            ],
        },
        {
            coverImage: 'public/images/arcticmonkeys.jpg',
            artist: 'Arctic Monkeys',
            favoriteTracks: [
                '1) Do I Wanna Know?',
                '2) I Bet You Look Good on the Dancefloor',
                '3) R U Mine?',
                '4) 505',
                '5) Why\'d You Only Call Me When You\'re High?',
                '6) Arabella',
            ],
        },
        {
            coverImage: 'public/images/harrystyles.jpg',
            artist: 'Harry Styles',
            favoriteTracks: [
                '1) Watermelon Sugar',
                '2) Adore You',
                '3) Sign of the Times',
                '4) As It Was',
                '5) Falling',
                '6) Kiwi',
            ],
        },
        {
            coverImage: 'public/images/delaney-bailey.jpg',
            artist: 'Delaney Bailey',
            favoriteTracks: [
                '1) J\'s Lullaby (Darlin\' I\'d Wait for You)',
                '2) I Wonder What You\'re Doing Now',
                '3) Losing You',
                '4) Love Letter from the Sea to the Shore',
                '5) The Subway Song',
                '6) In Her Name',
            ],
        },
        {
            coverImage: 'public/images/frankocean.jpg',
            artist: 'Frank Ocean',
            favoriteTracks: [
                '1) Thinkin Bout You',
                '2) Novacane',
                '3) Pink + White',
                '4) Chanel',
                '5) Nights',
                '6) Pyramids',
            ],
        },
        {
            coverImage: 'public/images/michaeljackson.jpg',
            artist: 'Michael Jackson',
            favoriteTracks: [
                '1) Billie Jean',
                '2) Thriller',
                '3) Beat It',
                '4) Smooth Criminal',
                '5) Man in the Mirror',
                '6) Bad',
            ],
        },
        {
            coverImage: 'public/images/beatles.webp',
            artist: 'The Beatles',
            favoriteTracks: [
                '1) Hey Jude',
                '2) Let It Be',
                '3) Yesterday',
                '4) Come Together',
                '5) Here Comes the Sun',
                '6) Something',
            ],
        },
        {
            coverImage: 'public/images/radiohead.jpg',
            artist: 'Radiohead',
            favoriteTracks: [
                '1) Creep',
                '2) Karma Police',
                '3) No Surprises',
                '4) Paranoid Android',
                '5) Fake Plastic Trees',
                '6) High and Dry',
            ],
        }
    ];

    const repeatedMusicData = [...musicData, ...musicData];

    const [flippedCards, setFlippedCards] = useState({});
    const [animationPaused, setAnimationPaused] = useState(false);

    const [sliderRef] = useKeenSlider({
        loop: true,
        mode: "free",
        slides: { perView: 3, spacing: 15 },
        animation: !animationPaused && { duration: 30000 },
    });

    const handleCardClick = (index) => {
        setFlippedCards((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
        setAnimationPaused((prev) => !prev);
    };

    return (
        <div id="music" className="py-16">
            <h2 className="text-4xl text-white text-center mb-8 font-playfair">
                Music I Love
            </h2>
            <div ref={sliderRef} className="keen-slider">
                {repeatedMusicData.map((music, index) => (
                    <div key={index} className="keen-slider__slide">
                        <MusicCard
                            music={music}
                            isFlipped={!!flippedCards[index]}
                            onCardClick={() => handleCardClick(index)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MusicSection;
