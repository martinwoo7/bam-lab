import { getPublications } from "@/lib/utils";
import ClientPage from "./page.client";

const Page = async () => {
  const publications = await getPublications();

  return (
    <>
      <ClientPage publications={publications} />
    </>
  );
};

export default Page;
