

// import React, { useState } from 'react';
// import './TaskManager.css';

// const TaskManager = () => {
//   const [tasks, setTasks] = useState([]);
//   const [newTaskTitle, setNewTaskTitle] = useState('');
//   const [newTaskDescription, setNewTaskDescription] = useState('');

//   const handleAddTask = () => {
//     if (newTaskTitle.trim() !== '') {
//       setTasks([...tasks, { title: newTaskTitle, description: newTaskDescription }]);
//       setNewTaskTitle('');
//       setNewTaskDescription('');
//     }
//   };

//   const handleDeleteTask = (index) => {
//     const updatedTasks = [...tasks];
//     updatedTasks.splice(index, 1);
//     setTasks(updatedTasks);
//   };

//   const handleEditTask = (index, newTitle, newDescription) => {
//     const updatedTasks = [...tasks];
//     updatedTasks[index].title = newTitle;
//     updatedTasks[index].description = newDescription;
//     setTasks(updatedTasks);
//   };

//   return (
//     <div className="container">
//       <div className="row justify-content-center mt-4">
//         <div className="col-md-6">
//           <div className="input-group mb-3">
//             <input
//               type="text"
//               className="form-control"
//               placeholder="New Task Title"
//               value={newTaskTitle}
//               onChange={(e) => setNewTaskTitle(e.target.value)}
//             />
//             <input
//               type="text"
//               className="form-control"
//               placeholder="New Task Description"
//               value={newTaskDescription}
//               onChange={(e) => setNewTaskDescription(e.target.value)}
//             />
//             <button className="btn btn-primary" onClick={handleAddTask} style={{ backgroundColor: 'blue', color: 'white' }}>
//               Add New Task
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className="row justify-content-center mt-3">
//         {tasks.map((task, index) => (
//           <div className="col-md-6" key={index}>
//             <div className="card">
//               <div className="card-body d-flex flex-row justify-content-between">
//                 <div>
//                   <h3 className="card-title">{task.title}</h3>
//                   <p className="card-text">{task.description}</p>
//                 </div>
//                 <div>
//                   <button className="btn btn-warning mr-9" onClick={() => handleEditTask(index, prompt('Enter new title', task.title), prompt('Enter new description', task.description))} style={{ backgroundColor: 'blue', color: 'white', marginRight: '5px' }}>
//                     Edit
//                   </button>
//                   <button className="btn btn-danger" onClick={() => handleDeleteTask(index)} style={{ backgroundColor: 'red', color: 'white' }}>
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TaskManager;

import React, { useState } from 'react';
import './TaskManager.css';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');

  const handleAddTask = () => {
    if (newTaskTitle.trim() !== '') {
      setTasks([...tasks, { title: newTaskTitle, description: newTaskDescription }]);
      setNewTaskTitle('');
      setNewTaskDescription('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleEditTask = (index, newTitle, newDescription) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].title = newTitle;
    updatedTasks[index].description = newDescription;
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-4">
        <div className="col-md-6">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="New Task Title"
              value={newTaskTitle}
              onChange={(e) => setNewTaskTitle(e.target.value)}
            />
            <input
              type="text"
              className="form-control"
              placeholder="New Task Description"
              value={newTaskDescription}
              onChange={(e) => setNewTaskDescription(e.target.value)}
            />
            <button className="btn btn-primary" onClick={handleAddTask} style={{ backgroundColor: 'blue', color: 'white' }}>
              Add New Task
            </button>
          </div>
        </div>
      </div>
      <div className="row justify-content-center mt-3">
        {tasks.map((task, index) => (
          <div className="col-md-6" key={index}>
            <div className="card">
              <div className="card-body d-flex flex-column">
                <h3 className="card-title">{task.title}</h3>
                <p className="card-text mb-3">{task.description}
                  <button className="btn btn-warning mr-2" onClick={() => handleEditTask(index, prompt('Enter new title', task.title), prompt('Enter new description', task.description))} style={{ backgroundColor: 'blue', color: 'white', marginRight: '5px' , marginLeft: '630px' }}>
                    Edit
                  </button>
                  <button className="btn btn-danger" onClick={() => handleDeleteTask(index)} style={{ backgroundColor: 'red', color: 'white' }}>
                    Delete
                  </button>
                  </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskManager;
