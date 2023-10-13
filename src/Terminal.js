import React, { useState } from 'react';

const Terminal = () => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState([]);
  
    const handleCommand = (command) => {
      switch(command) {
        case 'about':
          return 'Griffin Gore is a talented web developer with 5 years of experience in front-end development...';
        case 'projects':
          return '1. Project A - A web application built using React and Node.js...\n2. Project B - A mobile app developed using React Native...';
        default:
          return 'Unknown command. Try "about" or "projects"';
      }
    }
  
    const handleSubmit = () => {
      const result = handleCommand(input.trim());
      setOutput(prev => [...prev, { command: input, result }]);
      setInput('');
    }
  
    return (
      <div className="h-screen w-full bg-black text-green-400 p-6 font-mono">
        <p className="text-lg">Welcome to Griffin Gore's Portfolio</p>
        {output.map((item, index) => (
          <div key={index} className="my-2">
            <p className="text-sm">{`$ ${item.command}`}</p>
            <pre className="text-xs">{item.result}</pre>
          </div>
        ))}
        <div className="flex items-center text-sm">
          <span className="mr-2">$</span>
          <input 
            className="bg-black w-full text-green-400 focus:outline-none"
            placeholder="Type a command..."
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSubmit()}
          />
        </div>
      </div>
    );
}

export default Terminal;
