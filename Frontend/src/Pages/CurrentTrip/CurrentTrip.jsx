import React from "react";
import PlacesToVisit from "./PlacesToVisit/PlacesToVisit";
import TripSchedule from "./TripSchedule/TripSchedule";

const CurrentTrip = () => {
  return (
    <div className="flex gap-10">
      <PlacesToVisit />
      <TripSchedule />
    </div>
  );
};

export default CurrentTrip;
