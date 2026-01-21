import { useNavigate } from 'react-router-dom';
import { playClick } from '../utils/audio';

export default function Splash() {
    const navigate = useNavigate();

    const handleStart = () => {
        playClick();
        navigate('/character-select');
    };

    return (
        <div className="min-h-screen bg-retro-dark flex flex-col items-center justify-center font-pixel relative overflow-hidden">
            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0 opacity-50">
                <img src="/assets/aigc/images/retro-city-bg_1768673660_000.png" alt="City" className="w-full h-full object-cover" />
            </div>

            <div className="z-10 text-center animate-bounce">
                <h2 className="text-retro-cyan text-xl mb-2 drop-shadow-[2px_2px_0_rgba(0,0,0,1)]">LET'S PLAY</h2>
                <h1 className="text-retro-yellow text-6xl mb-8 drop-shadow-[4px_4px_0_#6B2CF5]">GAME</h1>
            </div>

            <div className="z-10 bg-retro-light border-4 border-black p-6 shadow-pixel w-64 text-center">
                <p className="mb-4 text-black">ARE YOU READY?</p>
                <div className="flex gap-4 justify-center">
                    <button onClick={handleStart} className="bg-retro-light hover:bg-retro-pink border-2 border-black px-4 py-1 text-black">Yes</button>
                    <button className="bg-retro-light hover:bg-gray-400 border-2 border-black px-4 py-1 text-black">No</button>
                </div>
            </div>
        </div>
    );
}