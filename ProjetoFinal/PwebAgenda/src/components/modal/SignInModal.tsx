import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { _SignInModal } from '../../styles/components/_SignInModal';
import { useState } from 'react';
import CreateUserForm from '../taskForm/CreateUserForm';
import { UserData } from '../../interfaces/createUser';
import { register, signIn } from '../../services/unauth';
import { SignInData } from '../../interfaces/SignInForm';
import SignInUserForm from '../taskForm/SignInForm';

const SignInModal = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const [userData, setUserData] = useState<UserData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [signInData, setSignInData] = useState<SignInData>({
    email: '',
    password: '',
  });

const acessarConta = async () => {
    try {
      const res = await signIn(signInData);
      if (!res.success) throw new Error(res?.message ?? "Ocorreu um erro");
      handleClose();
    } catch (err) {
      console.log(err);
    }
  };




  const criarConta = async () => {
    try {
      const res = await register(userData);
      if (!res.success) throw new Error(res?.message ?? "Ocorreu um erro");
      acessarConta(); //testar
      handleClose();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={_SignInModal}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            <Box>
              <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ color: '#FFFFFF', mb: 2, textAlign: 'center' }}>
                Acesse sua conta
              </Typography>
              <SignInUserForm onChange={setSignInData} />
              <Box>
                <Box>
                  <Button variant="contained" color="primary" onClick={acessarConta}>
                    Acessar
                  </Button>
                </Box>
              </Box>
            </Box>
            <Box>
              <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ color: '#FFFFFF', mb: 2, textAlign: 'center' }}>
                Crie sua conta
              </Typography>
              <CreateUserForm onChange={setUserData} />
              <Box>
                <Box>
                  <Button variant="contained" color="primary" onClick={criarConta}>
                    Criar
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default SignInModal;
