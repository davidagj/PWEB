// src/components/taskForm/TaskForm.tsx
import { FC } from 'react';
import { TextField, MenuItem, Select, FormControl, InputLabel, Box } from '@mui/material';
import { TaskFormProps1,  } from '../../interfaces/taskForm';

const TaskForm: FC<TaskFormProps1> = ({ onChange, value }) => {
 
  



  return (
    <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField
        label="Título"
        variant="outlined"
        fullWidth
        margin="normal"
        value={value?.title}
        sx={{ mt: 2, bgcolor: '#424242', borderRadius: 1, color: '#fff' }}
        InputLabelProps={{ style: { color: '#fff' } }}
        InputProps={{ style: { color: '#fff' } }}
        onChange={e => onChange({ title: e.target.value })}
      />
      <FormControl fullWidth margin="normal">
        <InputLabel sx={{ color: '#fff' }}>Status</InputLabel>
        <Select
          label="Status"
          value={value?.status}
          sx={{ mt: 2, bgcolor: '#424242', borderRadius: 1, color: '#fff' }}
          inputProps={{ style: { color: '#fff' } }}
          onChange={e => onChange({ status: e.target.value })}
        >
          <MenuItem value="pendente">Pendente</MenuItem>
          <MenuItem value="fazendo">Fazendo</MenuItem>
          <MenuItem value="feita">Feita</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label="Data"
        type="string"
        InputLabelProps={{ shrink: true, style: { color: '#fff' } }}
        variant="outlined"
        fullWidth
        margin="normal"
        value={value?.date}
        onChange={e => onChange({ date: e.target.value })}
        sx={{ mt: 2, bgcolor: '#424242', borderRadius: 1 }}
        InputProps={{ style: { color: '#fff' } }}
      />
      <FormControl fullWidth margin="normal">
        <InputLabel sx={{ color: '#fff' }}>Prioridade</InputLabel>
        <Select
          label="Prioridade"
          value={value?.priority}
          sx={{ mt: 2, bgcolor: '#424242', borderRadius: 1, color: '#fff' }}
          inputProps={{ style: { color: '#fff' } }}
          onChange={e => onChange({ priority: e.target.value })}
        >
          <MenuItem value="alta">Alta</MenuItem>
          <MenuItem value="media">Média</MenuItem>
          <MenuItem value="baixa">Baixa</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel sx={{ color: '#fff' }}>Tipo</InputLabel>
        <Select
          label="Tipo"
          value={value?.type}
          sx={{ mt: 2, bgcolor: '#424242', borderRadius: 1, color: '#fff' }}
          inputProps={{ style: { color: '#fff' } }}
          onChange={e => onChange({ type: e.target.value })}
        >
          <MenuItem value="pessoal">Pessoal</MenuItem>
          <MenuItem value="profissional">Profissional</MenuItem>
          <MenuItem value="academico">Acadêmico</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label="Descrição da tarefa"
        variant="outlined"
        fullWidth
        margin="normal"
        multiline
        rows={4}
        value={value?.description}
        sx={{ mt: 2, bgcolor: '#424242', borderRadius: 1 }}
        InputLabelProps={{ style: { color: '#fff' } }}
        InputProps={{ style: { color: '#fff' } }}
        onChange={e => onChange({ description: e.target.value })}
      />
    </Box>
  );
};

export default TaskForm;
