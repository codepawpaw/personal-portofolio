export type PortfolioProject = {
  title: string;
  company: string;
  description: string;
  tech: string[];
  achievements: string[];
};

export const portfolio: PortfolioProject[] = [
  {
    title: "CRM Engine",
    company: "Bornevia",
    description:
      "A CRM platform with a plug-and-play chat widget, running realtime messaging over WebSocket on AWS and serving hundreds of companies with large concurrent user bases.",
    tech: ["Node.js", "AngularJS", "WebSocket", "AWS"],
    achievements: [
      "Plug-and-play chat system embeddable into any client site",
      "Realtime messaging at scale across hundreds of companies",
    ],
  },
  {
    title: "Desktop Messaging System",
    company: "Blackberry Messenger",
    description:
      "A browser-based desktop messaging system handling millions of daily users, built on Java and C++ running on Google Cloud, engineered for durability and low latency.",
    tech: ["Java", "C++", "Google Cloud", "WebSocket"],
    achievements: [
      "Served millions of daily active users",
      "Reduced chat latency from 3 seconds to 100 milliseconds",
      "Zero-downtime migration from on-premise to cloud infrastructure",
    ],
  },
  {
    title: "Financial Education Platform",
    company: "Ternakuang",
    description:
      "Led the full migration of a WordPress-based platform — which kept failing under transaction load — to a Node.js, AWS, and Kubernetes stack connected in realtime to stock market data.",
    tech: ["Node.js", "Kubernetes", "AWS", "Realtime Market Data"],
    achievements: [
      "Designed the entire infrastructure from scratch",
      "Eliminated failures under thousands of concurrent transactions",
      "Increased overall platform performance by 60%",
    ],
  },
  {
    title: "Blockchain Student Scoring System",
    company: "Independent / Consulting",
    description:
      "A smart-contract-backed scoring system plugged into an existing online learning platform, keeping student scores transparent and immutable to build trust with employers.",
    tech: ["Blockchain", "Smart Contracts", "Node.js"],
    achievements: [
      "Immutable, verifiable student records for employers",
      "Integrated into an existing e-learning platform with no disruption",
    ],
  },
  {
    title: "Payment System",
    company: "Vidio.com",
    description:
      "A high-throughput payment system with circuit breakers on all external API calls, rebuilt for speed, reliability, and data consistency.",
    tech: ["Java", "Kotlin", "PostgreSQL", "Redis"],
    achievements: [
      "Cut payment completion time from ~10 minutes to ~1 minute",
      "Prevented an estimated $422,705 loss from a recurring-transaction bug",
      "Added circuit breakers across all external API integrations",
    ],
  },
  {
    title: "Chat & Notification Platform",
    company: "Vidio.com",
    description:
      "High-concurrency chat, notification, and engagement systems migrated onto Kubernetes with zero downtime and continuous monitoring.",
    tech: ["Kubernetes", "Google Pub/Sub", "Redis", "Datadog"],
    achievements: [
      "Migrated to Kubernetes with zero downtime",
      "Raised notification delivery rate from 80% to 99.9%",
      "Built realtime monitoring and auto-rollback for production services",
    ],
  },
  {
    title: "Grocery Inventory + Object Detection",
    company: "Self Employed",
    description:
      "An inventory and supply management system for a grocery store using realtime object detection to track stock levels automatically.",
    tech: ["Python", "YOLOv8", "Computer Vision"],
    achievements: ["Realtime item detection for inventory tracking"],
  },
  {
    title: "Car Service Booking System",
    company: "Self Employed",
    description:
      "A booking platform for a car service business, built with a deliberately lean stack to avoid unnecessary complexity while meeting all business requirements.",
    tech: ["Node.js", "MySQL", "AWS"],
    achievements: ["Delivered without adding unnecessary architectural complexity"],
  },
];
