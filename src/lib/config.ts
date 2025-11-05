export const siteConfig = {
  name: "BAM Lab",
  url: "",
  ogImage: "",
  description:
    "Big Data and Analytics Laboratory at Queen's University in Kingston, Ontario, Canada.",
  navItems: [
    { href: "/director", label: "Director" },
    {
      href: "/people",
      label: "People",
    },
    {
      href: "/publications",
      label: "Publications",
    },
    {
      href: "/projects",
      label: "Projects",
    },
    {
      href: "/research-tools",
      label: "Research Tools",
    },
    {
      href: "/wiki",
      label: "Wiki",
    },
  ],
  links: {
    website:
      "https://www.calicode.dev/?utm_source=bam_lab&utm_medium=web&utm_campaign=footer_cta",
  },
};

export const notableVenues: string[] = [
  "NeurIPS",
  "ICML",
  "ICLR",
  "CVPR",
  "ACL",
  "AAAI",
  "IJCAI",
  "Nature",
  "Science",
];

export const farhanaAwards: { year: number; name: string }[] = [
  {
    year: 2024,
    name: "Fellow, Association for Computing Machinery (ACM)",
  },
  {
    year: 2023,
    name: "Best Paper Award, NeurIPS Conference",
  },
  {
    year: 2020,
    name: "Outstanding Faculty Research Award, University Name",
  },
  {
    year: 2015,
    name: "Sloan Research Fellowship",
  },
];

interface Conferences {
  title: string;
  workshop?: string;
  workshop_url?: string;
  conference: string;
  conference_url: string;
  date: string;
  location: string;
}
export const farhanaConferences: Conferences[] = [
  {
    title: "Workshop Chair",
    workshop: "Internet of Things in Healthcare Data Analytics (IoTHDA)",
    workshop_url: "https://cs-conferences.acadiau.ca/icth-25/workshops.html",
    conference:
      "International Conference on Current and Future Trends in Information and Communication Technologies in Healthcare (ICTH)",
    conference_url: "https://cs-conferences.acadiau.ca/icth-25/",
    date: "October 28-30, 2025",
    location: "Istanbul, Turkey",
  },
  {
    title: "Track Chair",
    workshop: "Big Data and Analytics",
    workshop_url: "https://cs-conferences.acadiau.ca/ant-25/#workshop",
    conference:
      "16th International Conference on Ambient Systems, Networks and Technologies (ANT)",
    conference_url: "https://cs-conferences.acadiau.ca/ant-25/",
    date: "April 22-24, 2025",
    location: "Patras, Greece",
  },
  {
    title: "Program Chair",
    conference:
      "Canadian Artificial Intelligence Association (CAIAC) Conference",
    conference_url: "https://www.caiac.ca/en/conferences/canadianai-2023/home",
    date: "June 5-9, 2023",
    location: "Montreal, Canada",
  },
  {
    title: "Program Chair",
    conference: "IEEE International Conference on Digital Health (ICDH)",
    conference_url: "https://conferences.computer.org/services/2021/",
    date: "September 5-11, 2021",
    location: "Barcelona, Spain",
  },
  {
    title: "Program Chair",
    conference: "IBM International Conference CASCON X EVOKE",
    conference_url: "http://www.cascon.ca",
    date: "November 22-26, 2021",
    location: "Toronto, Canada",
  },
];

export const farhanaMembership = [
  "Canadian Artificial Intelligence Association (CAIAC)",
  "Queen's Conflicts Analytics Lab Expert Member",
  "SOSCIP Scientific Advisory Committee",
  "Professional Engineers of Ontario (PEO)",
  "IEEE Computer Society",
  "INSTICC",
];
