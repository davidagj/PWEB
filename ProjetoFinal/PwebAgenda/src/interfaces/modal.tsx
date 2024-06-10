import { TaskFormData } from "./taskForm";

export interface ModalProps{
  open:boolean;
  handleClose:() =>void;
  task?: TaskFormData;
  onSave?: (data: TaskFormData) => void;
  onDelete?: (id: string) => void;
}
