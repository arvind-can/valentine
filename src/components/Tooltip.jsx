import { useState } from 'react';

export default function Tooltip({ children, messages }) {
  const [message, setMessage] = useState('');
  const [previousIndex, setPreviousIndex] = useState(-1);
  const onMouseEnterHandler = () => {
    let randomIndex = Math.floor(Math.random() * messages.length);
    while (previousIndex === randomIndex) randomIndex = Math.floor(Math.random() * messages.length);
    setMessage(messages[Math.floor(Math.random() * messages.length)]);
    setPreviousIndex(randomIndex);
  };
  return (
    <div className="tooltip tooltip-primary" onMouseEnter={onMouseEnterHandler}>
      <div className="tooltip-content pl-2 pr-2">{message}</div>
      {children}
    </div>
  );
}
