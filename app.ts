import dotenv from "dotenv"
dotenv.config()
const PORT = process.env.PORT || 3001;
import express from 'express';
const app = express();
import router from './src/routes/routes';
import cors from 'cors';
import { AppDataSource } from "./src/data-source";

app.use(cors())
app.use(express.json());

app.get('/ping', () => {
    console.log('pong')
});


AppDataSource.initialize()
    .then(() => { })
    .catch((error) => console.log(error))

app.use('', router)

app.listen(PORT, () => {
    console.log('Servidor corriendo en el puerto 3000');
});