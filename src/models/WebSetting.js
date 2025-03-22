import mongoose from "mongoose";

const webSettingSchema = new mongoose.Schema({
    banner: { type: String, default: null }
})

// CREATE MODEL
const WebSetting = mongoose.model('WebSetting', webSettingSchema);

export default WebSetting;