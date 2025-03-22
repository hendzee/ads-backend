import express from 'express';
import { getSetting } from '../controllers/WebSettingController.js';

const settingRouter = express.Router();

settingRouter.get('/settings', getSetting);

export default settingRouter;