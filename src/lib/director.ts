export const director: {
  full_title: string;
  first_name: string;
  full_name: string;
  email: string;
} = {
  full_title: "Dr. John Doe",
  first_name: "John",
  full_name: "John Doe",
  email: "john.doe@university.edu",
};

export const directorAwards: { year: number; name: string }[] = [
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
export const directorConferences: Conferences[] = [
  {
    title: "Workshop Chair",
    workshop: "Advances in Neural Architecture Search",
    workshop_url: "#",
    conference: "Computer Vision and Pattern Recognition (CVPR)",
    conference_url: "#",
    date: "June 18-22, 2023",
    location: "Vancouver, Canada",
  },
  {
    title: "Area Chair",
    conference: "Neural Information Processing Systems (NeurIPS)",
    conference_url: "#",
    date: "December 10-16, 2024",
    location: "New Orleans, USA",
  },
  {
    title: "Program Chair",
    conference: "International Conference on Machine Learning (ICML)",
    conference_url: "#",
    date: "July 21-27, 2025",
    location: "Vancouver, Canada",
  },
  {
    title: "Program Chair",
    conference: "IEEE International Conference on Digital Health (ICDH)",
    conference_url: "https://conferences.computer.org/services/2021/",
    date: "September 5-11, 2021",
    location: "Barcelona, Spain",
  },
  {
    title: "Senior Program Committee Member",
    conference: "AAAI Conference on Artificial Intelligence",
    conference_url: "#",
    date: "February 7-14, 2022",
    location: "Virtual Conference",
  },
];

export const directorInterests = [
  "Streaming Data Management",
  "Streaming Data Analytics",
  "Artificial Intelligence",
  "Deep Learning",
  "Decision Support Systems (DSS)",
  "Cognitive Computing",
  "Knowledge Mangement Systems",
  "Cloud and Services Computing",
];

export const directorApplications = [
  "Medical Information Systems",
  "Wearable Health Monitors",
  "Autonomous Vehicles",
  "Smart Cities",
  "Medical/Law/Financial Analytics",
];

export const directorMembership = [
  "ACM Fellow",
  "IEEE Senior Member",
  "AAAI Member",
];
