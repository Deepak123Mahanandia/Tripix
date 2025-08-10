import express from 'express';

import {
    deleteUser,
    getAllUser,
    getSingleUser,
    updateUser,
} from '../controllers/userControllers.js';
const router = express.Router();

import { verifyUser } from '../utils/verifyToken.js';


// update a user
router.put('/:id', verifyUser, updateUser);

// delete a user
router.delete('/:id', verifyUser, deleteUser);

// get a single user
router.get('/:id', verifyUser, getSingleUser);

// get all user
router.get('/', verifyUser, getAllUser);

export default router;
