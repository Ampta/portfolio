import React from "react";
import Card from "../ui/card";
import { Timeline, TimelineItem } from "../ui/timeline";

export default function EducationCard() {
  return (
    <Card title="My Education">
      <Timeline>
        {educationsData.map((education, i) => (
          <TimelineItem
            key={i}
            date={education.date}
            title={education.title}
            subTitle={education.subTitle}
          ></TimelineItem>
        ))}
      </Timeline>
    </Card>
  );
}

const educationsData = [
  {
    date: "2017 — 2020",
    title: "Math & Computer science major",
    subTitle: "FPL",
  },
  {
    date: "2012 — 2016",
    title: "Maths baccalaureate",
    subTitle: "Errachidi school",
  },
];
