import React from "react";

const days = [
  {
    dayno: 1,
    dayName: "Monday",
    visit: "Place 01",
    time: "10:00",
    date: "06-04-2026",
    status: "Done",
    activity: "do this do that do this do that",
  },
  {
    dayno: 2,
    dayName: "TuesDay",
    visit: "Place 02",
    time: "10:30",
    date: "07-04-2026",
    status: "Done",
    activity: "do this do that do this do that",
  },
  {
    dayno: 3,
    dayName: "Wednesday",
    visit: "Place 03",
    time: "12:00",
    date: "08-04-2026",
    status: "Done",
    activity: "do this do that do this do that",
  },
];

const TripSchedule = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Trip Schedule
      </h1>
      <ul className="space-y-6">
        {days.map((day) => (
          <li className="bg-gray-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <h2 className="text-lg font-semibold text-gray-700">
                  Day {day.dayno}
                </h2>
                <h2 className="text-lg text-gray-600">{day.dayName}</h2>
              </div>

              <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
                <h2 className="text-lg font-medium text-gray-700">
                  {day.visit}
                </h2>
                <h2 className="text-sm text-gray-600">{day.time}</h2>
                <h2 className="text-sm text-gray-600">{day.date}</h2>
              </div>

              <h2
                className={`text-sm font-medium rounded-full px-3 py-1 text-center w-fit
            ${
              day.status === "Completed"
                ? "bg-green-100 text-green-800"
                : day.status === "Pending"
                ? "bg-yellow-100 text-yellow-800"
                : "bg-gray-100 text-gray-800"
            }`}
              >
                {day.status}
              </h2>
            </div>

            <p className="mt-3 text-gray-600 leading-relaxed">{day.activity}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TripSchedule;
