import React from "react";
import Card from "../ui/card";
import Image from "next/image";
import SignatureImg from "@/public/assets/images/signature2.png";
import Button from "../ui/button";
import { FaDownload } from "react-icons/fa";
import Socials from "../ui/socials";



export default function ResumeCard() {

  function handleResumeDownload() {
    const googleDriveLink = "https://drive.google.com/uc?id=1xVv8u2bk-XOldwsweMHZpBzMI74Z9kez&export=download";
    window.location.href = googleDriveLink;
  }

  return (
    <Card className="md:h-full">

      <p className="text-lg xl:text-2xl font-medium text-primary-foreground">
        Java developer and backend specialist, ready to turn challenges into seamless 
        solutions. With expertise in crafting secure payment systems, modular APIs, and 
        scalable web applications, my toolbox includes Spring Boot, Redis, MySQL, and AWS. 
        Recognized as a STAR Performer, I thrive on precision, innovation, and 
        problem-solving. Let&apos;s code your vision into reality and build a future 
        full of possibilities! 🚀✨
      </p>


      {/* Signature */}
      <div>
        <Image src={SignatureImg} alt="Shivam Signature" />
      </div>

      {/* Social and resume button download */}
      <div className="flex items-center justify-between md:absolute md:bottom-6 md:left-6 md:w-[calc(100%-48px)]">
        {/* Socials */}
        <Socials />

      {/* Resume Button */}
      <Button onClick={handleResumeDownload}>
        <FaDownload />
        Resume
      </Button>
      </div>
    </Card>
  );
}
