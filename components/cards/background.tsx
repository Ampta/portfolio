import React from "react";
import Card from "../ui/card";

export default function BackgroundCard() {
  return (
    <Card className="md:h-full" title="My Background">
      <div>
        <p className="leading-[160%] font-normal text-white/[0.4] text-[16px]">
          Originating from a humble beginning in a &nbsp;
          <span className="text-white underline">
            remote mountain village in Morocco
          </span>
          , my early years were marked by enduring harsh living conditions.
          However, fortune smiled upon me when, at the age of 7, my family
          relocated to a small city, opening doors to new opportunities. <br />
          <br />
          <span className="text-white underline">
            It was amidst this transition
          </span>
          &nbsp; that my profound fascination with &nbsp;
          <span className="text-white underline">technology</span>&nbsp; first
          took root. From those formative years, I found myself deeply immersed
          in &nbsp;
          <span className="text-white underline">the world of gaming</span>
          &nbsp; , where my passion for
          <span className="text-white underline">
            &nbsp;coding and technology&nbsp;
          </span>
          began to flourish. <br />
          <br />
          <span className="text-white italic">
            Inspired by the transformative power of technology, I strive to
            create solutions that resonate with users on a profound level,
            elevating everyday experiences into memorable and inspiring
            solutions.
          </span>
        </p>
      </div>
    </Card>
  );
}
