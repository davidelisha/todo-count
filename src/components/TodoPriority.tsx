import React from "react";
import { Priority } from "../types/app.types";

interface TodoPriorityProps {
  handleDropdownClick?: () => void;
  priority: Priority;
}

const priorityColor = (priority: Priority) => {
  if (priority === "High") {
    return "red";
  } else if (priority === "Medium") {
    return "yellow";
  } else if (priority === "Low") {
    return "green";
  } else if (priority === "n/a") {
    return "gray";
  }
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
