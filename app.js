import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import itemRouter from './src/routes/Item.js';
import { createDummyData } from './src/controllers/ItemController.js';
import settingRouter from './src/routes/WebSetting.js';
import { createDummySetting } from './src/controllers/WebSettingController.js';

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

// UNCOMMENT TO CREATING DUMMY DATA
// createDummyData();

// UNCOMMENT TO CREATE DUUMY SETTING
// createDummySetting()

app.use('/api', itemRouter);
app.use('/api', settingRouter);


app.listen(PORT, () => {
    console.log('SERVER IS RUNNING ON PORT' + PORT);
})