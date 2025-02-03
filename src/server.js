import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

let visitCount = 0;

app.get('/api/visits', (req, res) => {
  visitCount++;
  res.json({ visits: visitCount });
});

// 👇 Exportar la app en lugar de usar app.listen()
export default app;
