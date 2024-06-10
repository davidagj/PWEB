import { app } from "../axios";
import { Task } from "../interfaces/Task";

export const createTask = async (data: Task) => {
  try {
    const res = await app.post('/task', data );
    return res.data;
    }catch (err) {
      return err;
    }
};

export const editTask = async (id: string, data: Task) => {
  try {
    const res = await app.patch(`/tasks/${id}`, data );
    return res.data;
    }catch (err) {
      return err;
    }
};

export const deleteTask = async (id: string) => {
  try {
    const res = await app.delete(`/tasks/${id}`);
    return res.data;
    }catch (err) {
      return err;
    }
};

export const listTask = async () => {
  try {
    const res = await app.get('/tasks');
    return res.data;
    }catch (err) {
      return err;
    }
};