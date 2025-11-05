import { Metadata } from "next";
import ClientPage from "./page.client";

export const metadata: Metadata = {
  title: "Contact Us | BAM Lab | Queen's University",
  description: "Lorem ipsum",
};

const ContactPage = () => {
  return (
    <>
      <ClientPage />
    </>
  );
};

export default ContactPage;
