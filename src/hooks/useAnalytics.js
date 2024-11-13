// hooks/useAnalytics.js
import { useEffect } from 'react';

const useAnalytics = (eventName, data) => {
  useEffect(() => {
    // Replace with actual analytics logic
    console.log(`Event: ${eventName}`, data);
  }, [eventName, data]);
};

export default useAnalytics;