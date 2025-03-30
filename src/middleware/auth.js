import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config.js";

// Middleware function to verify JWT token
const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization"); // Get token from headers

  if (!token) {
    return res.status(401).json({ message: "Access Denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    
    req.admin = decoded;
    
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid or expired token." });
  }
};

export default authMiddleware;