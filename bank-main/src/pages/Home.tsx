import { useNavigate } from 'react-router-dom';
import { useGameStore } from '../store/gameStore';
import { playClick } from '../utils/audio';

export default function Home() {
    const navigate = useNavigate();
    const { character } = useGameStore();

    const handleNav = (path: string) => {
        playClick();
        navigate(path);
    };

    return (
        <div className="min-h-screen bg-retro-dark flex flex-col items-center justify-center font-pixel relative overflow-hidden">
            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0 opacity-40">
                <img src="/assets/aigc/images/retro-city-bg_1768673660_000.png" alt="City" className="w-full h-full object-cover" />
            </div>

            <div className="z-10 flex flex-col items-center gap-6">
                <div className="bg-retro-light border-4 border-black p-4 rounded-lg mb-8 relative shadow-pixel">
                    <p className="text-black">HELLO! Ready to learn?</p>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-retro-light border-b-2 border-r-2 border-black rotate-45"></div>
                </div>

                <img src="/assets/aigc/images/mascot-poses_1768671808_000.png" className="w-24 h-24 pixelated mb-8 animate-bounce" />

                <div className="flex flex-col gap-4 w-48">
                    <button onClick={() => handleNav('/shop')} className="bg-retro-yellow border-4 border-black p-2 hover:bg-white text-black shadow-pixel">
                        SIGN IN (Shop)
                    </button>
                    <button onClick={() => handleNav('/loan-game')} className="bg-retro-cyan border-4 border-black p-2 hover:bg-white text-black shadow-pixel">
                        MENU (Loan Lab)
                    </button>
                    <button onClick={() => handleNav('/map')} className="bg-retro-pink border-4 border-black p-2 hover:bg-white text-white shadow-pixel">
                        START (Map)
                    </button>
                </div>
            </div>
        </div>
    );
}