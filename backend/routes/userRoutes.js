import express from 'express';
const router = express.Router();
import { registerUser, loginUser, getUserProfile, getUsers } from '../controllers/userController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', protect, getUserProfile);
router.get('/', protect, admin, getUsers); 
// routes/userRoutes.js
router.post('/login', loginUser);// Add this line

export default router;