import ContactCard from "@/components/cards/contact";
import Heading from "@/components/heading/heading";
import Card from "@/components/ui/card";
import { FaPhoneVolume } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function ContactSection() {

  return (
    <div className="pt-24 px-3 lg:px-8">
      <Heading number="03" title_1="Contact" title_2="Me" />
      <Card>
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-3">
          {/* Contact cards */}
          <div className="flex flex-col gap-8">
            <ContactCard
              title="Call us directly at"
              icon={<FaPhoneVolume className="fill-[#333] text-lg" />}
              text="7700-089-592"
              btnText="Call Us"
            />

            <ContactCard
              title="Email Me"
              icon={<MdEmail className="fill-[#333] text-lg" />}
              text="ampta77000@gmail.com"
              btnText="Email Us"
              email="ampta77000@gmail.com"
            />
          </div>
          {/* Contact forms  */}
        </div>
      </Card>
    </div>
  );
}
