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


router.post('/', verifyAdmin, createTour);
router.put('/:id', verifyAdmin, updateTour);
router.delete('/:id', verifyAdmin, deleteTour);



router.get('/', getAllTour);


router.get('/search/getTourBySearch', getTourBySearch);
router.get('/search/getFeaturedTours', getFeaturedTours);
router.get('/search/getTourCounts', getTourCounts);


router.get('/:id', getSingleTour);

export default router;