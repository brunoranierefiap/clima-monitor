import React, { useState } from 'react';
import { Box, Typography, TextField, Button, List, ListItem, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Forum = () => {
  const navigate = useNavigate();
  const [topico, setTopico] = useState('');
  const [topicos, setTopicos] = useState([
    { titulo: 'Mudanças Climáticas e Impactos Locais' },
    { titulo: 'Previsão de Chuva para a Próxima Semana' }
  ]);

  const handleCriarTopico = () => {
    if (topico.trim()) {
      setTopicos([...topicos, { titulo: topico }]);
      setTopico('');
    }
  };

  return (
    <Box sx={{ maxWidth: '800px', margin: '50px auto', padding: '20px' }}>
      <Typography variant="h4" align="center" sx={{ marginBottom: '30px' }} gutterBottom>Fórum Climático</Typography>
      
      {/* Campo para Criar Novo Tópico */}
      <TextField
        fullWidth
        label="Novo Tópico"
        variant="outlined"
        value={topico}
        onChange={(e) => setTopico(e.target.value)}
        sx={{ marginBottom: '20px' }}
      />

      {/* Botão para Criar Tópico */}
      <Button 
        variant="contained" 
        fullWidth 
        sx={{ backgroundColor: '#000', color: '#fff', marginBottom: '20px' }}
        onClick={handleCriarTopico}
      >
        Criar Tópico
      </Button>

      {/* Lista de Tópicos Criados */}
      <Typography variant="h6" align="center" gutterBottom>Tópicos do Fórum</Typography>
      <List>
        {topicos.map((topico, index) => (
          <ListItem 
            key={index} 
            sx={{ 
              border: '1px solid #ccc',   // Borda mais leve
              borderRadius: '8px', 
              marginBottom: '10px', 
              padding: '15px',             // Mais espaçamento interno
              cursor: 'pointer', 
              '&:hover': {
                backgroundColor: '#f5f5f5',
              }
            }}
          >
            <ListItemText primary={topico.titulo} />
          </ListItem>
        ))}
      </List>

      {/* Botão de Voltar */}
      <Button 
        variant="outlined" 
        fullWidth 
        sx={{ 
          borderColor: '#000', 
          color: '#000', 
          '&:hover': {
            backgroundColor: '#333',
            borderColor: '#333',
            color: '#fff',
          } 
        }} 
        onClick={() => navigate(-1)}
      >
        Voltar
      </Button>
    </Box>
  );
};

export default Forum;