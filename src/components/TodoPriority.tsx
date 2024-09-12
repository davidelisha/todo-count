import React from "react";
import { Priority } from "../types/app.types";

interface TodoPriorityProps {
  handleDropdownClick?: () => void;
  priority: Priority;
}

const priorityColor = (priority: Priority) => {
  if (priority === "High") {
    return "red";
  }
  if (priority === "Medium") {
    return "yellow";
  }
  if (priority === "Low") {
    return "green";
  }
  return "gray";
};

export const TodoPriority: React.FC<TodoPriorityProps> = ({
  handleDropdownClick,
  priority,
}) => {
  return (
    <div
      style={{ backgroundColor: priorityColor(priority) }}
      className="dropdown-btn"
      onClick={handleDropdownClick}
    >
      {priority}
    </div>
  );
};
