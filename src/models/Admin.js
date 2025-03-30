import mongoose  from 'mongoose';

// DEFINE SCHEMA
const adminSchema = new mongoose.Schema({
    name: { type: String, default: null },
    username: { type: String, default: null },
    password: { type: String, default: null },
})

// CREATE MODEL
const Admin = mongoose.model('Admin', adminSchema);

export default Admin;

 