import React, { useState } from 'react';
import Task from './components/Task';
import TaskForm from './components/TaskForm';

export default function App() {
  // Initialisation de l'état avec quelques tâches par défaut
  const [tasks, setTasks] = useState([
    { id: 1, description: 'Walk the dog', completed: false },
    { id: 2, description: 'Buy groceries', completed: false },
    { id: 3, description: 'Read a book', completed: false },
  ]);

  // Fonction pour ajouter une tâche
  const addTask = (description: string) => {
    const newTask = {
      id: tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1, // Génère un ID unique
      description: description,
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  // Fonction pour supprimer une tâche
  const deleteTask = (taskId: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  // Fonction pour cocher/décocher une tâche (Section 6)
  const toggleTaskCompletion = (taskId: number) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div style={{ textAlign: 'center', display: 'flex', rowGap: '1em', flexDirection: 'column' }}>
      <h1>To-Do List</h1>
      
      <TaskForm onAddTask={addTask} />
      
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          description={task.description}
          completed={task.completed}
          onToggleComplete={toggleTaskCompletion}
          onDelete={deleteTask}
        />
      ))}
    </div>
  );
}