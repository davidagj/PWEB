import { SignInFormProps } from "../../interfaces/SignInForm";
import { SignInData } from "../../interfaces/SignInForm";
import { FC, useState } from "react";
import { TextField, Box } from '@mui/material';

const SignInUserForm: FC<SignInFormProps> = ({onChange}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleInputChange = () => {
    const SignInData: SignInData = {
      email,
      password,
    };
    onChange(SignInData);
  };

  

  return (
    <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
     <TextField
        label="E-mail"
        variant="outlined"
        fullWidth
        margin="normal"
        value={email}
        sx={{ mt: 2, bgcolor: '#424242', borderRadius: 1, color: '#fff' }}
        InputLabelProps={{ style: { color: '#fff' } }}
        InputProps={{ style: { color: '#fff' } }}
        onChange={(e) => {setEmail(e.target.value);
          handleInputChange();
        }}
      />
      <TextField
        label="Senha"
        variant="outlined"
        fullWidth
        type="password"
        margin="normal"
        value={password}
        sx={{ mt: 2, bgcolor: '#424242', borderRadius: 1, color: '#fff' }}
        InputLabelProps={{ style: { color: '#fff' } }}
        InputProps={{ style: { color: '#fff' } }}
        onChange={(e) => {setPassword(e.target.value);
          handleInputChange();
        }}
      />
     
    </Box>
  );
};

export default SignInUserForm;