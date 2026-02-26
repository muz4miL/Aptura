export const serviceMap = {
  "mobile-apps": {
    title: "Mobile Apps Development",
    description:
      "Transform your vision into high-performance mobile applications that are intuitive, scalable, and built for both iOS and Android platforms.",
    bgImage: "/images/services/mobileService.webp",
    features: [
      {
        title: "Cross-Platform App Development",
        items: ["Messaging apps", "Social media apps", "Productivity tools"],
      },
      {
        title: "Native App Development",
        items: ["Mobile banking apps", "Fitness tracking apps", "Gaming apps"],
      },
      {
        title: "Hybrid App Development",
        items: ["E-commerce apps", "Educational apps", "Event management apps"],
      },
    ],
    techStack: {
      frameworks: [
        { name: "React Native", icon: "/images/icons/icon10.png" },
        { name: "Flutter", icon: "/images/icons/icon7.webp" },
        { name: "Ionic / Capacitor", icon: "/images/icons/icon11.png" },
      ],
      languages: [
        { name: "JavaScript / TypeScript", icon: "/images/icons/icon5.png" },
        { name: "Swift (iOS)", icon: "/images/icons/icon4.png" },
        { name: "Kotlin (Android)", icon: "/images/icons/icon1.png" },
      ],
      mobDev: [
        { name: "React Native", icon: "/images/icons/icon10.png" },
        { name: "Swift (native iOS)", icon: "/images/icons/icon4.png" },
        { name: "Kotlin (native Android)", icon: "/images/icons/icon1.png" },
      ],
      database: [
        {
          icon: "/images/icons/icon12.png",
          name: "Firebase (Realtime / Firestore)",
        },
        {
          icon: "/images/icons/icon15.png",
          name: "PostgreSQL (server)",
        },
        {
          icon: "/images/icons/icon13.webp",
          name: "MongoDB (sync / offline)",
        },
      ],
      devops: [
        {
          icon: "/images/icons/icon9.png",
          name: "Docker (CI/CD containers)",
        },
        {
          icon: "/images/icons/icon12.png",
          name: "Firebase (hosting / auth / analytics)",
        },
        {
          icon: "/images/icons/icon14.png",
          name: "CI/CD (GitHub Actions / Fastlane)",
        },
      ],
    },
    industries: [
      {
        title: "FinTech",
        items: [
          "Billing & Payment Solutions",
          "Financial Analytics",
          "Personal Finance Management Apps",
        ],
      },
      {
        title: "HealthTech",
        items: [
          "EHR, EMR, Patient Portal",
          "Telemedicine Platforms",
          "Patient Monitoring",
        ],
      },
      {
        title: "E-commerce",
        items: [
          "B2B, B2C, C2C Platforms",
          "Shopping Cart Solutions",
          "Customer Relationship Management",
        ],
      },
    ],
    team: [
      { name: "App Development Lead", role: "Team Lead" },
      { name: "Senior Developer", role: "Senior App Developer" },
    ],
  },

  "web-development": {
    title: "Web Development",
    description:
      "Craft performant, user-focused web applications with robust backends and pixel-perfect frontends that elevate your brand's digital presence.",
    bgImage: "/images/services/webService.jpg",
    features: [
      {
        title: "E-commerce Development",
        items: [
          "Online retail stores",
          "Subscription services",
          "Multi-vendor marketplaces",
        ],
      },
      {
        title: "Content Management Systems (CMS)",
        items: [
          "Blogging platforms",
          "Corporate websites",
          "Online publications",
        ],
      },
      {
        title: "Customer Portals",
        items: [
          "Customer service portals",
          "Account management systems",
          "Self-service dashboards",
        ],
      },
    ],
    techStack: {
      frameworks: [
        { name: "React / Next.js", icon: "/images/icons/icon10.png" },
        { name: "Angular", icon: "/images/icons/icon7.webp" },
        { name: "NestJS (backend)", icon: "/images/icons/icon11.png" },
      ],
      languages: [
        { name: "JavaScript / TypeScript", icon: "/images/icons/icon5.png" },
        { name: "Node.js (server-side)", icon: "/images/icons/icon3.webp" },
        {
          name: "Python / PHP (where required)",
          icon: "/images/icons/icon2.png",
        },
      ],
      webDev: [
        {
          name: "React / Next.js (SSR & SSG)",
          icon: "/images/icons/icon10.png",
        },
        { name: "REST & GraphQL APIs", icon: "/images/icons/icon11.png" },
        { name: "Serverless (optional)", icon: "/images/icons/icon12.png" },
      ],
      database: [
        { icon: "/images/icons/icon15.png", name: "PostgreSQL" },
        { icon: "/images/icons/icon14.png", name: "MySQL / MariaDB" },
        { icon: "/images/icons/icon13.webp", name: "MongoDB" },
        {
          icon: "/images/icons/icon12.png",
          name: "Firebase (auth & realtime features)",
        },
      ],
      devops: [
        { icon: "/images/icons/icon9.png", name: "Docker (containers)" },
        {
          icon: "/images/icons/icon12.png",
          name: "Firebase / Vercel (hosting)",
        },
        {
          icon: "/images/icons/icon15.png",
          name: "CI/CD (GitHub Actions, pipelines)",
        },
      ],
    },
    industries: [
      {
        title: "FinTech",
        items: [
          "Billing & Payment Solutions",
          "Financial Analytics",
          "Personal Finance Management",
        ],
      },
      {
        title: "HealthTech",
        items: [
          "EHR, EMR, Patient Portal",
          "Telemedicine Platforms",
          "Patient Monitoring",
        ],
      },
      {
        title: "E-commerce",
        items: [
          "B2B, B2C, C2C Platforms",
          "Shopping Cart Solutions",
          "Customer Relationship Management",
        ],
      },
    ],
    team: [
      { name: "Web Development Lead", role: "Team Lead" },
      { name: "Senior Web Developer", role: "Full Stack Developer" },
    ],
  },

  ai: {
    title: "AI & ML Solutions",
    description:
      "Leverage cutting-edge artificial intelligence to build predictive, intelligent, and adaptive software systems that evolve with your data.",
    bgImage: "/images/services/aiService.jpg",
    features: [
      {
        title: "Intelligent Automation",
        items: [
          "AI chatbots & assistants",
          "Image & speech recognition",
          "Predictive analytics",
        ],
      },
      {
        title: "Data-Driven Insights",
        items: [
          "Natural Language Processing (NLP)",
          "Deep learning models",
          "Computer vision",
        ],
      },
      {
        title: "Scalable & Adaptive Systems",
        items: [
          "Machine learning pipelines",
          "Model deployment & management",
          "AI-powered recommendation engines",
        ],
      },
    ],
    techStack: {
      frameworks: [
        { name: "TensorFlow / Keras", icon: "/images/icons/icon11.png" },
        { name: "PyTorch", icon: "/images/icons/icon10.png" },
        {
          name: "scikit-learn (classical ML)",
          icon: "/images/icons/icon7.webp",
        },
      ],
      languages: [
        { name: "Python (primary)", icon: "/images/icons/icon3.webp" },
        { name: "R (analytics)", icon: "/images/icons/icon5.png" },
        {
          name: "Java / C++ (production where needed)",
          icon: "/images/icons/icon2.png",
        },
      ],
      ai: [
        { name: "TensorFlow", icon: "/images/icons/icon11.png" },
        { name: "PyTorch", icon: "/images/icons/icon10.png" },
        { name: "scikit-learn", icon: "/images/icons/icon7.webp" },
      ],
      database: [
        {
          icon: "/images/icons/icon15.png",
          name: "PostgreSQL (feature store)",
        },
        { icon: "/images/icons/icon14.png", name: "MySQL" },
        {
          icon: "/images/icons/icon13.webp",
          name: "MongoDB (unstructured data)",
        },
        {
          icon: "/images/icons/icon12.png",
          name: "Firebase (lightweight RT needs)",
        },
      ],
      devops: [
        { icon: "/images/icons/icon9.png", name: "Docker (model containers)" },
        {
          icon: "/images/icons/icon12.png",
          name: "MLflow / Firebase (tracking & hosting)",
        },
        {
          icon: "/images/icons/icon15.png",
          name: "CI/CD for models (pipelines)",
        },
      ],
    },
    industries: [
      {
        title: "Healthcare",
        items: [
          "Medical image diagnostics",
          "Patient data predictions",
          "Chatbot triage systems",
        ],
      },
      {
        title: "Finance",
        items: [
          "Risk assessment engines",
          "Smart fraud detection",
          "Automated credit scoring",
        ],
      },
      {
        title: "Retail",
        items: [
          "Personalized product recommendations",
          "Supply chain optimization",
          "Demand forecasting",
        ],
      },
    ],
    team: [
      { name: "AI Team Lead", role: "Team Lead" },
      { name: "ML Engineer", role: "Senior AI Engineer" },
    ],
  },

  cybersecurity: {
    title: "Cybersecurity Services",
    description:
      "Protect your digital assets with proactive security solutions, penetration testing, and 24/7 monitoring tailored to your risk profile.",
    bgImage: "/images/services/cyberService.jpg",
    features: [
      {
        title: "Enterprise-Grade Security",
        items: [
          "Threat modeling & mitigation",
          "Zero-trust architecture",
          "Incident response & forensics",
        ],
      },
      {
        title: "Vulnerability Management",
        items: [
          "Penetration testing",
          "Security audits & assessments",
          "Compliance & governance",
        ],
      },
      {
        title: "24/7 Security Operations",
        items: [
          "Real-time threat monitoring",
          "Intrusion detection systems",
          "Security Information and Event Management (SIEM)",
        ],
      },
    ],
    techStack: {
      frameworks: [
        {
          name: "Security automation & orchestration",
          icon: "/images/icons/icon11.png",
        },
        { name: "Threat intel platforms", icon: "/images/icons/icon10.png" },
        { name: "SIEM integrations", icon: "/images/icons/icon7.webp" },
      ],
      languages: [
        {
          name: "Python (scripting & automation)",
          icon: "/images/icons/icon3.webp",
        },
        {
          name: "Go / Rust (high-performance tooling)",
          icon: "/images/icons/icon5.png",
        },
        {
          name: "C / C++ (low-level analysis)",
          icon: "/images/icons/icon2.png",
        },
      ],
      cybersecurity: [
        {
          name: "Penetration testing tools (Nmap, Burp)",
          icon: "/images/icons/icon3.webp",
        },
        {
          name: "SIEM / EDR integrations",
          icon: "/images/icons/icon11.png",
        },
      ],
      database: [
        {
          icon: "/images/icons/icon15.png",
          name: "PostgreSQL (alerts & logs)",
        },
        {
          icon: "/images/icons/icon13.webp",
          name: "MongoDB (events / telemetry)",
        },
        {
          icon: "/images/icons/icon12.png",
          name: "Firebase (notifications / quick prototypes)",
        },
      ],
      devops: [
        {
          icon: "/images/icons/icon9.png",
          name: "Docker (isolated tooling)",
        },
        {
          icon: "/images/icons/icon12.png",
          name: "Cloud logging & monitoring (Firebase / GCP)",
        },
      ],
    },
    industries: [
      {
        title: "Banking & Finance",
        items: [
          "Transaction security layers",
          "Real-time anomaly detection",
          "Regulatory compliance enforcement",
        ],
      },
      {
        title: "Healthcare",
        items: [
          "Encrypted medical records",
          "Breach simulations",
          "HIPAA readiness assessments",
        ],
      },
      {
        title: "E-commerce",
        items: [
          "Payment gateway security",
          "DDoS protection",
          "Customer data protection",
        ],
      },
    ],
    team: [
      { name: "Security Lead", role: "Team Lead" },
      { name: "Security Analyst", role: "Cybersecurity Specialist" },
    ],
  },

  "ui-ux": {
    title: "UI/UX Design",
    description:
      "Create human-centered, intuitive, and beautiful digital experiences that drive engagement and retention through strategic design.",
    bgImage: "/images/services/uiuxService.jpg",
    features: [
      {
        title: "Design-Led Innovation",
        items: [
          "User journey mapping",
          "Design systems & components",
          "Interactive prototypes & testing",
        ],
      },
      {
        title: "User Research & Strategy",
        items: [
          "User persona creation",
          "Competitive analysis",
          "Usability testing & interviews",
        ],
      },
      {
        title: "Visual & Interaction Design",
        items: [
          "High-fidelity mockups",
          "Micro-interactions & animations",
          "Accessibility & inclusive design",
        ],
      },
    ],
    techStack: {
      frameworks: [
        {
          name: "Design systems (Figma / Adobe XD)",
          icon: "/images/icons/icon7.webp",
        },
        { name: "Prototyping & testing", icon: "/images/icons/icon10.png" },
        { name: "Component libraries", icon: "/images/icons/icon11.png" },
      ],
      devops: [
        {
          icon: "/images/icons/icon12.png",
          name: "Design handoff (Zeplin / Storybook)",
        },
        {
          icon: "/images/icons/icon9.png",
          name: "Versioning & asset storage (Git / Docker for demos)",
        },
      ],
    },
    industries: [
      {
        title: "Startups",
        items: [
          "MVP design sprints",
          "Brand-first UI",
          "Fast iteration cycles",
        ],
      },
      {
        title: "Enterprise",
        items: [
          "Accessible UI at scale",
          "Multi-platform consistency",
          "Custom UI component libraries",
        ],
      },
      {
        title: "E-commerce & Retail",
        items: [
          "Optimized checkout flows",
          "Product catalog design",
          "Conversion rate optimization",
        ],
      },
    ],
    team: [],
  },

  iot: {
    title: "IoT Development",
    description:
      "Connect devices, data, and users through scalable IoT solutions — from smart homes to industrial automation and predictive maintenance.",
    bgImage: "/images/services/iotService.jpg",
    features: [
      {
        title: "Connected Ecosystems",
        items: [
          "Sensor integration",
          "Real-time device dashboards",
          "Edge computing optimization",
        ],
      },
      {
        title: "Data Management & Analytics",
        items: [
          "Cloud integration & data lakes",
          "Real-time stream processing",
          "Machine learning for IoT data",
        ],
      },
      {
        title: "Security & Scalability",
        items: [
          "Device authentication & encryption",
          "Over-the-air (OTA) updates",
          "Scalable cloud infrastructure",
        ],
      },
    ],
    techStack: {
      frameworks: [
        {
          name: "Edge frameworks (EdgeX, custom Node services)",
          icon: "/images/icons/icon11.png",
        },
        { name: "MQTT / CoAP stacks", icon: "/images/icons/icon10.png" },
        {
          name: "Embedded firmware toolchains",
          icon: "/images/icons/icon7.webp",
        },
      ],
      languages: [
        {
          icon: "/images/icons/icon3.webp",
          name: "Python (data & server side)",
        },
        { icon: "/images/icons/icon2.png", name: "C / C++ (firmware)" },
        {
          icon: "/images/icons/icon5.png",
          name: "JavaScript / Node.js (edge services)",
        },
      ],
      database: [
        {
          icon: "/images/icons/icon15.png",
          name: "PostgreSQL (long-term storage)",
        },
        {
          icon: "/images/icons/icon14.png",
          name: "MySQL (device metadata)",
        },
        { icon: "/images/icons/icon13.webp", name: "MongoDB (telemetry)" },
        {
          icon: "/images/icons/icon12.png",
          name: "Firebase (prototypes / realtime dashboards)",
        },
      ],
      devops: [
        {
          icon: "/images/icons/icon9.png",
          name: "Docker (edge & cloud containers)",
        },
        {
          icon: "/images/icons/icon12.png",
          name: "Cloud IoT Platform (Firebase / GCP)",
        },
        {
          icon: "/images/icons/icon15.png",
          name: "Time-series / monitoring (InfluxDB, Prometheus)",
        },
      ],
    },
    industries: [
      {
        title: "Smart Cities",
        items: [
          "Traffic & utility management",
          "Surveillance integrations",
          "Waste & water monitoring",
        ],
      },
      {
        title: "Manufacturing",
        items: [
          "Predictive maintenance",
          "Remote equipment control",
          "Production analytics",
        ],
      },
      {
        title: "Healthcare & Wellness",
        items: [
          "Remote patient monitoring",
          "Smart medical device management",
          "Personalized health tracking",
        ],
      },
    ],
    team: [],
  },
};
