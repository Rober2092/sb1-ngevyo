import React, { useEffect, useState } from 'react';

const codeLines = [
  'const developer = {',
  '  name: "Hugo Alvarado",',
  '  skills: ["React", "Node.js", "TypeScript"],',
  '  passion: "Building amazing web apps",',
  '  experience: "5+ years",',
  '  location: "Los Angeles, CA",',
  '  code: () => solve(problems)',
  '};',
];

export default function CodeAnimation() {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentLine < codeLines.length) {
      const timer = setTimeout(() => {
        setVisibleLines(prev => [...prev, currentLine]);
        setCurrentLine(prev => prev + 1);
      }, 400);

      return () => clearTimeout(timer);
    }
  }, [currentLine]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="animate-float mt-8 lg:mt-0">
      <div className="bg-gray-900/90 p-4 sm:p-6 rounded-lg border border-gray-700/50 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300 shadow-xl hover:shadow-blue-500/10">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-3 h-3 rounded-full bg-red-400 animate-pulse"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        </div>
        <pre className="font-mono text-[10px] xs:text-xs sm:text-sm md:text-base whitespace-pre overflow-x-auto">
          {codeLines.map((line, index) => (
            <div
              key={index}
              className={`line ${
                visibleLines.includes(index)
                  ? 'animate-typewriter opacity-100'
                  : 'opacity-0'
              }`}
              style={{
                color: line.includes('"') ? '#a5d6ff' : '#e6edf3',
                animationDelay: `${index * 0.1}s`,
                transform: visibleLines.includes(index) ? 'translateX(0)' : 'translateX(-10px)',
                transition: 'transform 0.3s ease-out'
              }}
            >
              {line}
            </div>
          ))}
          {visibleLines.length === codeLines.length && (
            <div className="text-green-400 mt-2">
              {'> Ready to code'}{showCursor && '█'}
            </div>
          )}
        </pre>
      </div>
    </div>
  );
}