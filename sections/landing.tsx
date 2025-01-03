import Header from "@/components/navigation/header/header";
import FancyButton from "@/components/ui/fancy-button";
import LiveClock from "@/components/ui/live-clock";
import ScrollDown from "@/components/ui/scroll-down";
import MagneticWrapper from "@/components/visualEffects/magnetic-wrapper";
import { FaArrowRight } from "react-icons/fa";

export default function LandingSection() {

  const scrollToSection = (sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <div className="relative h-screen overflow-hidden p-8">

      <div className="flex justify-between items-center w-full z-10">
        <Header />
        {/* Show magnetic fancy button on small screens and hide it on md screen */}
        <div className="absolute left-10 z-10 bottom-24 sm:bottom-36 md:hidden">
          <MagneticWrapper>
            <FancyButton text="Let's talk" icon={<FaArrowRight />} />
          </MagneticWrapper>
        </div>
      </div>

      <div className="absolute top-1/3 sm:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 leading-[14vw] lg:leading-[10vw] 2xl:leading-[9rem] font-medium h-[20rem] tracking-[-0.3rem] flex flex-col justify-center items-center text-primary-foreground text-[18vw] lg:text-[14vw] 2xl:text-[12rem] uppercase">
        <div>
          <span>Code</span>
        </div>
        <div>
          <span>Crafting</span>
        </div>
        <div className="relative">
          <span>Brilliance</span>
          {/* <div className="text-[1rem] leading-[1.4rem] tracking-[-0.07rem] absolute top-[14vw] lg:top-[10vw] 2xl:top-[9rem] left-0 2xl:left-[57rem] w-[30rem] uppercase font-normal">
            <span>Igniting Innovation</span>
            <br />
            <span>through Elegant Code</span>
            <br />
            <span>Where challenges spark creativity</span>
            <br />
            <span>Ideas into Scalable, Impactful Systems.</span>
          </div> */}
        </div>
      </div>


      {/* Magnetic Scroll Down and Live Clock in the same row */}
      {/* <div className="absolute bottom-[8rem] md:bottom-[4rem] 2xl:-bottom-10">
        <MagnetciWrapper className="left-1/2 -translate-x-1/2">
          <ScrollDown />
        </MagnetciWrapper>
        <div className="right-10 bottom-10">
          <LiveClock timezone="india/kolkata" />
        </div>
      </div> */}

      {/*Magentic scroll down*/}
      <MagneticWrapper targetSectionId="about-section" className="absolute left-1/2 -translate-x-1/2 bottom-[8rem] md:bottom-[4rem] 2xl:-bottom-10 ">
        <ScrollDown />
      </MagneticWrapper>

      <div className="absolute right-10 bottom-10">
        <LiveClock timezone="india/kolkata" />
      </div>


    </div>
  );
}
