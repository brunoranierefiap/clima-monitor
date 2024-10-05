import React, { useState } from 'react';
import { Box, Typography, TextField, Button, MenuItem, Select } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CriarAlerta = () => {
  const navigate = useNavigate();
  const [nomeAlerta, setNomeAlerta] = useState('');
  const [medida, setMedida] = useState('Temperatura');
  const [valor, setValor] = useState('');
  const [alertas, setAlertas] = useState([
    { nome: 'Alerta de Vento Forte', medida: 'Vento', valor: '60 km/h' },
    { nome: 'Alerta de Calor Extremo', medida: 'Temperatura', valor: '40 °C' },
  ]);

  const handleCriarAlerta = () => {
    if (nomeAlerta.trim() && valor.trim()) {
      const novaMedida = medida === 'Temperatura' ? '°C' : medida === 'Vento' ? 'km/h' : '%';
      const novoAlerta = {
        nome: nomeAlerta,
        medida,
        valor: `${valor} ${novaMedida}`,
      };
      setAlertas([...alertas, novoAlerta]);
      setNomeAlerta('');
      setValor('');
    }
  };

  return (
    <Box sx={{ maxWidth: '600px', margin: '50px auto', padding: '20px' }}>
      <Typography variant="h4" align="center" sx={{ marginBottom: '30px' }} gutterBottom>Criar Alerta Climático</Typography>

      {/* Nome do Alerta */}
      <TextField
        fullWidth
        label="Nome do Alerta"
        variant="outlined"
        value={nomeAlerta}
        onChange={(e) => setNomeAlerta(e.target.value)}
        sx={{ marginBottom: '20px' }}
      />

      {/* Seleção da Medida */}
      <Select
        fullWidth
        value={medida}
        onChange={(e) => setMedida(e.target.value)}
        sx={{ marginBottom: '20px' }}
      >
        <MenuItem value="Temperatura">Temperatura</MenuItem>
        <MenuItem value="Vento">Vento</MenuItem>
        <MenuItem value="Umidade">Umidade</MenuItem>
      </Select>

      {/* Valor da Medida */}
      <TextField
        fullWidth
        label={`Valor (${medida === 'Temperatura' ? '°C' : medida === 'Vento' ? 'km/h' : '%'})`}
        variant="outlined"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        sx={{ marginBottom: '20px' }}
      />

      {/* Botão para Criar Alerta */}
      <Button 
        variant="contained" 
        fullWidth 
        sx={{ backgroundColor: '#000', color: '#fff', marginBottom: '20px' }}
        onClick={handleCriarAlerta}
      >
        Criar Alerta
      </Button>

      {/* Lista de Alertas Criados */}
      <Typography variant="h6" align="center" gutterBottom>Alertas Criados</Typography>
      {alertas.map((alerta, index) => (
        <Box key={index} sx={{ marginBottom: '10px' }}>
          <Typography variant="body1"><strong>{alerta.nome}</strong></Typography>
          <Typography variant="body2">{alerta.medida}: {alerta.valor}</Typography>
        </Box>
      ))}

      {/* Botão de Voltar */}
      <Button 
        variant="outlined" 
        fullWidth 
        sx={{ borderColor: '#000', color: '#000', '&:hover': { backgroundColor: '#333', borderColor: '#333', color: '#fff' }}} 
        onClick={() => navigate(-1)}
      >
        Voltar
      </Button>
    </Box>
  );
};

export default CriarAlerta;