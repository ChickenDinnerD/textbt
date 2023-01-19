import 'path';
import 'dotenv/config';
import express from 'express';
import { mainRouter } from './router';
import { connection } from './connection';

const app = express();
const PORT = process.env.PORT;

app.use(express.static('./src/static'));
app.use(mainRouter);

async function ckeckConn() {
    try {
        await connection.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
    console.error('Unable to connect to the database:', error);
    }
}

ckeckConn();


function bootstrap (): void {
    app.listen(PORT, () => {
    console.log('Server running on port: ', PORT);
    });
}


bootstrap();
