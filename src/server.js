import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

let visitCount = 0;

// API del contador de visitas
app.get('/api/visits', (req, res) => {
  visitCount++;
  res.json({ visits: visitCount });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
