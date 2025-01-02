import { FC } from "react";
import SvgCurve from "../visualEffects/svg-curve";
import { HeadingAnimatedSvg } from "./heading-animated-svg";

interface HeadingProps {
  number: string;
  title_1: string;
  title_2: string;
}

const Heading: FC<HeadingProps> = ({ number, title_1, title_2 }) => {
  return (
    <div className="relative my-6 lg:my-10 px-4 lg:px-8 z-20">
      {/* Number */}
      <div className="outline-none flex flex-col justify-start shrink-0 opacity-50 transform -top-32 2xl:-top-24 w-[71px] flex-none h-auto left-4 lg:left-12 absolute whitespace-pre">
        <h2 className="font-pixel text-[180px] text-center text-primary-foreground relative ">
          <span className="bottom-fade bg-clip-text text-transparent p-4">
            {number}
          </span>
        </h2>
      </div>

      {/* Heading text wrapper  */}
      <div className="flex  items-center flex-wrap flex-none min-h-min overflow-hidden p-0 w-full font-oswald">
        <p className="text-[17vw] lg:text-[12vw] leading-[100%] text-primary-foreground mr-3 break-words">
          {title_1}
        </p>
        <HeadingAnimatedSvg text="Learn more about our featured projects"/>
        <p className="text-[17vw] lg:text-[12vw] leading-[100%] text-primary-foreground italic break-words">
          {title_2}
        </p>
      </div>

      {/* Svg curve */}
      <SvgCurve />
    </div>
  );
};

export default Heading;
