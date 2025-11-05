import { Metadata } from "next";

import ClientPage from "./page.client";

export const metadata: Metadata = {
  title: "Our People | BAM Lab",
  description: "Lorem ipsum",
};

const PeoplePage = () => {
  return (
    <>
      <ClientPage />
    </>
  );
};

export default PeoplePage;
