import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Checkbox, FormControlLabel } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [manterLogado, setManterLogado] = useState(false);

  const handleLogin = () => {
    // Simulação de login bem-sucedido
    if (email && senha) {
      navigate('/monitoramento');
    }
  };

  return (
    <Box sx={{ maxWidth: '400px', margin: '50px auto', padding: '20px', textAlign: 'center' }}>
      {/* Título do projeto SIMACCA */}
      <Typography variant="h3" gutterBottom sx={{ marginBottom: '30px' }}>
        SIMACCA
      </Typography>
      
      <Typography variant="h6" gutterBottom sx={{ marginBottom: '20px' }}>
        Sistema de Monitoramento e Alerta Climático
      </Typography>

      {/* Campo de Email */}
      <TextField
        fullWidth
        label="Email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        sx={{
          marginBottom: '20px',
          '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
              borderColor: '#000',  // Cor da borda preta ao focar
            }
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: '#000',  // Cor do label quando o input está focado
          }
        }}
      />

      {/* Campo de Senha */}
      <TextField
        fullWidth
        label="Senha"
        variant="outlined"
        type="password"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        sx={{
          marginBottom: '20px',
          '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
              borderColor: '#000',  // Cor da borda preta ao focar
            }
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: '#000',  // Cor do label quando o input está focado
          }
        }}
      />

      {/* Checkbox Manter-se Logado */}
      <FormControlLabel
        control={
          <Checkbox
            checked={manterLogado}
            onChange={() => setManterLogado(!manterLogado)}
            sx={{
              color: '#000',  // Cor padrão do checkbox
              '&.Mui-checked': {
                color: '#000',  // Cor preta quando checado
              }
            }}
          />
        }
        label="Manter-se logado"
        sx={{ marginBottom: '20px' }}
      />

      {/* Botão de Login */}
      <Button 
        fullWidth 
        variant="contained" 
        sx={{ backgroundColor: '#000', color: '#fff', marginBottom: '20px' }} 
        onClick={handleLogin}
      >
        Login
      </Button>
    </Box>
  );
};

export default Login;