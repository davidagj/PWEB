export interface TaskFormData {
  title: string;
  status: string;
  date: string;
  priority: string;
  type: string;
  description: string;
}

export interface TaskFormProps {
  initialValues?: TaskFormData;
  onChange: (data: TaskFormData) => void;
}



export interface TaskFormProps1 {
  value: TaskFormData;
  onChange: (value: Record<string, string>) => void;
}
