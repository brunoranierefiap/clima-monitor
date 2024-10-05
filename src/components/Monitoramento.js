import React from 'react';
import { Line } from 'react-chartjs-2';
import { Box, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Para navegação
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Registrar componentes do Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const temperatura = 38; // Valor simulado
const vento = 21; // Valor simulado
const umidade = 38; // Valor simulado

const data = {
  labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
  datasets: [
    {
      label: 'Temperatura (°C)',
      data: [22, 25, 28, 26, 30, 35, 33],
      borderColor: 'rgba(0, 0, 0, 1)',      // Cor preta
      backgroundColor: 'rgba(0, 0, 0, 0.1)', // Fundo cinza claro
      fill: true,
      tension: 0.4,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { position: 'top' },
    title: { display: true, text: 'Variação de Temperatura - Últimos 7 Dias' },
  },
};

const Monitoramento = () => {
  const navigate = useNavigate(); // Hook do React Router para navegação

  const handleLogout = () => {
    navigate('/'); // Redireciona para a página de login
  };

  return (
    <Box sx={{ maxWidth: '800px', margin: '50px auto', padding: '20px' }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ marginBottom: '30px' }}>
        Monitoramento Climático
      </Typography>

      {/* Exibição dos dados atuais e botões de alerta */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Card sx={{
            backgroundColor: (vento >= 50) ? 'rgba(255, 69, 58, 0.7)' : '#f9f9f9', 
            color: (vento >= 50) ? '#fff' : '#000'
          }}>
            <CardContent>
              <Typography variant="h6" align="center">Vento</Typography>
              <Typography variant="h5" align="center">{vento} km/h</Typography>
            </CardContent>
          </Card>
          <Button 
            variant="outlined" 
            sx={{ 
              display: 'block', 
              margin: '10px auto', 
              borderColor: '#000',
              color: '#000',
              '&:hover': {
                backgroundColor: '#333',
                borderColor: '#333',
                color: '#fff',
              }
            }}
            onClick={() => navigate('/alertas')}
          >
            Criar Alerta
          </Button>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{
            backgroundColor: (temperatura >= 35) ? 'rgba(255, 69, 58, 0.7)' : '#f9f9f9',
            color: (temperatura >= 35) ? '#fff' : '#000'
          }}>
            <CardContent>
              <Typography variant="h6" align="center">Temperatura</Typography>
              <Typography variant="h5" align="center">{temperatura}°C</Typography>
            </CardContent>
          </Card>
          <Button 
            variant="outlined" 
            sx={{ 
              display: 'block', 
              margin: '10px auto', 
              borderColor: '#000',
              color: '#000',
              '&:hover': {
                backgroundColor: '#333',
                borderColor: '#333',
                color: '#fff',
              }
            }}
            onClick={() => navigate('/alertas')}
          >
            Criar Alerta
          </Button>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{
            backgroundColor: (umidade <= 20) ? 'rgba(255, 69, 58, 0.7)' : '#f9f9f9', 
            color: (umidade <= 20) ? '#fff' : '#000'
          }}>
            <CardContent>
              <Typography variant="h6" align="center">Umidade</Typography>
              <Typography variant="h5" align="center">{umidade}%</Typography>
            </CardContent>
          </Card>
          <Button 
            variant="outlined" 
            sx={{ 
              display: 'block', 
              margin: '10px auto', 
              borderColor: '#000',
              color: '#000',
              '&:hover': {
                backgroundColor: '#333',
                borderColor: '#333',
                color: '#fff',
              }
            }}
            onClick={() => navigate('/alertas')}
          >
            Criar Alerta
          </Button>
        </Grid>
      </Grid>

      {/* Gráfico de temperatura */}
      <Box sx={{ height: '400px', marginTop: 4 }}>
        <Line data={data} options={options} />
      </Box>

      {/* Botões de Logout e Ir para o Fórum */}
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, marginTop: '60px' }}>
        <Button 
          variant="contained" 
          sx={{ 
            flex: 1,
            backgroundColor: '#fff', 
            color: '#000', 
            border: '1px solid #000',
            '&:hover': {
              backgroundColor: '#333',
              color: '#fff',
            }
          }}
          onClick={() => navigate('/forum')}
        >
          Ir para o Fórum
        </Button>
        <Button 
          variant="contained" 
          sx={{ 
            flex: 1,
            backgroundColor: '#000', 
            color: '#fff', 
            '&:hover': {
              backgroundColor: '#333',
            }
          }} 
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Box>
    </Box>
  );
};

export default Monitoramento;