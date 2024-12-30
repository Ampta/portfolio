import { FC, ReactNode } from "react";
import Button from "../ui/button";

interface ContactCardProps {
  title: string;
  icon: ReactNode;
  text: string;
  btnText: string;
  email?: string;
}

const ContactCard: FC<ContactCardProps> = ({ title, icon, text, btnText, email }) => {

  const handleEmailClick = () => {
    // Detect if the user is using Google Chrome
    const isChrome = /chrome/i.test(navigator.userAgent);

    if (isChrome) {
      // Open Gmail in a new tab if the user is on Chrome
      window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`, "_blank");
    } else {
      // Otherwise, open the default email client in a new tab
      window.open(`mailto:${email}`, "_blank");
    }
  };

  return (
    <div className="bg-primary-background border border-border rounded-lg relative overflow-hidden py-5 pl-[25px] shadow-md">
      <div className="z-20 flex flex-col gap-8 justify-between items-start ">
        {/* Header */}
        <div className="flex items-center gap-x-2">
          <span className="bg-white w-8 h-8 rounded-lg grid place-items-center">
            {icon}
          </span>
          <h1>{title}</h1>
        </div>
        {/* Body text */}
        <div>
          <h2 className="font-bold text-2xl">{text}</h2>
        </div>
        <Button className="!w-24" onClick={handleEmailClick}>
          {btnText}
        </Button>
      </div>
    </div>
  );
};

export default ContactCard;
