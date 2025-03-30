import { JWT_SECRET } from '../config.js';
import Admin from '../models/Admin.js';
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const createDummyAdmin = async () => {
    const name = 'Virginia Hendrdas';
    const username = 'hendras@adminhmm.com'
    const password = 'nopassword867';
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        await Admin.insertOne({
            name: name,
            username: username,
            password: hashedPassword,
        });

        console.log('DUMMY ADMIN CREATED');
    } catch (err) {
        console.log(err);
    }
}

const login = async(req, res) => {
    try {
        const { username, password } = req.body;
    
        let admin = await Admin.findOne({ username }).lean();
        
        if (!admin) return res.status(400).json({ message: "User not found" });
    
        const isMatch = await bcrypt.compare(password, admin.password);
        
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });
    
        const token = jwt.sign({ userId: admin._id }, JWT_SECRET, { expiresIn: "1h" });

        admin.token = token;

        res.status(200).json({ admin: admin });
    } catch (error) {
        res.status(500).json({ message: 'There is something wrong' });
    }
}

export {
    createDummyAdmin,
    login
}