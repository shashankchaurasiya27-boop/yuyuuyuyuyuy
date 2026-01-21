import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGameStore } from '../store/gameStore';
import { QUIZ_DATA } from '../data/quizData';
import { PixelCard } from '../components/PixelCard';
import { PixelButton } from '../components/PixelButton';
import { Mascot } from '../components/Mascot';
import { playCorrect, playWrong } from '../utils/audio';

export default function Quiz() {
    const { lessonId } = useParams();
    const navigate = useNavigate();
    const questions = QUIZ_DATA.filter(q => q.lesson === lessonId);
    const [current, setCurrent] = useState(0);
    const [score, setScore] = useState(0);
    const [showFeedback, setShowFeedback] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);

    const handleAnswer = (correct: boolean) => {
        if (correct) {
            playCorrect();
        } else {
            playWrong();
        }
        setIsCorrect(correct);
        setShowFeedback(true);
        if (correct) setScore(s => s + 1);
    };

    const nextQuestion = () => {
        setShowFeedback(false);
        if (current < questions.length - 1) {
            setCurrent(c => c + 1);
        } else {
            navigate('/result', { state: { score: score + (isCorrect ? 0 : 0), total: questions.length, lessonId } });
        }
    };

    const question = questions[current];

    if (!question) return <div>No questions found</div>;

    // Determine Mascot Mood
    let mascotMood: 'idle' | 'happy' | 'sad' | 'thinking' = 'thinking';
    let mascotMessage = "Think carefully!";

    if (showFeedback) {
        mascotMood = isCorrect ? 'happy' : 'sad';
        mascotMessage = isCorrect ? "Great job!" : "Don't worry, try again next time!";
    }

    return (
        <div className="min-h-screen bg-autumn-pattern p-4 flex flex-col items-center font-pixel">
            <div className="w-full max-w-lg mb-4 flex justify-between text-white">
                <span>Q: {current + 1}/{questions.length}</span>
                <span>Score: {score}</span>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8 w-full max-w-4xl justify-center">
                {/* Mascot on the left (desktop) or top (mobile) */}
                <Mascot mood={mascotMood} message={mascotMessage} className="shrink-0" />

                <PixelCard className="w-full max-w-lg">
                    <h2 className="text-lg mb-8 text-center leading-relaxed">{question.text}</h2>

                    {!showFeedback ? (
                        <>
                            {question.type === 'mcq' && (
                                <div className="grid gap-4">
                                    {question.answers?.map((ans, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => handleAnswer(idx === question.correctIndex)}
                                            className="bg-autumn-light hover:bg-autumn-teal hover:text-white border-2 border-black p-4 rounded text-left transition-transform active:scale-95"
                                        >
                                            {ans}
                                        </button>
                                    ))}
                                </div>
                            )}

                            {question.type === 'activity' && question.activityType === 'safety_choice' && (
                                <div className="grid gap-4">
                                    {question.options?.map((opt, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => handleAnswer(opt.safe)}
                                            className="bg-autumn-light hover:bg-autumn-teal hover:text-white border-2 border-black p-4 rounded text-left"
                                        >
                                            {opt.text}
                                        </button>
                                    ))}
                                </div>
                            )}
                            {question.type === 'activity' && question.activityType === 'needs_wants' && (
                                <div className="grid gap-4">
                                    <p className="text-center text-sm text-gray-500 mb-4">Tap the correct category for each item!</p>
                                    {question.items?.map((item, idx) => (
                                        <div key={idx} className="flex justify-between items-center border-b border-gray-300 pb-2">
                                            <span>{item.name}</span>
                                            <div className="flex gap-2">
                                                <button onClick={() => handleAnswer(item.type === 'need')} className="bg-blue-200 px-2 py-1 text-xs border border-black">Need</button>
                                                <button onClick={() => handleAnswer(item.type === 'want')} className="bg-pink-200 px-2 py-1 text-xs border border-black">Want</button>
                                            </div>
                                        </div>
                                    ))}
                                    <p className="text-xs text-center mt-4 text-red-500">Note: This is a simplified prototype activity.</p>
                                    <button onClick={() => handleAnswer(true)} className="mt-4 w-full bg-green-400 border-2 border-black p-2">Done Sorting</button>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="text-center">
                            <h3 className={`text-2xl mb-4 ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                                {isCorrect ? 'Correct! 🎉' : 'Oops! 😅'}
                            </h3>
                            <p className="mb-6">{question.explanation}</p>
                            <PixelButton onClick={nextQuestion} className="w-full">
                                {current < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
                            </PixelButton>
                        </div>
                    )}
                </PixelCard>
            </div>
        </div>
    );
}
