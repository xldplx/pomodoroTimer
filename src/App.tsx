import { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Coffee, } from 'lucide-react';
import Navbar from './components/Navbar';
import PomodoroTimer from './components/PomodoroTimer';

function App() {
  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [technique, setTechnique] = useState('pomodoro');

  useEffect(() => {
    let interval: number | undefined;

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      setIsBreak(!isBreak);
      setTime(isBreak ? 25 * 60 : 5 * 60);
      setIsActive(false);
    }

    return () => clearInterval(interval);
  }, [isActive, time, isBreak]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setTime(25 * 60);
    setIsActive(false);
    setIsBreak(false);
  };

  const renderTechniqueContent = () => {
    switch (technique) {
      case 'pomodoro':
        return (
          <>
            <PomodoroTimer time={time} isBreak={isBreak} />
            <div className="flex justify-center space-x-4 mt-6">
              <button
                onClick={toggleTimer}
                className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 backdrop-filter backdrop-blur-lg"
              >
                {isActive ? <Pause size={24} /> : <Play size={24} />}
              </button>
              <button
                onClick={resetTimer}
                className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 backdrop-filter backdrop-blur-lg"
              >
                <RotateCcw size={24} />
              </button>
            </div>
            <div className="mt-6 text-center">
              <p className="text-gray-300 text-lg">
                {isBreak ? (
                  <span className="flex items-center justify-center">
                    <Coffee size={24} className="mr-2" /> Break Time!
                  </span>
                ) : (
                  "Focus Time"
                )}
              </p>
            </div>
          </>
        );
      case 'feynman':
        return (
          <div className="text-center text-gray-300">
            <h2 className="text-2xl font-bold mb-4">Feynman Technique</h2>
            <ol className="list-decimal list-inside text-left">
              <li className="mb-2">Choose a concept to study</li>
              <li className="mb-2">Explain it to a 12-year-old</li>
              <li className="mb-2">Identify gaps in your explanation</li>
              <li className="mb-2">Review and simplify</li>
            </ol>
          </div>
        );
      case 'activecall':
        return (
          <div className="text-center text-gray-300">
            <h2 className="text-2xl font-bold mb-4">Active Recall</h2>
            <p className="mb-4">Test yourself frequently to reinforce learning:</p>
            <ul className="list-disc list-inside text-left">
              <li className="mb-2">Create flashcards</li>
              <li className="mb-2">Take practice tests</li>
              <li className="mb-2">Summarize without looking at notes</li>
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex flex-col relative overflow-hidden">
      <Navbar setTechnique={setTechnique} currentTechnique={technique} />
      <div className="flex-grow flex items-center justify-center">
        <div className="z-10 bg-white bg-opacity-10 p-8 rounded-2xl backdrop-filter backdrop-blur-lg border border-white border-opacity-20 shadow-2xl">
          <h1 className="text-4xl font-bold text-white mb-6 text-center">Pomodoro Timer</h1>
          {renderTechniqueContent()}
        </div>
      </div>
      <footer className="text-center text-white text-sm py-4">
        Made by xldplx
      </footer>
    </div>
  );
}

export default App;