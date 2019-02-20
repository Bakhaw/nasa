require('dotenv').config();
import compression from 'compression';
import cors from 'cors';
import express from 'express';
import path from 'path';
import config from './config';

const app = express();

app.use(compression());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

if (process.env.NODE_ENV !== 'development') {
  app.use(express.static(path.join(__dirname, 'client', 'dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
  });
}

app.listen(config.PORT, () =>
  console.log(`Serveur connecté au port ${config.PORT} ...`)
);
