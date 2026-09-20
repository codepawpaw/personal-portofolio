export type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  tech: string[];
  achievements: string[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "Vidio.com",
    role: "Senior Software Engineer",
    period: "2019 — Present",
    tech: ["Java", "Kotlin", "Ruby on Rails", "Kubernetes", "Google Cloud", "PostgreSQL", "Redis", "Google Pub/Sub"],
    achievements: [
      "Reduced production bugs by implementing canary deployment",
      "Sped up payment completion time from ~10 minutes to ~1 minute",
      "Increased notification delivery rate from 80% to 99.9%",
      "Migrated chat, notification, and engagement systems to Kubernetes with zero downtime",
      "Prevented an estimated $422,705 loss from a recurring partner-transaction issue",
    ],
  },
  {
    company: "Self Employed",
    role: "Tech Consulting",
    period: "2024 — Current",
    tech: ["Node.js", "Python", "C++", "AWS", "Google Cloud", "MongoDB", "React Native"],
    achievements: [
      "Optimized cloud infrastructure cost for multiple clients",
      "Built a grocery inventory system with realtime object detection using YOLOv8",
      "Advised clients on adopting private blockchain solutions",
      "Built a car service booking platform without unnecessary complexity",
    ],
  },
  {
    company: "Ternakuang",
    role: "Head of Engineering",
    period: "2019 — 2021",
    tech: ["Node.js", "Golang", "Rust", "Kubernetes", "AWS", "Google Cloud", "MongoDB"],
    achievements: [
      "Migrated a failing WordPress platform to a fully micro-service architecture on Google Cloud",
      "Reduced infrastructure cost by migrating from AWS to GKE",
      "Increased website performance by 60%",
      "Led and mentored a remote team of 15 engineers",
      "Designed and built the CI/CD pipeline and cloud infrastructure from scratch",
    ],
  },
  {
    company: "Blackberry Messenger",
    role: "Full Stack Software Engineer",
    period: "2017 — 2019",
    tech: ["Java", "Kotlin", "C++", "Node.js", "gRPC", "WebSocket", "Google Cloud"],
    achievements: [
      "Shipped 2 new products: a web chat system and a news website",
      "Reduced chat system latency from 3 seconds to 100 milliseconds",
      "Migrated the legacy on-premise chat system to the cloud with zero downtime",
      "Built a C++ client SDK with zero reported bugs",
    ],
  },
  {
    company: "Bornevia",
    role: "Senior Software Engineer",
    period: "2016 — 2017",
    tech: ["Java", "Node.js", "Ruby on Rails", "WebSocket", "AWS", "MongoDB", "AngularJS"],
    achievements: [
      "Built a CRM engine with a plug-and-play, realtime chat widget",
      "Served hundreds of companies with large concurrent user bases",
      "Developed and maintained products across Android and Web",
    ],
  },
  {
    company: "Allegro",
    role: "Java Engineer",
    period: "2015 — 2016",
    tech: ["Java", "MySQL", "JavaScript"],
    achievements: [
      "Collaborated with product management on feature delivery",
      "Fixed bugs and shipped new features alongside the engineering team",
    ],
  },
];
