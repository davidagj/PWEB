import UserFormProps from "../../interfaces/createUser";
import { UserData } from "../../interfaces/createUser";
import { FC, useState } from "react";
import { TextField, Box } from '@mui/material';

const CreateUserForm: FC<UserFormProps> = ({onChange}) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleInputChange = () => {
    const userData: UserData = {
      name,
      email,
      password,
      confirmPassword
    };
    onChange(userData);
  };

  

  return (
    <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField
        label="Nome"
        variant="outlined"
        fullWidth
        margin="normal"
        value={name}
        sx={{ mt: 2, bgcolor: '#424242', borderRadius: 1, color: '#fff' }}
        InputLabelProps={{ style: { color: '#fff' } }}
        InputProps={{ style: { color: '#fff' } }}
        onChange={(e) => {setName(e.target.value);
          handleInputChange();
        }}
      />
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
      <TextField
        label="Confirme a senha"
        variant="outlined"
        fullWidth
        type="password"
        margin="normal"
        value={confirmPassword}
        sx={{ mt: 2, bgcolor: '#424242', borderRadius: 1, color: '#fff' }}
        InputLabelProps={{ style: { color: '#fff' } }}
        InputProps={{ style: { color: '#fff' } }}
        onChange={(e) => {setConfirmPassword(e.target.value);
          handleInputChange();
        }}
      />
    </Box>
  );
};

export default CreateUserForm;