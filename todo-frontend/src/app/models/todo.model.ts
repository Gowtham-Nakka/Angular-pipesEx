export interface Todo {
  id?: number;
  taskDesc: string;
  priority: 'LOW' | 'MEDIUM' | 'HIGH';
  markTask: 'PENDING' | 'COMPLETED';
}
