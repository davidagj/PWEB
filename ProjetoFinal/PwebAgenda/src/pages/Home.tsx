import { Box, Grid, Paper, Typography, List, Button} from '@mui/material'
import SignInModal from '../components/modal/SignInModal'
import TaskList from '../components/list/TaskList'
import { useState } from 'react';
import CreateTask from '../components/modal/CreateTask';
import EditTask from '../components/modal/EditTask';
import Filters from '../components/filter/Filter';
import Summary from '../components/sumary/Sumary';
import { TaskFormData } from '../interfaces/taskForm';

function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);


  const [selectedTask, setSelectedTask] = useState<TaskFormData | undefined>(undefined);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  
  const handleTaskClick = (task: TaskFormData) => {
    setSelectedTask(task);
    setEditModalOpen(true);
  };
  const handleCloseModal = () => {
    setSelectedTask(undefined);
    setEditModalOpen(false);
  };
  
  const handleSaveTask = (task: TaskFormData) => {
    console.log('Tarefa salva:', task);
    setSelectedTask(undefined);
  };


  const handleDeleteTask = () => {
    console.log('Tarefa deletada:', selectedTask);
    setSelectedTask(undefined);
  };

  const handleSaveNewTask = (task: TaskFormData) => {
    console.log('Nova tarefa salva:', task);
    setModalOpen(false);
  };
  return (
    <div>
      <Box >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            <Button variant="contained" color="primary" onClick={handleOpen} >
              Criar Tarefa
            </Button>
            <CreateTask open={modalOpen} handleClose={handleClose} onSave={handleSaveNewTask}/>
            <Button variant="text" color="primary" >
              usuario
            </Button>
          </Box>
      <Grid container spacing={12}>
        <Grid item xs={12} sm={4}>
          <Paper sx={{ p: 2, backgroundColor: '#3c3c3c', color: '#fff' }}>
            <Typography variant="h6" >Pendentes</Typography>
            <List>
              <TaskList status='pendente'  onTaskClick={handleTaskClick} />
            </List>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper sx={{ p: 2, backgroundColor: '#3c3c3c', color: '#fff' }}>
            <Typography variant="h6">Fazendo</Typography>
            <List>
              <TaskList status='fazendo'  onTaskClick={handleTaskClick} />
            </List>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper sx={{ p: 2, backgroundColor: '#3c3c3c', color: '#fff' }}>
            <Typography variant="h6">Feitas</Typography>
            <List>
              <TaskList status='feito' onTaskClick={handleTaskClick} />
            </List>
          </Paper>
        </Grid>
      </Grid>
      <Filters/>
      <Summary />
      <EditTask
        open={isEditModalOpen} 
        handleClose={handleCloseModal} 
        task={selectedTask} 
        onSave={handleSaveTask} 
        onDelete={handleDeleteTask} />
      </Box>
      <SignInModal />
    </div>
  )
}

export default Home