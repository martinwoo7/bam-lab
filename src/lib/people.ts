export interface Person {
  name: string;
  role: string; // PhD Candidate, Postdoc Researcher, Masters Student, etc.
  image?: string; // Reference the items using "/image-name.jpg"
  date?: string; // Date started with the lab (etc. "Jan 2024")
  email: string;
  website?: string;
  topic?: string; // Topic of study
}

export interface People {
  faculty: Person[];
  postdocs: Person[];
  phd: Person[];
  masters: Person[];
  undergrad: Person[];
}

export interface PreviousPerson {
  name: string;
  period: string;
  cosupervised?: boolean;
  incomplete?: boolean;
  url?: string;
  funding?: string[];
  project?: boolean;
  eng?: boolean;
  type?: string;
  topic?: string;
}

export interface PreviousPeople {
  faculty: PreviousPerson[];
  postdocs: PreviousPerson[];
  phd: PreviousPerson[];
  masters: PreviousPerson[];
  undergrad: PreviousPerson[];
  highschool: PreviousPerson[];
}

export const PreviousPeople: Record<
  "faculty" | "postdocs" | "phd" | "masters" | "undergrad" | "highschool",
  PreviousPerson[]
> = {
  faculty: [],
  postdocs: [
    {
      name: "Hasan Zafari",
      period: "2018-2022",
      funding: ["Mitacs", "CIMVHR", "IBM", "Pfizer"],
      topic: "Using Advanced Analytics to Understand PTSD (UAAUP)",
    },
    {
      name: "Haruna Isah",
      period: "2017-2019",
      funding: ["SOSCIP", "Gnowit", "IBM"],
      topic:
        "A Multilevel Streaming Data Analytics Infrastructure for Predictive Analytics",
    },
  ],
  phd: [
    {
      name: "Ahmed Harby",
      period: "2020-2025",
      topic:
        "Distributed cloud-based knowledge graph architecture, management and querying.",
    },
    {
      name: "Donghao Qiao",
      period: "2019-2023",
      topic: "Pattern learning from video data for autonomous vehicles.",
    },
    {
      name: "Sazia Mahfuz",
      period: "2017-2023",
      topic: "A smart data profiling framework.",
    },
    {
      name: "Mojtaba Moattari",
      period: "2020-2024",
      incomplete: true,
      topic:
        "Machine cognition using multimodal asynchronous data stream processing and concept learning.",
    },
    {
      name: "Ftoon Kedwan",
      period: "2017-2019",
      cosupervised: true,
      incomplete: true,
      topic: "A hybrid knowledge management doctoral student framework.",
    },
    {
      name: "Tarek Ahmed",
      period: "2016",
      cosupervised: true,
      incomplete: true,
      topic:
        "Proactive autoscaling of resources for steam processing engines in the cloud.",
    },
    {
      name: "Rizwan Mian",
      period: "2012-2014",
      cosupervised: true,
      topic:
        "Determining cost-effective resource configurations for executing data-intensive workloads in public clouds.",
    },
  ],
  masters: [
    {
      name: "Jacqueline Chan",
      period: "2021-2025",
      topic: "Authentication and password based security.",
    },
    {
      name: "Nafiz Sadman",
      period: "2022-2024",
      topic: "Security and authentication of user data for Triage-bot.",
    },
    {
      name: "Jackson Cai",
      period: "2023-2024",
      topic:
        "Analysis of medical structured and unstructured data for disease analysis and prediction.",
    },
    {
      name: "Zihan Zhang",
      period: "2023-2024",
      topic:
        "Analyzing radar point cloud data and video data for human activity recognition.",
    },
    {
      name: "Drishti Sharma",
      period: "2023-2024",
      project: true,
      topic:
        "Developing a dialogue system for a chat bot for medical triage system.",
    },
    {
      name: "Vidhi Kokel",
      period: "2022-2023",
      eng: true,
      topic:
        "Analysis of medical structured and unstructured data for a study on Osteoarthritis funded by Pfizer.",
    },
  ],
  undergrad: [],
  highschool: [],
};

export const People: Record<
  "faculty" | "postdocs" | "phd" | "masters" | "undergrad",
  Person[]
> = {
  faculty: [
    {
      name: "Dr. Farhana H. Zulkernine",
      role: "Lab Director & Professor",
      email: "farhana.zulkernine@queensu.ca",
    },
  ],
  postdocs: [],
  phd: [
    {
      name: "Jing Tao",
      role: "PhD Student",
      date: "Jan 2025",
      email: "student@queensu.ca",
      topic:
        "Goal oriented dialogue system for information extraction in remote service provisioning.",
    },
    {
      name: "Nafiz Sadman",
      role: "PhD Student",
      date: "Sep 2024",
      email: "student@queensu.ca",
      topic:
        "Explainable AI and rule extraction from multimodal image and text data.",
    },
    {
      name: "Farida Mohamad",
      role: "PhD Student",
      date: "Jan 2024",
      email: "student@queensu.ca",
      website: "/#",
      topic:
        "Remote monitoring of vital signs and predictive and prescriptive medical data analytics.",
    },
    {
      name: "Aman Anand",
      role: "PhD Student",
      date: "Sep 2023",
      email: "student@queensu.ca",
      topic: "Situation aware human activity monitoring.",
    },
    {
      name: "Amir Eskandari ",
      role: "PhD Student",
      date: "Sep 2023",
      email: "student@queensu.ca",
      topic:
        "Multimodal graph data analytics for personalized conversational AI in human computer interation.",
    },
    {
      name: "Elyas Rashno",
      role: "PhD Student",
      date: "Sep 2022",
      email: "student@queensu.ca",
      website: "/#",
      topic:
        "Multimodal streaming data management and analysis for Triage-bot.",
    },
    {
      name: "Yuhao Chen",
      role: "PhD Student",
      date: "Sep 2021",
      email: "student@queensu.ca",
      topic:
        "Using deep learning for knowledge extraction from unstructure text data.",
    },
  ],
  masters: [],
  undergrad: [],
};
