import express from 'express';

import { 
    createTour,
    getAllTour,
    getSingleTour,
    updateTour,
    deleteTour,
    getFeaturedTours,
    getTourBySearch,
    getTourCounts 
} from '../controllers/tourController.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

// Create, update, delete routes (admin only)
router.post('/', verifyAdmin, createTour);
router.put('/:id', verifyAdmin, updateTour);
router.delete('/:id', verifyAdmin, deleteTour);

// --- GET Routes ---

// Place the most specific GET routes before the general '/:id' route.
// This route gets ALL tours.
router.get('/', getAllTour);

// These are specific search routes.
router.get('/search/getTourBySearch', getTourBySearch);
router.get('/search/getFeaturedTours', getFeaturedTours);
router.get('/search/getTourCounts', getTourCounts);

// This general, parameterized route for a SINGLE tour should be last.
router.get('/:id', getSingleTour);

export default router;