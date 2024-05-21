import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
  faPenToSquare,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

const Todo = () => {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);
  const [editingTodoId, setEditingTodoId] = useState(null);
  const [editingTodoText, setEditingTodoText] = useState("");

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ];
    });
    setNewItem("");
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (id) => {
    const todo = todos.find((todo) => todo.id === id);
    setEditingTodoId(id);
    setEditingTodoText(todo.title);
  };

  const handleEditText = (e) => {
    setEditingTodoText(e.target.value);
  };

  const updateTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, title: editingTodoText } : todo
      )
    );
    setEditingTodoId(null);
    setEditingTodoText("");
  };

  const checkTodo = (id, completed) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, completed } : todo))
    );
  };

  const countTodos = () => todos.length;
  const countCompletedTodos = () =>
    todos.filter((todo) => todo.completed).length;

  return (
    <>
      <div className="count-todo-container">
        <div className="todo-wrap">
          <div className="todo-done">
            <div className="done">Todo Done</div>
            <div className="encouragement">Keep it up</div>
          </div>
          <div className="todo-counter">
            <p>{countTodos()}</p>
            <p>/</p>
            <p>{countCompletedTodos()}</p>
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="new-item">
        <div className="form-row">
          <input
            className="todo-type"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            id="item"
            placeholder="write your next task"
          />
        </div>
        <button className="add-todo">
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </form>
      <ul className="list">
        {todos
          .filter((todo) => !todo.completed)
          .map((todo) => {
            return (
              <div className="todo-container" key={todo.id}>
                <div className="todo">
                  <input
                    className="check"
                    type="checkbox"
                    checked={todo.completed}
                    onChange={(e) => checkTodo(todo.id, e.target.checked)}
                  />
                  {editingTodoId && editingTodoId === todo.id ? (
                    <input
                      type="text"
                      placeholder="Edit todo"
                      value={editingTodoText}
                      onChange={handleEditText}
                      onKeyDown={(e) =>
                        e.key === "Enter" && updateTodo(todo.id)
                      }
                    />
                  ) : (
                    <div className="updates">{todo.title}</div>
                  )}
                </div>
                <div className="buttons">
                  <div onClick={() => handleEdit(todo.id)} className="btn-edit">
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </div>
                  <div
                    onClick={() => handleDelete(todo.id)}
                    className="btn-delete"
                  >
                    <FontAwesomeIcon icon={faTrashCan} />
                  </div>
                </div>
              </div>
            );
          })}
      </ul>
      <ul className="list">
        {todos
          .filter((todo) => todo.completed)
          .map((todo) => {
            return (
              <div className="todo-completed-container" key={todo.id}>
                <div className="todo">
                  <input
                    className="check"
                    type="checkbox"
                    checked={todo.completed}
                    onChange={(e) => checkTodo(todo.id, e.target.checked)}
                  />
                  {todo.title}
                </div>
                <div className="buttons">
                  <div className="btn-complete-edit">
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </div>
                  <div
                    onClick={() => handleDelete(todo.id)}
                    className="btn-complete-delete"
                  >
                    <FontAwesomeIcon icon={faTrashCan} />
                  </div>
                </div>
              </div>
            );
          })}
      </ul>
    </>
  );
};

export default Todo;
