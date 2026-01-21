import { useGameStore } from '../store/gameStore';
import { PixelCard } from '../components/PixelCard';
import { PixelButton } from '../components/PixelButton';
import { useNavigate } from 'react-router-dom';

const LESSONS = [
  { id: 'banks_accounts', title: '1. Banks & Accounts' },
  { id: 'interest_savings', title: '2. Interest & Savings' },
  { id: 'digital_payments_cards', title: '3. Cards & Safety' },
  { id: 'budgeting_needs_wants', title: '4. Needs vs Wants' },
  { id: 'basics_loans', title: '5. Basics of Loans' },
  { id: 'final_quiz', title: '🏆 Final Quiz' },
];

export default function LessonSelect() {
  const navigate = useNavigate();
  const { unlockedLessons, stars, goalCoins } = useGameStore();

  return (
    <div className="min-h-screen bg-autumn-pattern p-8 flex flex-col items-center font-pixel">
      <div className="w-full max-w-md flex justify-between items-center mb-8 text-white">
        <PixelButton onClick={() => navigate('/')} variant="secondary">🏠 Home</PixelButton>
        <div className="bg-autumn-dark p-4 border-2 border-white rounded-lg">
          💰 Coins: {goalCoins}
        </div>
      </div>

      <h1 className="text-3xl text-white mb-8 drop-shadow-md text-center">Bank Quest Map</h1>
      
      <div className="grid gap-6 w-full max-w-md">
        {LESSONS.map((lesson) => {
          const isUnlocked = unlockedLessons[lesson.id];
          return (
            <PixelCard key={lesson.id} className={`relative ${!isUnlocked ? 'opacity-75 grayscale' : ''}`}>
              <div className="flex justify-between items-center">
                <span className="text-sm">{lesson.title}</span>
                <div className="flex gap-1">
                  {[...Array(3)].map((_, i) => (
                    <span key={i} className={i < (stars[lesson.id] || 0) ? 'text-yellow-400' : 'text-gray-300'}>★</span>
                  ))}
                </div>
              </div>
              <PixelButton 
                disabled={!isUnlocked}
                onClick={() => navigate(lesson.id === 'final_quiz' ? '/quiz/final_quiz' : `/intro/${lesson.id}`)}
                className="w-full mt-4"
                variant={isUnlocked ? 'primary' : 'secondary'}
              >
                {isUnlocked ? 'PLAY' : 'LOCKED'}
              </PixelButton>
            </PixelCard>
          );
        })}
      </div>
    </div>
  );
}
