export interface SignInFormProps {
  onChange: (SignInData: SignInData) => void;
}

export interface SignInData {
  email: string;
  password: string;
}

