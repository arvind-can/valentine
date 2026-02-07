import { useState } from 'react';

export default function Tooltip({ children, messages }) {
  const [message, setMessage] = useState('');
  const onMouseEnterHandler = () => {
    setMessage(messages[Math.floor(Math.random() * messages.length)]);
  };
  return (
    <div className="tooltip tooltip-primary" onMouseEnter={onMouseEnterHandler}>
      <div className="tooltip-content pl-2 pr-2">{message}</div>
      {children}
    </div>
  );
}
