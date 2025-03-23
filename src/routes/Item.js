import express from 'express';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from "url";

// Fix __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const uploadDir = path.join(__dirname,'../../', "public/images");

import { 
    addItem,
    editItem,
    getAllItems, 
    getItem } from '../controllers/ItemController.js';

const itemRouter = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({ storage: storage });

itemRouter.get('/items', getAllItems);
itemRouter.get('/items/:id', getItem);
itemRouter.post('/items', upload.array('images'), addItem);
itemRouter.put('/items/:id', upload.array('images'), editItem);

export default itemRouter;