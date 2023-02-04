/** @format */

import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import next from 'next';
import authRouter from './routers/authRouter';
import orderFormRouter from './routers/orderFormRouter';
import productPageRouter from './routers/productPageRouter';
import filterRouter from './routers/filterRouter';

dotenv.config();

if (!process.env.SECRET_KEY) {
    throw new Error('Missing environment variable: "SECRET_KEY"');
}

if (!process.env.MONGODB_URI) {
    throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const PORT     = process.env.PORT || '3030';
const dev      = process.env.NODE_ENV !== 'production';
const HOSTNAME = process.env.HOSTNAME || 'localhost';
const DB_URL   = process.env.MONGODB_URI;

const app      = next({ dev, hostname: HOSTNAME, port: Number.parseInt(PORT) });
const handle   = app.getRequestHandler();

app.prepare().then(async () => {
	const server = express();
    server.use(express.json());
    server.use('/api',      productPageRouter);
    server.use('/api',      filterRouter);
    server.use('/api',      orderFormRouter);
    server.use('/api/auth', authRouter);



	server.get('*', async (req: Request, res: Response) => {
		return handle(req, res);
	});

	try {
		mongoose.set('strictQuery', false);
		await mongoose.connect(DB_URL);
		server.listen(PORT, () =>
			console.log(`Server start http://${HOSTNAME}:${PORT}`)
		);
	} catch (error) {
		console.log(error);
	}
});

