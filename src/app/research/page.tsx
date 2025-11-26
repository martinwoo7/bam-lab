import { Metadata } from "next";
import ClientPage from "./page.client";

export const metadata: Metadata = {
  title: "Projects | BAM Lab",
  description: "Lorem ipsum",
};

const Page = () => {
  return (
    <>
      <ClientPage />
    </>
  );
};

export default Page;
