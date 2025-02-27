import React from "react";
import { useDispatch } from "react-redux";
import { placesVisitActions } from "../../../Slices/placesVisitSlice";

const places = [
  {
    name: "Mumbai",
  },
  {
    name: "Pune",
  },
  {
    name: "Nashik",
  },
  {
    name: "Nagpur",
  },
];

const Place = ({ place }) => {
  const dispatch = useDispatch();
  const handleMarkVisit = (place) => {
    console.log("clicked");
    dispatch(placesVisitActions.markVisit(place));
  };

  return (
    <li className="flex gap-1">
      <p>{place.name}</p>
      <button onClick={() => handleMarkVisit(place.name)}>visited</button>
    </li>
  );
};

const PlacesToVisit = () => {
  return (
    <div>
      <ul>
        {places.map((place) => {
          return <Place key={place.name} place={place} />;
        })}
      </ul>
    </div>
  );
};
// const places = [
//   {
//     placeid: 1,
//     name: "Place 1",
//     photo: "Photo",
//     address: "ABC streets",
//     distance: 20,
//   },
//   {
//     placeid: 2,
//     name: "Place 2",
//     photo: "Photo",
//     address: "ABC streets",
//     distance: 22,
//   },
//   {
//     placeid: 3,
//     name: "Place 3",
//     photo: "Photo",
//     address: "ABC streets",
//     distance: 10,
//   },
//   {
//     placeid: 4,
//     name: "Place 4",
//     photo: "Photo",
//     address: "ABC streets",
//     distance: 5,
//   },
// ];

// const PlacesToVisit = () => {
//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
//       <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
//         Places To Visit
//       </h1>
//       <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {places.map((place) => (
//           <li
//             key={place.name}
//             className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
//           >
//             <div className="aspect-video overflow-hidden">
//               <p className="h-full w-full object-cover">{place.photo}</p>
//             </div>

//             <div className="p-4 space-y-2">
//               <h2 className="text-xl font-semibold text-gray-800 mb-2">
//                 {place.name}
//               </h2>

//               <p className="text-gray-600 text-sm flex items-center">
//                 <span className="font-medium mr-1">Address:</span>
//                 {place.address}
//               </p>

//               <p className="text-gray-600 text-sm flex items-center">
//                 <span className="font-medium mr-1">Distance:</span>
//                 <span className="text-blue-600">{place.distance} km</span>
//               </p>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

export default PlacesToVisit;
