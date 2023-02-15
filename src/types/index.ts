export interface Credentials {
  email: string;
}

export interface User {
  id: number;
  email: string;
  name?: string;
}

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number | string;
}

export interface Comment {
  postId: number;
  id: number;
  email: string;
  body: string;
}

export enum View {
  grid = "grid",
  list = "list",
}
