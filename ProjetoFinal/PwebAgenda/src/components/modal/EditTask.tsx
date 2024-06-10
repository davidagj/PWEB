import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import {FC, useState, useEffect} from 'react';
import TaskForm from '../taskForm/TaskForm';
import {ModalProps,} from '../../interfaces/modal';
import { _Modal, _ModalIn } from '../../styles/components/_modal';
import { TaskFormData } from '../../interfaces/taskForm';

const EditTask: FC<ModalProps>= ({open, handleClose, task}) => {
  const [taskData, setTaskData] = useState<TaskFormData>({
    title: '',
    status: '',
    date: '',
    priority: '',
    type: '',
    description: ''
  });
  
  const onChange = (value: any) =>
    setTaskData(prev => ({ ...prev, ...value }));

  useEffect(() => {
    if (task) {
      setTaskData(task);
    }
  }, [task]);

  const saveTask = () => {
    console.log('taskData',taskData);
    handleClose();
    //onSave(taskData);
  }

  const deleteTask = () => {
    //algumacoisa
  }

  return (
    <div>
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
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Button variant="contained" color="error" onClick={deleteTask}>
                  Deletar
                </Button>
                <Button variant="contained" color="primary" onClick={saveTask}>
                  Salvar
                </Button>
              </Box>
            </Box>
          </Box>
        <Box>
          <TaskForm value={taskData} onChange={onChange}/>
        </Box>
        </Box>
      </Modal>
    </div>
  );
};

 export default EditTask;