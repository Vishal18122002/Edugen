import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page",
  description: "TContact Page",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description="We're here to assist you with any questions or support you may need. Reach out to us and let us know how we can help enhance your learning experien."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
