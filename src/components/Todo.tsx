import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { TodoItem } from "../types/app.types";
import Modal from "./Modal";
import TodoDetails from "./TodoDetails";
import { TodoPriority } from "./TodoPriority";

interface TodoProps {
  email: string;
}

const Todo: React.FC<TodoProps> = () => {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [editingTodoId, setEditingTodoId] = useState<string>();
  const [editingTodoText, setEditingTodoText] = useState("");
  const [email, setEmail] = useState("");
  const [openedTodo, setIsOpenedTodo] = useState<TodoItem>();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user")!);
    if (user) {
      const storedEmail = user.email;
      setEmail(storedEmail);
      const localValue = localStorage.getItem(`Items_${storedEmail}`);
      if (!localValue) return;

      setTodos(JSON.parse(localValue));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(`Items_${email}`, JSON.stringify(todos));
    console.log(todos);
  }, [todos, email]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title: newItem,
          completed: false,
          date: Date.now(),
        },
      ];
    });
    setNewItem("");
  };

  const handleDelete = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (id: string) => {
    const todo = todos.find((todo) => todo.id === id)!;
    setEditingTodoId(id);
    setEditingTodoText(todo.title);
  };

  const handleEditText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditingTodoText(e.currentTarget.value);
  };

  const updateTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, title: editingTodoText } : todo
      )
    );
    setEditingTodoId(undefined);
    setEditingTodoText("");
  };

  const checkTodo = (id: string, completed: boolean) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, completed } : todo))
    );
  };

  const countTodos = () => todos.length;
  const countCompletedTodos = () =>
    todos.filter((todo) => todo.completed).length;

  return (
    <>
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
        <div className="todo-counter">
          <p>{countTodos()}</p>
          <p>/</p>
          <p>{countCompletedTodos()}</p>
        </div>
      </form>
      <div className="done">Incompleted Todos</div>
      <ul className="list">
        {todos
          .filter((todo) => !todo.completed)
          .map((todo) => {
            return (
              <div
                onClick={() => setIsOpenedTodo(todo)}
                className="todo-container"
                key={todo.id}
              >
                <div className="wrap">
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
                      <div className="updates">
                        {todo.title}
                        <p className="todo-description">
                          {todo.description ?? "n/a"}
                        </p>

                        <TodoPriority priority={todo.priority ?? "n/a"} />
                      </div>
                    )}
                  </div>
                  <div className="buttons">
                    <div
                      onClick={() => handleEdit(todo.id)}
                      className="btn-edit"
                    >
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
                <div className="todo-date">
                  {todo.date
                    ? new Date(todo.date).toLocaleDateString("en-EN", {
                        month: "long",
                        day: "numeric",
                      })
                    : "N/A"}
                </div>
              </div>
            );
          })}
      </ul>
      <div className="done">Completed Todos</div>
      <ul className="list">
        {todos
          .filter((todo) => todo.completed)
          .map((todo) => {
            return (
              <div className="todo-completed-container" key={todo.id}>
                <div className="wrapp">
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
                    <div
                      onClick={() => handleDelete(todo.id)}
                      className="btn-complete-delete"
                    >
                      <FontAwesomeIcon icon={faTrashCan} />
                    </div>
                  </div>
                </div>
                <div className="todo-date">
                  {todo.date
                    ? new Date(todo.date).toLocaleDateString("en-EN", {
                        month: "long",
                        day: "numeric",
                      })
                    : "N/A"}
                </div>
              </div>
            );
          })}
      </ul>

      {openedTodo && (
        <Modal
          onClose={() => setIsOpenedTodo(undefined)}
          title={todos.find((todo) => todo.id === openedTodo.id)!.title}
        >
          <TodoDetails
            onSave={(descriptionText, deadline, priority) => {
              setTodos(
                todos.map((todo) =>
                  todo.id === openedTodo.id
                    ? {
                        ...todo,
                        description: descriptionText,
                        deadline,
                        priority,
                      }
                    : todo
                )
              );
              setIsOpenedTodo(undefined);
            }}
            todo={openedTodo}
          />
        </Modal>
      )}
    </>
  );
};

export default Todo;
