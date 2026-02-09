import React, { useState } from 'react';

interface TaskFormProps {
  onAddTask: (description: string) => void;
}

export default function TaskForm({ onAddTask }: TaskFormProps) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputValue.trim()) {
      return;
    }
    
    onAddTask(inputValue.trim());
    setInputValue(''); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a new task"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}