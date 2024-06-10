import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { FC, useState} from 'react';
import TaskForm from '../taskForm/TaskForm';
import {ModalProps} from '../../interfaces/modal';
import { _Modal } from '../../styles/components/_modal';
import { TaskFormData } from '../../interfaces/taskForm';
import { createTask } from '../../services/task';

const CreateTask: FC<ModalProps> = ({open,handleClose}) => {
  const [formData, setFormData] = useState<TaskFormData>({
    title: '',
    status: '',
    date: '',
    priority: '',
    type: '',
    description: ''
  });


  const onChange = (value: any) =>
    setFormData(prev => ({ ...prev, ...value }));

  const criarTask = async() => {
    try {
      const res = await createTask(formData);
      if (!res.success) throw new Error(res?.message ?? "Ocorreu um erro");
      handleClose();
    } catch (err) {
      console.log(err);
    }
  };
  

  
    
  return (
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={_Modal}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            <Button variant="outlined" color="secondary" onClick={handleClose}>
              Cancelar
            </Button>
            <Button variant="contained" color="primary" onClick={criarTask}>
              Criar
            </Button>
          </Box>
        <Box>
          <TaskForm value={formData} onChange={onChange}/>
        </Box>
        </Box>
      </Modal>
  );
};

 export default CreateTask;