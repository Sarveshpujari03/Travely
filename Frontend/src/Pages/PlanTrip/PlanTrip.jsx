import React, { useState } from 'react';
import { planTrip } from '../../API/Index.js';
import ReactMarkdown from 'react-markdown';
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
  const [response, setResponse] = useState(null);
  const [submitdata, setsubmitdata] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    setsubmitdata(formData);
    const res = await planTrip({
      destination: formData.destination,
      Startdate: formData.startDate,
      EndDate: formData.endDate,
      travellers: formData.travelers,
      budget: formData.budget,
    });
    setResponse(res);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-yellow-100 py-10 px-4 flex flex-col lg:flex-row items-center justify-center gap-10">
      {/* Form Card */}
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl p-8 transition-all duration-300 hover:scale-[1.01]">
        <h2 className="text-4xl font-bold text-center text-orange-600 mb-8">
          Plan Your Dream Trip ✈️
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Destination</label>
            <input
              type="text"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
              placeholder="e.g., Paris, Bali..."
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Start Date</label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">End Date</label>
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Travelers</label>
              <input
                type="number"
                name="travelers"
                value={formData.travelers}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                min="1"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Budget (USD)</label>
              <input
                type="number"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                min="0"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white font-semibold py-3 rounded-lg hover:bg-orange-600 transition"
          >
            Submit Trip Plan
          </button>
        </form>

        {submitdata && (
          <div className="mt-6 p-4 bg-orange-50 border border-orange-300 rounded-lg text-sm">
            <h3 className="text-xl font-semibold text-orange-600 mb-2">Your Trip Details:</h3>
            <p><strong>Destination:</strong> {submitdata.destination}</p>
            <p><strong>Start Date:</strong> {submitdata.startDate}</p>
            <p><strong>End Date:</strong> {submitdata.endDate}</p>
            <p><strong>Travelers:</strong> {submitdata.travelers}</p>
            <p><strong>Budget:</strong> ${submitdata.budget}</p>
          </div>
        )}
      </div>

      {/* Response Section */}
      {response ? (
        <div className="w-full max-w-lg bg-white p-6 rounded-2xl shadow-xl overflow-y-auto max-h-[75vh] transition hover:scale-[1.01]">
          <h3 className="text-xl font-bold text-orange-600 mb-4">AI Trip Suggestion:</h3>
          <div className="prose prose-sm">
            <ReactMarkdown>{response.data.data}</ReactMarkdown>
          </div>
          <p className="mt-4 text-center font-medium text-green-600">
            {response.success
              ? 'Trip planned successfully! ✅'
              : 'Failed to plan your trip. ❌ Please try again.'}
          </p>
          <div className="flex justify-center mt-4">
            <Button className="bg-orange-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-orange-600 transition">
              Add Trip
            </Button>
          </div>
        </div>
      ) : (
        <div className="w-full max-w-lg bg-white p-6 rounded-2xl shadow-xl text-center text-gray-700">
          <h3 className="text-xl font-bold text-orange-500 mb-2">Welcome to PlanTrip!</h3>
          <p>
            Plan your dream adventure with our AI-powered planner. Get personalized trip ideas and
            itineraries tailored just for you.
          </p>
        </div>
      )}
    </div>
  );
}

export default PlanTrip;
