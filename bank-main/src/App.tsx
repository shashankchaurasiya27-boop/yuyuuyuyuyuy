import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Splash from './pages/Splash';
import CharacterSelect from './pages/CharacterSelect';
import Home from './pages/Home';
import Shop from './pages/Shop';
import LessonSelect from './pages/LessonSelect';
import LessonIntro from './pages/LessonIntro';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import LoanGame from './pages/LoanGame';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/character-select" element={<CharacterSelect />} />
        <Route path="/home" element={<Home />} />
        <Route path="/map" element={<LessonSelect />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/loan-game" element={<LoanGame />} />
        <Route path="/intro/:lessonId" element={<LessonIntro />} />
        <Route path="/quiz/:lessonId" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
