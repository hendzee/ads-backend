import mongoose  from 'mongoose';

// DEFINE SCHEMA
const performanceSchema = new mongoose.Schema({
    itemId: { type: String, required: true, unique: true },
    totalViews: { type: Number, default: 0 },
    totalClickBuy: { type: Number, default: 0 },
})

// CREATE MODEL
const Performance = mongoose.model('Performance', performanceSchema);

export default Performance;

 