import { useNavigate } from 'react-router-dom';
import { useGameStore } from '../store/gameStore';
import { playClick } from '../utils/audio';

export default function CharacterSelect() {
    const navigate = useNavigate();
    const { setCharacter } = useGameStore();

    const handleSelect = (char: string) => {
        playClick();
        setCharacter(char);
        navigate('/home');
    };

    return (
        <div className="min-h-screen bg-retro-purple p-8 flex flex-col items-center font-pixel">
            <h1 className="text-3xl text-retro-yellow mb-12 drop-shadow-md text-center">CHOOSE YOUR CHARACTER</h1>

            <div className="flex gap-8 flex-wrap justify-center">
                <div
                    onClick={() => handleSelect('bot')}
                    className="bg-retro-light border-4 border-black p-4 hover:scale-110 transition-transform cursor-pointer"
                >
                    <img src="/assets/aigc/images/mascot-poses_1768671808_000.png" className="w-32 h-32 pixelated" />
                    <p className="text-center mt-2 text-black">Banker Bot</p>
                </div>

                <div className="bg-gray-400 border-4 border-black p-4 opacity-50 grayscale">
                    <div className="w-32 h-32 bg-gray-600"></div>
                    <p className="text-center mt-2 text-black">Coming Soon</p>
                </div>
            </div>
        </div>
    );
}
