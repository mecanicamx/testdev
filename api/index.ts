import express, { Request, Response, Application } from 'express';
import dotenv from 'dotenv';
//For env File
dotenv.config();
console.log(process.env.PORT)
const app: Application = express();
app.use(express.json());
const port = process.env.PORT || 8000;

app.post('/myroute', (req: Request, res: Response) => {
  res.send('bienvenido a mecanica.mx');
});

app.listen(port, () => {
  console.log(`listening at ${port}`);
});
