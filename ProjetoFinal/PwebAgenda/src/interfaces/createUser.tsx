interface UserFormProps {
  onChange: (taskData: UserData) => void;
}

export interface UserData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default UserFormProps;