import React, { useState, useEffect } from "react";
import {
  requestPermissionsAsync,
  watchPositionAsync,
  Accuracy
} from "expo-location";

const useLocation = (callback, isTracking) => {
  const [error, setError] = useState(null);
  const [sub, setSub] = useState(null);

  const startWatching = async () => {
    try {
      await requestPermissionsAsync();
      const subscriber = await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10
        },
        callback
      );
      setSub(subscriber);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    if (isTracking) {
      startWatching();
    } else {
      sub.remove();
      setSub(null);
    }
  }, [isTracking]);

  return [error];
};

export default useLocation;
