import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
}

interface GameState {
  unlockedLessons: Record<string, boolean>;
  stars: Record<string, number>;
  goalCoins: number;
  achievements: Achievement[];
  character: string; // New state
  unlockLesson: (id: string) => void;
  setStars: (id: string, count: number) => void;
  addCoins: (amount: number) => void;
  unlockAchievement: (id: string) => void;
  setCharacter: (char: string) => void; // New action
  resetProgress: () => void;
}

export const useGameStore = create<GameState>()(
  persist(
    (set) => ({
      unlockedLessons: { banks_accounts: true },
      stars: {},
      goalCoins: 0,
      character: 'boy',
      achievements: [
        { id: 'first_win', title: 'First Win', description: 'Complete your first lesson', icon: '🏆', unlocked: false },
        { id: 'big_saver', title: 'Big Saver', description: 'Save 500 coins', icon: '💰', unlocked: false },
        { id: 'shop_spender', title: 'Shop Spender', description: 'Buy your first item', icon: '🛍️', unlocked: false },
        { id: 'quiz_master', title: 'Quiz Master', description: 'Get 3 stars on a lesson', icon: '⭐', unlocked: false },
      ],
      unlockLesson: (id) => set((state) => ({
        unlockedLessons: { ...state.unlockedLessons, [id]: true }
      })),
      setStars: (id, count) => set((state) => {
        const newStars = { ...state.stars, [id]: Math.max(state.stars[id] || 0, count) };
        if (count === 3) {
           const achievements = state.achievements.map(a => 
             a.id === 'quiz_master' ? { ...a, unlocked: true } : a
           );
           return { stars: newStars, achievements };
        }
        return { stars: newStars };
      }),
      addCoins: (amount) => set((state) => {
        const newCoins = state.goalCoins + amount;
        let achievements = state.achievements;
        if (newCoins >= 500) {
           achievements = achievements.map(a => a.id === 'big_saver' ? { ...a, unlocked: true } : a);
        }
        return { goalCoins: newCoins, achievements };
      }),
      unlockAchievement: (id) => set((state) => ({
        achievements: state.achievements.map(a => a.id === id ? { ...a, unlocked: true } : a)
      })),
      setCharacter: (char) => set({ character: char }),
      resetProgress: () => set({
        unlockedLessons: { banks_accounts: true },
        stars: {},
        goalCoins: 0,
        character: 'boy',
        achievements: [
          { id: 'first_win', title: 'First Win', description: 'Complete your first lesson', icon: '🏆', unlocked: false },
          { id: 'big_saver', title: 'Big Saver', description: 'Save 500 coins', icon: '💰', unlocked: false },
          { id: 'shop_spender', title: 'Shop Spender', description: 'Buy your first item', icon: '🛍️', unlocked: false },
          { id: 'quiz_master', title: 'Quiz Master', description: 'Get 3 stars on a lesson', icon: '⭐', unlocked: false },
        ]
      }),
    }),
    { name: 'bank-quest-storage' }
  )
);
