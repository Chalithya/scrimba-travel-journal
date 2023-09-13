import React from "react";
import Header from "./components/Header";
import Trip from "./components/Trip";
import TripsData from "./data";

export default function App() {
  const trips = TripsData.map((trip) => {
    return (
      <Trip
        title={trip.title}
        location={trip.location}
        googleMaps={trip.googleMapsUrl}
        startDate={trip.startDate}
        endDate={trip.endDate}
        description={trip.description}
        imageUrl={trip.imageUrl}
      />
    );
  });

  return (
    <main>
      <Header />
      <div className="trips">{trips}</div>
    </main>
  );
}
