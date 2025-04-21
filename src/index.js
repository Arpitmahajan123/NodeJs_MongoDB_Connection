// index.js
import express from 'express';
import mongoose from 'mongoose';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { DB_Name } from "./constants.js";
import connectDB from './db/db.index.js';
import dotenv from 'dotenv';
dotenv.config({ path: './env' });

// Get the current directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 8000;

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// Call Here DataBase Connection.
connectDB();

// 1st Approach For Connecting To DataBase.
/*
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_Name}`);
    app.on('error', (error) => {
      console.log('ERROR : ', error);
      throw error;
    });
  } catch (error) {
    console.error('Thier Is An Error Of Connection', error);
    throw err;
  }
})();
*/
