import { useState } from "react";
import { Priority, TodoItem } from "../types/app.types";
import { TodoPriority } from "./TodoPriority";

interface TodoDetailsProps {
  onSave: (
    descriptionText: string,
    deadline: string,
    priority: Priority
  ) => void;
  todo: TodoItem;
}

const TodoDetails: React.FC<TodoDetailsProps> = ({ onSave, todo }) => {
  const [descriptionText, setDescriptionText] = useState(
    todo.description ?? ""
  );
  const [deadline, setDeadline] = useState(todo.deadline ?? "");
  const [priority, setPriority] = useState<Priority>(todo.priority ?? "n/a");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSave(descriptionText, deadline, priority);
  };

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handlePrioritySelect = (selectedPriority: Priority) => {
    setPriority(selectedPriority);
    setIsDropdownOpen(false);
  };

  return (
    <form onSubmit={handleSubmit} className="todo-details">
      <div className="description">
        <label htmlFor="description">
          <div className="labels">Description</div>
        </label>
        <textarea
          id="text"
          value={descriptionText}
          onChange={(e) => setDescriptionText(e.target.value)}
        />
      </div>
      <div className="deadline">
        <label htmlFor="deadline">
          <div className="labels">Dead-line</div>
        </label>
        <input
          value={deadline}
          type="date"
          id="deadline-text"
          placeholder="Dead-line"
          onChange={(e) => setDeadline(e.target.value)}
        />
      </div>
      <div className="priority">
        <label htmlFor="priority">Priority</label>
        <div className="dropdown">
          <TodoPriority
            handleDropdownClick={handleDropdownClick}
            priority={priority}
          />

          {isDropdownOpen && (
            <ul className="dropdown-content">
              <li className="high" onClick={() => handlePrioritySelect("High")}>
                High
              </li>
              <li
                className="medium"
                onClick={() => handlePrioritySelect("Medium")}
              >
                Medium
              </li>
              <li className="low" onClick={() => handlePrioritySelect("Low")}>
                Low
              </li>
            </ul>
          )}
        </div>
      </div>
      <button className="description-btn">Save</button>
    </form>
  );
};

export default TodoDetails;
