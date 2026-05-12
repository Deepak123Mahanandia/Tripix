import React, { useState, useEffect } from 'react';
import { FaMapSigns, FaPlusCircle, FaTimesCircle } from 'react-icons/fa';
import { itineraries } from '../data/itineraries.js'; // Adjust path if needed

const CustomizableItinerary = ({ destinationCityCode }) => {
    // Find the base itinerary data for the selected destination
    const baseItinerary = itineraries.find(item => item.cityCode === destinationCityCode);
    
    // State to hold the user's personalized plan
    const [myPlan, setMyPlan] = useState([]);

    // When the component loads, initialize the user's plan with the suggested itinerary
    useEffect(() => {
        if (baseItinerary) {
            const initialPlan = baseItinerary.plan.map(dayPlan => ({
                day: dayPlan.day,
                title: dayPlan.title,
                // The activities for each day is now an array, starting with the suggestion
                activities: [{ id: `base-${dayPlan.day}`, name: dayPlan.description }]
            }));
            setMyPlan(initialPlan);
        }
    }, [baseItinerary]);

    // Function to add an activity to a specific day
    const handleAddActivity = (dayIndex, activity) => {
        const updatedPlan = [...myPlan];
        // Prevent adding the same activity twice
        if (!updatedPlan[dayIndex].activities.some(a => a.id === activity.id)) {
            updatedPlan[dayIndex].activities.push(activity);
            setMyPlan(updatedPlan);
        }
    };

    // Function to remove an activity from a specific day
    const handleRemoveActivity = (dayIndex, activityId) => {
        const updatedPlan = [...myPlan];
        updatedPlan[dayIndex].activities = updatedPlan[dayIndex].activities.filter(a => a.id !== activityId);
        setMyPlan(updatedPlan);
    };

    // If no itinerary data exists for this city, render nothing
    if (!baseItinerary) {
        return null;
    }

    return (
        <div className="itinerary-container modern-ui customizable">
            <div className="page-header">
                <h3><FaMapSigns className="icon" /> Customize Your {baseItinerary.cityName} Itinerary</h3>
            </div>
            <div className="custom-itinerary-layout">
                {/* Column 1: The User's Personalized Plan */}
                <div className="my-plan-column">
                    <h4>Your 5-Day Plan</h4>
                    {myPlan.map((day, dayIndex) => (
                        <div key={day.day} className="plan-day-card">
                            <h5>Day {day.day}: {day.title}</h5>
                            <ul className="activity-list">
                                {day.activities.map(activity => (
                                    <li key={activity.id}>
                                        <span>{activity.name}</span>
                                        {/* Don't allow removing the base activity */}
                                        {activity.id.startsWith('base-') ? null : (
                                            <button onClick={() => handleRemoveActivity(dayIndex, activity.id)} className="remove-btn">
                                                <FaTimesCircle />
                                            </button>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Column 2: Available Optional Activities */}
                <div className="optional-activities-column">
                    <h4>Add Optional Activities</h4>
                    {baseItinerary.optionalActivities.map(activity => (
                        <div key={activity.id} className="activity-option-card">
                            <h6>{activity.name}</h6>
                            <p>{activity.description}</p>
                            <div className="add-to-day-buttons">
                                <span>Add to:</span>
                                {myPlan.map((day, dayIndex) => (
                                    <button key={day.day} onClick={() => handleAddActivity(dayIndex, activity)}>
                                        Day {day.day}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CustomizableItinerary;