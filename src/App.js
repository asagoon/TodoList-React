import { useState } from "react";
import TodoList from './TodoList';


function App() {
  const [todos, setTodos] = useState(["Todo1","Todo2"]);

  return (
    <>
      <TodoList todos={todos} />
      <input type="text" />
      <button>Add Task</button>
      <button>Completed Task</button>
      <div>Left Task</div>
      </>
  );
}

export default App;
