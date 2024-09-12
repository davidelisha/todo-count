export type Priority = "High" | "Medium" | "Low" | "n/a";
export interface TodoItem {
  id: string;
  title: string;
  completed: boolean;
  date: number | undefined;
  description?: string;
  deadline?: string;
  priority?: Priority;
}

export interface User {
  email: string;
  password: string;
  todos: TodoItem[];
}
