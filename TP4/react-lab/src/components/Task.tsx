import React from 'react';

interface TaskProps {
  id: number;
  description: string;
  completed: boolean;
  onDelete: (id: number) => void;
  onToggleComplete: (id: number) => void;
}

export default function Task({
  id,
  description,
  completed,
  onDelete,
  onToggleComplete
}: TaskProps) {
  return (
    <div>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => onToggleComplete(id)}
      />
      <span style={{ textDecoration: completed ? 'line-through' : 'none', margin: '0 10px' }}>
        {description}
      </span>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}