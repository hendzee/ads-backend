import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import itemRouter from './src/routes/Item.js';
import adminRouter from './src/routes/Admin.js';
import performanceRouter from './src/routes/Performance.js';

import { createDummyData } from './src/controllers/ItemController.js';
import settingRouter from './src/routes/WebSetting.js';
import { createDummySetting } from './src/controllers/WebSettingController.js';
import { createDummyAdmin } from './src/controllers/AdminController.js';

const app = express();
const PORT = 3000;


mongoose
  .connect("mongodb://127.0.0.1:27017/ads_database", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected ✅"))
  .catch((err) => console.error("MongoDB Connection Error ❌", err));

// Enable CORS for all routes
app.use(cors());

app.use(express.static('public'));

app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// UNCOMMENT TO CREATING DUMMY ADMIN
// createDummyAdmin();

// UNCOMMENT TO CREATING DUMMY DATA
// createDummyData();

// UNCOMMENT TO CREATE DUUMY SETTING
// createDummySetting()

app.use('/api', itemRouter);
app.use('/api', performanceRouter);
app.use('/api', settingRouter);
app.use('/api', adminRouter);


app.listen(PORT, () => {
    console.log('SERVER IS RUNNING ON PORT' + PORT);
})