require('dotenv').config();
const express = require('express');
const cors = require('cors');
const contactRoutes = require('./routes/contactRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Adicione após os middlewares
const connectDB = require('./config/database');

// Conectar ao banco de dados
connectDB();

// Rotas
app.use('/api/contacts', require('./routes/contactRoutes'));
// Adicione outras rotas conforme necessário

// Rotas
app.use('/api', contactRoutes);

// Rota de teste
app.get('/', (req, res) => {
  res.send('Backend do Portfólio Jéssica Amancio está funcionando!');
});

// Porta
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});