import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page ",
  description: "About Page ",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Us"
        description="Welcome to our Learning Management System, where we are dedicated to enhancing education through innovative technology. Our platform is designed to provide educators and learners with the tools they need to succeed in the digital age.

        With a focus on interactive learning, seamless communication, and progress tracking, we aim to create an engaging and effective educational experience. Join us in transforming the way education is delivered and experienced.
        
        "
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
