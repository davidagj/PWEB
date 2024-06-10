import React from 'react';
import { TextField, MenuItem, Select, FormControl, InputLabel } from '@mui/material';

const Filters: React.FC = () => {
  return (
    <div>
      <TextField label="Pesquisar Tarefa" variant="outlined" fullWidth margin="normal" />
      <TextField
        label="Data"
        type="date"
        InputLabelProps={{ shrink: true }}
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <FormControl fullWidth margin="normal">
        <InputLabel>Prioridade</InputLabel>
        <Select label="Prioridade" defaultValue="">
          <MenuItem value="alta">Alta</MenuItem>
          <MenuItem value="media">Média</MenuItem>
          <MenuItem value="baixa">Baixa</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel>Status</InputLabel>
        <Select label="Status" defaultValue="">
          <MenuItem value="pendente">Pendente</MenuItem>
          <MenuItem value="fazendo">Fazendo</MenuItem>
          <MenuItem value="feita">Feita</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel>Tipo</InputLabel>
        <Select label="Tipo" defaultValue="">
          <MenuItem value="pessoal">Pessoal</MenuItem>
          <MenuItem value="profissional">Profissional</MenuItem>
          <MenuItem value="academico">Acadêmico</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default Filters;

