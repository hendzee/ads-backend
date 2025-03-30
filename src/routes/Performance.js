import express from 'express';
import { getAllItemsPerformance } from '../controllers/PerformanceController.js';
import authMiddleware from '../middleware/auth.js';

const performanceRouter = express.Router();

performanceRouter.get('/performance', authMiddleware, getAllItemsPerformance);

export default performanceRouter;