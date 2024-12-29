import express, { Request, Response } from 'express';
import { createServer as createViteServer } from 'vite';

async function startServer() {
  const app = express();

  // Configurar Vite como middleware
  const vite = await createViteServer({
    server: { middlewareMode: true },
  });
  app.use(vite.middlewares);

  // Rotas do Express
  app.get('/api', (req: Request, res: Response) => {
    res.json({ message: 'Hello from Express with TypeScript!' });
  });

  // Iniciar o servidor
  app.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
  });
}

startServer();
