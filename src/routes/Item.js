import express from 'express';
import { getAllItems, getItem } from '../controllers/ItemController.js';

const itemRouter = express.Router();

itemRouter.get('/items', getAllItems);
itemRouter.get('/items/:id', getItem);

export default itemRouter;