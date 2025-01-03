export interface User {
  user_id: number;
  firstname: string;
  lastname: string;
  username: string;
  password: string;
  email: string;
  create_at: Date;
  update_at: Date;
  create_by: string;
  update_by: string;
  version: number;
}
