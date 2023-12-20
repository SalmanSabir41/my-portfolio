import React from "react";
import { HeadingCommon } from "../pages";

const Contact = () => {
  const contact_info = [
    {
      logo: "mail",
      text: "ss2885092@gmail.com",
    },
    {
      logo: "logo-whatsapp",
      text: "+91 870 9202 542",
    },
    {
      logo: "location",
      text: "jamia, okhla (Delhi)",
    },
  ];
  return (
    <>
      <section id="contact" className="py-19 px-3 text-white">
        <div className="text-center mt-8">
          <HeadingCommon texts={"Contact"} span={"Me"} instruc={"Get in touch"} />
          <div className="mt-16 flex md:flex-row flex-col gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto">
            <form className="flex flex-col flex-1 gap-5">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your emal address" />
              <textarea placeholder="Your message" rows="10"></textarea>
              <button className="btn-primary w-fit">Send Message</button>
            </form>
            <div className="flex flex-col gap-7">
              {contact_info?.map((info, i) => (
                <div key={i} className="flex gap-4 w-full items-center">
                  <div className="min-w-[3.5rem] text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                    <ion-icon name={info.logo}></ion-icon>
                  </div>
                  <p className="text-lg">{info.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
