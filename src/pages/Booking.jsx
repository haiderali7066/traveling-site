import React from "react";

const BookingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-green-600 text-white py-6 text-center">
        <h1 className="text-3xl font-bold">3 Days Trip to Dudipatsar Lake</h1>
        <p className="mt-2 text-lg">
          Experience the natural beauty of Pakistan
        </p>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-10 px-4">
        {/* Tour Details */}
        <section className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Tour Details</h2>
          <ul className="space-y-2">
            <li>
              <strong>Duration:</strong> 4 days (3 nights)
            </li>
            <li>
              <strong>Availability:</strong> June 1 - October 30
            </li>
            <li>
              <strong>Departure & Return:</strong> Lahore / Islamabad
            </li>
            <li>
              <strong>Departure Time:</strong> 10:30 PM
            </li>
          </ul>
        </section>

        {/* Pricing */}
        <section className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Price Includes</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Complete tour management with a dedicated guide</li>
            <li>Travel on dedicated transport (Hiace)</li>
            <li>Accommodation in camps (3 to 4 person sharing)</li>
            <li>Quality food serving (2 meals per day)</li>
            <li>Refreshments during travel</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-4">Price Excludes</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Porters for carrying personal equipment</li>
            <li>Extra expenses due to natural acts or political reasons</li>
            <li>Personal insurance and medical expenses</li>
          </ul>
        </section>

        {/* Itinerary */}
        <section className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Itinerary</h2>
          <ol className="list-decimal pl-5 space-y-4">
            <li>
              <strong>Day 0:</strong> Departure from Lahore
            </li>
            <li>
              <strong>Day 1:</strong> Arrival in Islamabad; breakfast in Naran;
              overnight stay in Besal
            </li>
            <li>
              <strong>Day 2:</strong> Hiking to Mulla ki Basti; overnight stay
              in Mulla ki Basti
            </li>
            <li>
              <strong>Day 3:</strong> Hike to Dudipatsar Lake; return to Mulla
              ki Basti
            </li>
            <li>
              <strong>Day 4:</strong> Return to Lahore via Besal
            </li>
          </ol>
        </section>

        {/* Booking Form */}
        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Book Your Trip</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="participants" className="block text-gray-700">
                Number of Participants
              </label>
              <input
                type="number"
                id="participants"
                className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                placeholder="Enter number of participants"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700">
                Additional Notes
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                placeholder="Enter any additional details"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
            >
              Book Now
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default BookingPage;
