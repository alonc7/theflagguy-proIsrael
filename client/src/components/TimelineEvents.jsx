import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const TimelineEvents = () => {
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
      year: "1941-1945 CE",
      event:
        "The Holocaust: Six million Jews are systematically murdered by the Nazis during World War II.",
      description:
        "One of the darkest chapters in human history, the Holocaust resulted in the genocide of six million Jews, along with millions of others targeted by the Nazi regime.",
    },
    {
      year: "1947 CE",
      event: "United Nations Partition Plan for Palestine.",
      description:
        "In response to the Holocaust and growing Jewish immigration to Palestine, the United Nations proposes a partition plan that would create separate Jewish and Arab states.",
    },
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
    <div className="history col-span-12 md:col-span-6 bg-gray-200 p-8 rounded-lg">
      <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        Jewish Israeli History Timeline
      </h2>
      <VerticalTimeline>
        {events?.map((event, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#FFFFFF",
              color: "#2D3748",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #FFFFFF" }}
            date={event.year}
            iconStyle={{ background: "#4A90E2", color: "#FFFFFF" }}
          >
            <h3 className="vertical-timeline-element-title text-lg font-semibold">
              {event.event}
            </h3>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default TimelineEvents;
