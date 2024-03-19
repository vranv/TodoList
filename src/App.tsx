import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import TodoSummary from "./components/TodoSummary";
import useTodos from "./hooks/useTodos";

function App() {

  const {
    todos,
    addTodo,
    setTodoCompleted,
    deleteTodo,
    deleteAllCompleted,
  } = useTodos();

  return (
    <main className="h-screen py-10 space-y-5 overflow-y-auto">
      <h1 className="text-center text-3xl font-bold">My TODO</h1>
      <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5 space-y-6">
        <AddTodoForm 
          onSubmit={addTodo}
        />
        <TodoList 
          todos={todos}
          onCompletedChange={setTodoCompleted}
          onDelete={deleteTodo}
        />
      </div>
      <TodoSummary 
        todos={todos}
        deleteAllCompleted={deleteAllCompleted}
      />
    </main>
  )
}

export default App
