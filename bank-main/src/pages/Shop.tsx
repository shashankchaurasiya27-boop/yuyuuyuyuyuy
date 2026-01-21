import { useGameStore } from '../store/gameStore';
import { PixelCard } from '../components/PixelCard';
import { PixelButton } from '../components/PixelButton';
import { useNavigate } from 'react-router-dom';
import { Mascot } from '../components/Mascot';
import { useState } from 'react';
import { playClick, playSuccess } from '../utils/audio';

const SHOP_ITEMS = [
    { id: 'sticker_star', name: 'Star Sticker', price: 50, icon: '⭐', type: 'want' },
    { id: 'sticker_heart', name: 'Heart Sticker', price: 50, icon: '❤️', type: 'want' },
    { id: 'hat_cool', name: 'Cool Hat', price: 150, icon: '🧢', type: 'want' },
    { id: 'glasses_sun', name: 'Sunglasses', price: 100, icon: '🕶️', type: 'want' },
    { id: 'pet_rock', name: 'Pet Rock', price: 200, icon: '🪨', type: 'want' },
    { id: 'charity', name: 'Donate to Charity', price: 100, icon: '🤝', type: 'goal' },
    { id: 'goal_picnic', name: 'Class Picnic', price: 500, icon: '🧺', type: 'goal' },
    { id: 'goal_game', name: 'Game Shop', price: 1000, icon: '🎮', type: 'goal' },
];

export default function Shop() {
    const navigate = useNavigate();
    const { goalCoins, addCoins, unlockAchievement } = useGameStore();
    const [message, setMessage] = useState("Welcome to the shop!");

    const handleBuy = (item: typeof SHOP_ITEMS[0]) => {
        if (goalCoins >= item.price) {
            addCoins(-item.price);
            setMessage(`You bought ${item.name}!`);
            playSuccess();
            unlockAchievement('shop_spender');
        } else {
            setMessage("Not enough coins! Save more!");
            playClick();
        }
    };

    return (
        <div className="min-h-screen bg-autumn-pattern p-8 flex flex-col items-center font-pixel">
            <div className="w-full max-w-4xl flex justify-between items-center mb-8 text-white">
                <PixelButton onClick={() => navigate('/')} variant="secondary">🏠 Home</PixelButton>
                <div className="bg-autumn-dark p-4 border-2 border-white rounded-lg">
                    💰 Coins: {goalCoins}
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl">
                <Mascot mood="idle" message={message} className="shrink-0" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                    {SHOP_ITEMS.map((item) => (
                        <PixelCard key={item.id} className="flex flex-col items-center gap-2">
                            <div className="text-4xl">{item.icon}</div>
                            <h3 className="text-lg">{item.name}</h3>
                            <p className="text-gray-500 text-xs uppercase">{item.type === 'goal' ? 'Dream Goal' : 'Just for Fun'}</p>
                            <PixelButton
                                onClick={() => handleBuy(item)}
                                disabled={goalCoins < item.price}
                                className="w-full mt-2"
                                variant={item.type === 'goal' ? 'primary' : 'secondary'}
                            >
                                Buy {item.price} 💰
                            </PixelButton>
                        </PixelCard>
                    ))}
                </div>
            </div>
        </div>
    );
}
