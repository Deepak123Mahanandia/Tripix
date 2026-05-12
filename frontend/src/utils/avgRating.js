const calculateAvgRating = reviews => {
    
    // Calculate the total sum of all ratings
    const totalRating = reviews?.reduce((acc, item) => acc + item.rating, 0);
    
    // Get the number of reviews
    const reviewCount = reviews?.length;

    // Calculate the average rating. 
    // If there are no reviews, the average is 0.
    // Otherwise, calculate the average and fix it to one decimal place.
    const avgRating = reviewCount === 0 
        ? 0 
        : (totalRating / reviewCount).toFixed(1);

    return {
        totalRating,
        avgRating
    };
};

export default calculateAvgRating;