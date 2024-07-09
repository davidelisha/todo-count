export interface TodoItem {
  id: string;
  title: string;
  completed: boolean;
  date: number | undefined;
}

export interface User {
  email: string;
  password: string;
  todos: TodoItem[];
}
