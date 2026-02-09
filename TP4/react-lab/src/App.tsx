// import React, { useState } from 'react';
// import Task from './components/Task';
// import TaskForm from './components/TaskForm';

// export default function App() {
//   // Initialisation de l'état avec quelques tâches par défaut
//   const [tasks, setTasks] = useState([
//     { id: 1, description: 'Walk the dog', completed: false },
//     { id: 2, description: 'Buy groceries', completed: false },
//     { id: 3, description: 'Read a book', completed: false },
//   ]);

//   // Fonction pour ajouter une tâche
//   const addTask = (description: string) => {
//     const newTask = {
//       id: tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1, // Génère un ID unique
//       description: description,
//       completed: false
//     };
//     setTasks([...tasks, newTask]);
//   };

//   // Fonction pour supprimer une tâche
//   const deleteTask = (taskId: number) => {
//     const updatedTasks = tasks.filter((task) => task.id !== taskId);
//     setTasks(updatedTasks);
//   };

//   // Fonction pour cocher/décocher une tâche (Section 6)
//   const toggleTaskCompletion = (taskId: number) => {
//     const updatedTasks = tasks.map((task) => {
//       if (task.id === taskId) {
//         return { ...task, completed: !task.completed };
//       }
//       return task;
//     });
//     setTasks(updatedTasks);
//   };

//   return (
//     <div style={{ textAlign: 'center', display: 'flex', rowGap: '1em', flexDirection: 'column' }}>
//       <h1>To-Do List</h1>
      
//       <TaskForm onAddTask={addTask} />
      
//       {tasks.map((task) => (
//         <Task
//           key={task.id}
//           id={task.id}
//           description={task.description}
//           completed={task.completed}
//           onToggleComplete={toggleTaskCompletion}
//           onDelete={deleteTask}
//         />
//       ))}
//     </div>
//   );
// }


//////////////////////////////////// POUR LES FLASHCARDS ////////////////////////////////////
import React, { useState } from 'react';
import Flashcard from './components/Flashcard';

export default function App() {
  // Liste des questions (JS, TS, React) comme demandé
  const questions = [
    {
      question: "Quelle est la différence entre 'let' et 'var' ?",
      answer: "'let' a une portée de bloc, tandis que 'var' a une portée de fonction."
    },
    {
      question: "Que signifie 'DOM' ?",
      answer: "Document Object Model. C'est la représentation structurée de la page web."
    },
    {
      question: "À quoi sert une Interface en TypeScript ?",
      answer: "À définir la structure (le contrat) qu'un objet doit respecter."
    },
    {
      question: "Quel hook React permet de gérer l'état local ?",
      answer: "useState"
    },
    {
      question: "Comment passer des données d'un parent à un enfant en React ?",
      answer: "Via les 'props'."
    },
    {
      question: "Que retourne la méthode map() sur un tableau ?",
      answer: "Un nouveau tableau avec les résultats de la fonction appliquée à chaque élément."
    },
    {
      question: "Quelle commande compile le TypeScript en JavaScript ?",
      answer: "tsc"
    },
    {
      question: "Quel fichier configure le projet TypeScript ?",
      answer: "tsconfig.json"
    },
    {
      question: "En React, pourquoi utilise-t-on l'attribut 'key' dans une liste ?",
      answer: "Pour aider React à identifier quels éléments ont changé, été ajoutés ou supprimés."
    },
    {
      question: "Qu'est-ce que JSX ?",
      answer: "Une extension syntaxique de JavaScript qui permet d'écrire du HTML dans le JS."
    }
  ];

  // État pour l'index de la carte actuelle
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fonctions de navigation
  const nextCard = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
      <h1>Flashcard Quiz App</h1>
      <p>Sujet : Développement Web (JS, TS, React)</p>
      
      {/* Affichage de la carte actuelle */}
      <Flashcard 
        question={questions[currentIndex].question}
        answer={questions[currentIndex].answer}
      />

      {/* Contrôles de navigation */}
      <div style={{ marginTop: '20px' }}>
        <button 
          onClick={prevCard} 
          disabled={currentIndex === 0}
          style={{ marginRight: '10px', padding: '10px 20px', fontSize: '16px' }}
        >
          Précédent
        </button>
        
        <span style={{ margin: '0 15px', fontWeight: 'bold' }}>
          {currentIndex + 1} / {questions.length}
        </span>

        <button 
          onClick={nextCard} 
          disabled={currentIndex === questions.length - 1}
          style={{ marginLeft: '10px', padding: '10px 20px', fontSize: '16px' }}
        >
          Suivant
        </button>
      </div>
    </div>
  );
}