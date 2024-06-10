import {FC, useState} from 'react';
import { Typography } from '@mui/material';
import dataMocked from '../../constants/mocado';



const Summary: FC = () => {
  

  const highPriorityTasks = dataMocked.filter(dataMocked => dataMocked.priority === 'alta').length;
  const mediumPriorityTasks = dataMocked.filter(dataMocked => dataMocked.priority === 'média').length;
  const lowPriorityTasks = dataMocked.filter(dataMocked => dataMocked.priority === 'baixa').length;
  const inProgressTasks = dataMocked.filter(dataMocked => dataMocked.status === 'em andamento').length;
  const pendingTasks = dataMocked.filter(dataMocked => dataMocked.status === 'pendente').length;
  const completedTasks = dataMocked.filter(dataMocked => dataMocked.status === 'realizada').length;
  const totalTasks = dataMocked.length;

  return (
    <div>
      <Typography variant="h6">Tarefas</Typography>
      <Typography variant="body2">Prioridade alta: {highPriorityTasks}</Typography>
      <Typography variant="body2">Prioridade média: {mediumPriorityTasks}</Typography>
      <Typography variant="body2">Prioridade baixa: {lowPriorityTasks}</Typography>
      <Typography variant="body2">Em andamento: {inProgressTasks}</Typography>
      <Typography variant="body2">Pendentes: {pendingTasks}</Typography>
      <Typography variant="body2">Realizadas: {completedTasks}</Typography>
      <Typography variant="body2">Total: {totalTasks}</Typography>
    </div>
  );
};

export default Summary;
