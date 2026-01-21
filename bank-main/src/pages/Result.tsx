import { useLocation, useNavigate } from 'react-router-dom';
import { useGameStore } from '../store/gameStore';
import { PixelCard } from '../components/PixelCard';
import { PixelButton } from '../components/PixelButton';
import { Mascot } from '../components/Mascot';
import { playSuccess } from '../utils/audio';
import { useEffect } from 'react';

export default function Result() {
    const { state } = useLocation();
    const navigate = useNavigate();
    const { unlockLesson, setStars, addCoins } = useGameStore();

    const { score, total, lessonId } = state || { score: 0, total: 0, lessonId: '' };
    const percentage = (score / total) * 100;
    const starsEarned = percentage >= 80 ? 3 : percentage >= 60 ? 2 : percentage >= 40 ? 1 : 0;
    const isSuccess = percentage >= 60;

    useEffect(() => {
        if (lessonId) {
            setStars(lessonId, starsEarned);
            if (isSuccess) {
                playSuccess();
                addCoins(starsEarned * 10);
                // Unlock next lesson logic
                const nextMap: Record<string, string> = {
                    'banks_accounts': 'interest_savings',
                    'interest_savings': 'digital_payments_cards',
                    'digital_payments_cards': 'budgeting_needs_wants',
                    'budgeting_needs_wants': 'final_quiz'
                };
                if (nextMap[lessonId]) {
                    unlockLesson(nextMap[lessonId]);
                }
            }
        }
    }, []);

    return (
        <div className="min-h-screen bg-autumn-pattern p-8 flex flex-col items-center justify-center font-pixel">
            <div className="flex flex-col md:flex-row items-center gap-8 w-full max-w-4xl justify-center">
                <Mascot
                    mood={isSuccess ? 'happy' : 'sad'}
                    message={isSuccess ? "You did it!" : "Keep trying!"}
                    className="shrink-0"
                />

                <PixelCard className="w-full max-w-md text-center">
                    <h1 className="text-2xl mb-4">Lesson Complete!</h1>

                    <div className="text-6xl mb-4">
                        {starsEarned >= 1 ? '⭐' : '🌑'}
                        {starsEarned >= 2 ? '⭐' : '🌑'}
                        {starsEarned >= 3 ? '⭐' : '🌑'}
                    </div>

                    <p className="text-xl mb-2">Score: {score} / {total}</p>
                    <p className="text-gray-500 mb-8">{isSuccess ? 'Great job!' : 'Try again!'}</p>

                    <div className="flex flex-col gap-4">
                        <PixelButton onClick={() => navigate('/')}>Back to Map</PixelButton>
                        {!isSuccess && (
                            <PixelButton variant="secondary" onClick={() => navigate(`/quiz/${lessonId}`)}>Retry</PixelButton>
                        )}
                    </div>
                </PixelCard>
            </div>
        </div>
    );
}
