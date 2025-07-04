
import React, { useState } from 'react';

export function SequenceEditorChat() {
  const [messages, setMessages] = useState([
    { sender: 'agent', text: 'Hi! I\'m your caller agent. Let\'s prepare your sequence.' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { sender: 'user', text: input }]);
    setInput('');
    // Simulate AI reply
    setTimeout(() => {
      setMessages(prev => [...prev, { sender: 'agent', text: 'Got it! What’s the next step?' }]);
    }, 800);
  };

  return (
    <div className="flex flex-col h-full p-4">
      <div className="flex-1 overflow-y-auto space-y-3">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={\`max-w-md px-4 py-2 rounded-xl \${msg.sender === 'user' ? 'bg-blue-100 self-end' : 'bg-gray-200 self-start'}\`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="flex mt-4">
        <input
          className="flex-1 px-4 py-2 border rounded-l-xl"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={handleSend} className="bg-blue-500 text-white px-4 rounded-r-xl">Send</button>
      </div>
    </div>
  );
}
