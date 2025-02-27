import React, { useState } from 'react';
import {planTrip} from '../../API/Index.js' 
import ReactMarkDown from 'react-markdown'
import Button from '../../Components/Common/Button/Button.jsx';

function PlanTrip() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    destination: '',
    startDate: '',
    endDate: '',
    travelers: 0,
    budget: '',
  });
  const [response , setResponse] = useState(null);

  const [submitdata, setsubmitdata] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async  (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    setsubmitdata(formData);
    const res = await planTrip({destination: formData.destination, Startdate: formData.startDate, EndDate: formData.endDate, travellers: formData.travelers, budget: formData.budget});
    setResponse(res);
    console.log(response.data.data)
    
  };

  return (
    <div className="h-screen bg-orange-100 flex items-center gap-5 justify-center py-10">
     
      <div className="min-h-10 w-full max-w-lg bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-4xl font-extrabold text-center text-orange-600 mb-6">
          Plan Your Dream Trip
        </h2>
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
            <label className="block text-gray-800 font-bold mb-2">Destination</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 "
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              placeholder="Where do you want to go?"
              required
            />
          </div>

          <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Start Date:</label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">End Date:</label>
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
        </div>
        <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Number of Travelers:</label>
            <input
              type="number"
              name="travelers"
              value={formData.travelers}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              min="1"
              placeholder="Enter number of travelers"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Budget (in USD):</label>
            <input
              type="number"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              min="0"
              placeholder="Enter your budget"
              required
            />
          </div>
        </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white font-bold py-3 rounded-md hover:bg-orange-600 transition duration-300"
          >Submit
          </button>

          {submitdata && (
      <div className='w-full max-w-lg bg-white rounded-lg shadow-lg p-6 mt-6'>
        <h3 className='text-2xl font-bold text-orange-600 mb-4 text-center'>Your Trip Details</h3>
        <p><strong>Destination : </strong>{submitdata.destination}</p>
        <p><strong>Start Date : </strong>{submitdata.startDate}</p>
        <p><strong>End Date : </strong>{submitdata.endDate}</p>
        <p><strong>Number of Travelers : </strong>{submitdata.travelers}</p>
        <p><strong>Budget (in USD) : </strong>{submitdata.budget}</p>
      </div>
    )}
          </form>
      </div>
    
    {
        
        response && (
            <div className='w-full items-center max-w-lg bg-white flex flex-col gap-8 max-h-full overflow-y-scroll rounded-lg shadow-lg p-4'>
            <ReactMarkDown>{response.data.data}</ReactMarkDown>
            {!response.success && <p>Your trip has been successfully planned.</p>}
            {response.success && <p>Failed to plan your trip. Please try again.</p>}
            <Button className="bg-orange-500 text-white font-semibold pt-2 pb-2 rounded-xl w-[95px] pl-1 pr-1">Add Trip</Button>
          </div>
        )
    }

    {

        !response && (
          <p className='w-full max-w-lg bg-white max-h-full overflow-hidden rounded-lg shadow-lg p-6 '>Welcome to PlanTrip, the ultimate travel planning app. Plan your dream trip with ease.</p>
        )


    }
      
    </div>
  );
}

export default PlanTrip;

