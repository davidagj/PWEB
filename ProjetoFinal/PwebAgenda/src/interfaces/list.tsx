import { TaskFormData } from "./taskForm";


interface listProps {
  status: string;
  onTaskClick: (task: TaskFormData) => void;
};

export default listProps;