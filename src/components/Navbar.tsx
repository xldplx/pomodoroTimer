import React from 'react';
import { Clock, Book, Brain } from 'lucide-react';

interface NavbarProps {
  setTechnique: (technique: string) => void;
  currentTechnique: string;
}

const Navbar: React.FC<NavbarProps> = ({ setTechnique, currentTechnique }) => {
  return (
    <nav className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-4 z-20 relative">
      <div className="container mx-auto flex justify-center items-center">
        <button
          onClick={() => setTechnique('pomodoro')}
          className={`mx-2 p-2 rounded-md transition duration-300 ease-in-out flex items-center ${
            currentTechnique === 'pomodoro' ? 'bg-white bg-opacity-20 text-white' : 'text-gray-300 hover:bg-white hover:bg-opacity-10'
          }`}
        >
          <Clock size={20} />
          <span className="ml-2">Pomodoro</span>
        </button>
        <button
          onClick={() => setTechnique('feynman')}
          className={`mx-2 p-2 rounded-md transition duration-300 ease-in-out flex items-center ${
            currentTechnique === 'feynman' ? 'bg-white bg-opacity-20 text-white' : 'text-gray-300 hover:bg-white hover:bg-opacity-10'
          }`}
        >
          <Book size={20} />
          <span className="ml-2">Feynman</span>
        </button>
        <button
          onClick={() => setTechnique('activecall')}
          className={`mx-2 p-2 rounded-md transition duration-300 ease-in-out flex items-center ${
            currentTechnique === 'activecall' ? 'bg-white bg-opacity-20 text-white' : 'text-gray-300 hover:bg-white hover:bg-opacity-10'
          }`}
        >
          <Brain size={20} />
          <span className="ml-2">Active Recall</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;