import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PixelCard } from '../components/PixelCard';
import { PixelButton } from '../components/PixelButton';
import { LESSON_SLIDES } from '../data/lessonData';
import { Mascot } from '../components/Mascot';

export default function LessonIntro() {
  const { lessonId } = useParams();
  const navigate = useNavigate();
  const [slide, setSlide] = useState(0);
  const content = LESSON_SLIDES[lessonId as keyof typeof LESSON_SLIDES] || [];

  const handleNext = () => {
    if (slide < content.length - 1) setSlide(s => s + 1);
    else navigate(`/quiz/${lessonId}`);
  };

  if (content.length === 0) return <div>Lesson not found</div>;

  return (
    <div className="min-h-screen bg-autumn-pattern p-8 flex flex-col items-center justify-center font-pixel">
      <div className="flex flex-col md:flex-row items-center gap-8 w-full max-w-4xl justify-center">
        <Mascot mood="idle" message="Let's learn!" className="shrink-0" />
        
        <PixelCard className="w-full max-w-lg h-96 flex flex-col items-center justify-center text-center gap-6">
          <div className="text-6xl animate-bounce">{content[slide].icon}</div>
          <p className="text-xl px-8 leading-relaxed">{content[slide].text}</p>
          
          <div className="mt-auto flex gap-4 w-full">
            <PixelButton onClick={handleNext} className="w-full">
              {slide === content.length - 1 ? 'START QUIZ' : 'NEXT >>'}
            </PixelButton>
          </div>
        </PixelCard>
      </div>
    </div>
  );
}
