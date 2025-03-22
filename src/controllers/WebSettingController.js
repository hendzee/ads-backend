import WebSetting from "../models/WebSetting.js";

// GET SETTING
const getSetting = async (req, res) => {
    try {
        const settings = await WebSetting.find();

        if (settings && settings.length) {
            res.status(200).json({ settings: settings[0] });
            return;
        }
        
        res.status(200).json({ settings: null });
    } catch (error) {
        res.status(500).json({ message: 'Cannot get settings' });
    }
}

// CREATE DUMMY SETTING
const createDummySetting = async (req, res) => {
    try {
        const dummyItems = { banner: 'http://localhost:3000/images/item1.png' }
        const dummySetting = { banner: 'http://localhost:3000/images/banner.png' }

        await WebSetting.insertMany(dummyItems);
        await WebSetting.insertMany(dummySetting);
    } catch (error) {
        
    }
}

export { getSetting, createDummySetting }