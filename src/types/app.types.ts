export interface TodoItem {
  id: string;
  title: string;
  completed: boolean;
}

export interface User {
  email: string;
  password: string;
  todos: TodoItem[];
}
