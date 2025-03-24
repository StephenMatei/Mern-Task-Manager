import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Task Manager</h1>
      <TaskList />
    </div>
  );
}

export default App;