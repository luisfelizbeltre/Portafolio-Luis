import express from 'express';

import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());

let visitCount = 0;

app.get('/visits',(req,res)=>{
    visitCount++;
    res.json({visits:visitCount})
});

app.listen(port,()=>{
    console.log("servidor escuchando")
})