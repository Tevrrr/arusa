/** @format */

import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import Product from './mongoDB/models/Product';
import next from 'next';

dotenv.config();

const PORT = process.env.PORT || '3030';
const dev = process.env.NODE_ENV !== 'production';
const HOSTNAME = process.env.HOSTNAME || 'localhost';

if (!process.env.MONGODB_URI) {
	throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}
const DB_URL = process.env.MONGODB_URI;

const app = next({ dev, hostname: HOSTNAME, port: Number.parseInt(PORT) });
const handle = app.getRequestHandler();

app.prepare().then(async () => {
	const server = express();
	server.use(express.json());

	server.post('/api/product', async (req: Request, res: Response) => {
		const {
			id,
			filter,
			mainImage,
			title,
			price,
			sellability,
			collectionCode,
			collectionName,
		} = req.body;
		const post = await Product.create({
			id,
			filter,
			mainImage,
			title,
			price,
			sellability,
			collectionCode,
			collectionName,
		});
		res.status(200).json(post);
	});

	server.get('/api/product', async (req: Request, res: Response) => {
		const products = await Product.find({});
		res.status(200).json(products);
	});

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


// const app: express.Application = express();

// const PORT = process.env.PORT || '3030';
// const dev = process.env.NODE_ENV !== 'production';
// const HOSTNAME = process.env.HOSTNAME || 'localhost';

// if (!process.env.MONGODB_URI) {
// 	throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
// }
// const DB_URL = process.env.MONGODB_URI;

// app.post('/product', async (req: Request, res: Response) => {
// 	const {
// 		filter,
// 		mainImage,
// 		title,
// 		price,
// 		sellability,
// 		collectionCode,
// 		collectionName,
// 	} = req.body;
// 	const product = await Product.create({
// 		filter,
// 		mainImage,
// 		title,
// 		price,
// 		sellability,
// 		collectionCode,
// 		collectionName,
// 	});
// 	res.status(200).json(product);
// });

// app.get('/product', async (req: Request, res: Response) => {
// 	const products = await Product.find({});
// 	res.status(200).json(products);
// });

// app.get('/', (req: Request, res: Response) => {
// 	res.send('TypeScript With Express');
// });

// const serverStart = async () => {
// 	try {
// 		mongoose.set('strictQuery', false);
// 		await mongoose.connect(DB_URL);
// 		app.listen(PORT, () =>
// 			console.log(`Server start 
//                 http://${HOSTNAME}:${PORT}`)
// 		);
// 	} catch (error) {
// 		console.log(error);
// 	}
// };
// serverStart();

// require('dotenv').config();

// const express = require('express');
// // const mongoose = require('mongoose');

// // const {Product} = require('./mongoDB/models/Product.ts')

