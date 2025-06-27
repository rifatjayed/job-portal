// import React from "react";
// import MailIcon from "../assets/gmail.svg?react";
// import FbIcon from "../assets/fb.svg?react";
// import CallIcon from "../assets/call.svg?react";
// import GoogleIcon from "../assets/google.svg?react";
// import LinkedIcon from "../assets/linkedin.svg?react";
// import UserIcon from "../assets/user.svg?react";
// import Banner from "../components/Banner";
import React from "react";
import MailIcon from "../../../assets/gmail.svg?react";
import FbIcon from "../../../assets/fb.svg?react";
import CallIcon from "../../../assets/call.svg?react";
import GoogleIcon from "../../../assets/google.svg?react";
import LinkedIcon from "../../../assets/linkedin.svg?react";
import UserIcon from "../../../assets/user.svg?react";
import Banner from "../../shared/banner/Banner";

function Contact() {
  return (
    <>
      <Banner
        title="Contact Us"
        description="Email, call, or complete the form below to let us know
your job requirements."
      />
      <div className="w-[1170px] flex justify-around">
        <div className="w-full flex gap-8">
          <div className="flex-1 flex flex-col gap-10">
            <div>
              <div className="text-[32px] font-semibold">Send Us Message</div>
              <div className="mt-8 text-gray-500">
                Send us your message. We typically reply within 24 hours. Check
                your email regularly.
              </div>
            </div>

            {/* Make form grow */}
            <form className="flex flex-1 flex-col gap-6">
              <div className="relative">
                <input
                  className="w-full p-4 pl-13 bg-gray-100"
                  type="text"
                  placeholder="Name"
                />
                <UserIcon className="absolute top-4 left-4 w-6 h-6 text-gray-500" />
              </div>
              <div className="relative">
                <input
                  className="w-full p-4 pl-13 bg-gray-100"
                  type="text"
                  placeholder="Email or Phone"
                />
                <MailIcon className="absolute top-4 left-4 w-6 h-6 text-gray-500" />
              </div>

              {/* Make textarea grow */}
              <div className="flex-1 relative">
                <textarea
                  className="w-full h-full p-4 pl-13 bg-gray-100 resize-none"
                  placeholder="Write Your Message"
                />
                <MailIcon className="absolute top-4 left-4 w-6 h-6 text-gray-500" />
              </div>
            </form>

            {/* This stays outside the form */}
            <div className="px-9 py-3 bg-blue-600 text-white rounded w-max">
              Send Message
            </div>
          </div>

          <div className="flex-1 bg-gray-100 flex flex-col gap-10 px-10 py-12.5">
            <div>
              <h1 className="text-2xl font-semibold">Get in Touch</h1>
              <p className="pt-8 text-gray-500">
                For standardized employment positions, please contact us to
                explore our capabilities and offerings.
              </p>
            </div>
            <div className="flex gap-[94px] justify-between">
              <div className="flex-1 flex flex-col gap-10">
                <div className="flex gap-3">
                  <div className="w-7 h-7 text-white rounded-full bg-blue-600 flex justify-center items-center">
                    <CallIcon className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <div className="font-semibold text-[20px]">Call Us</div>
                    <div className="mt-2 text-gray-500">+880 1716 814 563</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-7 h-7 text-white rounded-full bg-blue-600 flex justify-center items-center">
                    <CallIcon className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <div className="font-semibold text-[20px]">Call Us</div>
                    <div className="mt-2 text-gray-500">+880 1716 814 563</div>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-10">
                <div className="flex gap-3">
                  <div className="w-7 h-7 text-white rounded-full bg-blue-600 flex justify-center items-center">
                    <CallIcon className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <div className="font-semibold text-[20px]">Call Us</div>
                    <div className="mt-2 text-gray-500">+880 1716 814 563</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-7 h-7 text-white shrink-0 rounded-full bg-blue-600 flex justify-center items-center">
                    <CallIcon className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <div className="font-semibold text-[20px]">Call Us</div>
                    <div className="mt-2 text-gray-500">
                      House-74, Road-35, Sec-07, Uttara, Dhaka Bangladesh
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="text-[20] font-semibold mb-6">Follow Us On</div>
              <div className="flex gap-4">
                <div className="w-12 h-12 text-white rounded-full bg-blue-600 flex justify-center items-center">
                  <GoogleIcon className="w-8 h-8" />
                </div>
                <div className="w-12 h-12 text-white rounded-full bg-blue-600 flex justify-center items-center">
                  <FbIcon className="w-8 h-8" />
                </div>
                <div className="w-12 h-12 text-white rounded-full bg-blue-600 flex justify-center items-center">
                  <LinkedIcon className="w-8 h-8" />
                </div>
                <div className="w-12 h-12 text-white rounded-full bg-blue-600 flex justify-center items-center">
                  <LinkedIcon className="w-8 h-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
