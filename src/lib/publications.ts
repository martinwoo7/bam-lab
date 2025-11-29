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

export interface PublicationProps {
  year: number;
  title: string;
  authors: string[];
  venue: string;
  type: "Journal" | "Conference" | "Workshop" | "Book";
  award?: string;
  abstract?: string;
  link: string;
}

export const Publications: PublicationProps[] = [
  {
    year: 2021,
    title:
      "Natural Language Processing of Large-Scale Structured Radiology Reports to Identify Oncologic Patients With or Without Splenomegaly over a Ten-Year Period",
    authors: [
      "Sun, S.",
      "Lupton, K.",
      "Batch, K.",
      "Nguyen, H.",
      "Gazit, L.",
      "Gangai, N.",
      "Cho, J.",
      "Nicholas, K.",
      "Zulkernine, F.",
      "Sevilimedu, V.",
      "Simpson, A.",
      "Do, R.",
    ],
    venue: "JCO Clinical Cancer Informatics",
    type: "Journal",
    link: "/#",
  },
  {
    year: 2021,
    title: "ReViSe: Remote Vital Signs Measurement Using Smartphone Camera",
    authors: [
      "Qiao, D.",
      "Ayesha, A.",
      "Zulkernine, F.",
      "Masroor, R.",
      "Jaffar, N.",
    ],
    venue:
      "IEEE Transactions on Emerging Topics in Computational Intelligence, Special Issue on Computational Intelligence to Edge AI for Ubiquitous IoT Systems",
    type: "Journal",
    link: "/#",
  },
  {
    year: 2021,
    title: "Text Encoding Models for Medical Data Analytics",
    authors: ["Zafari, H.", "Zulkernine, F.", "Kosowan, L.", "Singer, A."],
    venue: "Expert Systems With Applications",
    type: "Journal",
    link: "/#",
  },
  {
    year: 2021,
    title:
      "Automated Assessment of EMR Data for COPD Screening Using Machine Learning Algorithms",
    authors: [
      "Zafari, H.",
      "Kosowan, L.",
      "Zulkernine, F.",
      "Langlois, S.",
      "Singer, A.",
    ],
    venue: "Journal of Bio-systems",
    type: "Journal",
    link: "/#",
  },
  {
    year: 2020,
    title:
      "Impact of fucosylation on self-assembly of prostate and breast tumor spheroids by using cyclo-RGDfK(TPP) peptide and image object detection",
    authors: [
      "Kalaydina, RV.",
      "Zhou, H.",
      "Markvicheva, E.",
      "Burov, S.",
      "Zulkernine, F.",
      "Szewczuk, M.",
    ],
    venue: "OncoTargets and Therapy",
    type: "Journal",
    link: "/#",
  },
  {
    year: 2019,
    title:
      "Processing Real Time Data Streams: A Survey of Streaming Data Processing Engines",
    authors: [
      "Isah, H.",
      "Abughofa, T.",
      "Mahfuz, S.",
      "Ajerla D.",
      "Zulkernine F.",
    ],
    venue: "IEEE Access",
    type: "Journal",
    link: "/#",
  },
];
