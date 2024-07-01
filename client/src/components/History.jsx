import React from "react";

import "react-vertical-timeline-component/style.min.css";
import TimelineEvents from "./TimelineEvents";

const History = () => {
  // Define historical events
  const events = [
    {
      year: "c. 2000 BCE",
      event: "Abraham, the patriarch of Judaism, is born.",
    },
    { year: "c. 1250 BCE", event: "Moses leads the Israelites out of Egypt." },
    {
      year: "c. 1000 BCE",
      event: "King David establishes Jerusalem as the capital of Israel.",
    },
    {
      year: "c. 960 BCE",
      event: "King Solomon builds the First Temple in Jerusalem.",
    },
    {
      year: "586 BCE",
      event: "Destruction of the First Temple by the Babylonians.",
    },
    {
      year: "c. 515 BCE",
      event: "Rebuilding of the Second Temple in Jerusalem.",
    },
    { year: "70 CE", event: "Destruction of the Second Temple by the Romans." },
    { year: "1948 CE", event: "State of Israel is established." },
    {
      year: "1967 CE",
      event:
        "Six-Day War: Israel gains control of Jerusalem and the West Bank.",
    },
    { year: "1979 CE", event: "Egypt and Israel sign the Camp David Accords." },
    {
      year: "1993 CE",
      event: "Oslo Accords: Israel and the PLO sign a peace agreement.",
    },
    {
      year: "2024 CE",
      event: "Recent event related to Jewish Israeli people.",
    },
  ];
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-12 gap-4">
        <TimelineEvents />
        {/* Example of other data/component */}
        <div className="bg-white p-4 rounded-lg shadow-md md:col-span-6">
          {/* Your other data/component content */}
          <h2 className="text-xl font-bold mb-4">Other Data/Component</h2>
          {/* Add more content as needed */}
        </div>
        {/* Render the History component */}
      </div>
    </div>
  );
};

export default History;
